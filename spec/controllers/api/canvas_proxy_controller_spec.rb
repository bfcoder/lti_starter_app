require "rails_helper"

RSpec.describe Api::CanvasProxyController, type: :controller do
  before do
    @application = FactoryGirl.create(
      :application,
      canvas_api_permissions: "LIST_ACCOUNTS,LIST_YOUR_COURSES,CREATE_NEW_SUB_ACCOUNT,UPDATE_ACCOUNT",
    )
    @application_instance = FactoryGirl.create(:application_instance, application: @application)
    @user = FactoryGirl.create(:user)
    @user.confirm
    @user_token = AuthToken.issue_token({ user_id: @user.id })
  end

  describe "proxy without authorization" do
    describe "GET" do
      it "should return an unauthorized" do
        get :proxy, params: { type: "foo" }, format: :json
        expect(response).to have_http_status(:unauthorized)
      end
    end
  end

  describe "proxy" do
    before do
      allow(controller).to receive(:current_application_instance).and_return(@application_instance)
      allow(Application).to receive(:find_by).with(:lti_key).and_return(@application_instance)
      request.headers["Authorization"] = @user_token
      allow(controller.request).to receive(:host).and_return("example.com")
    end

    describe "GET" do
      it "should successfully call the canvas api" do
        type = "LIST_ACCOUNTS"
        get :proxy, params: { type: type, lti_key: @application_instance.lti_key }, format: :json
        expect(response).to have_http_status(:success)
      end
      it "should successfully call the canvas api to generate a url to get courses" do
        type = "LIST_YOUR_COURSES"
        get :proxy, params: { type: type, lti_key: @application_instance.lti_key, account_id: 1 }, format: :json
        expect(response).to have_http_status(:success)
      end
      it "should successfully call the canvas api to generate a url to get courses with extra params" do
        type = "LIST_YOUR_COURSES"
        get :proxy,
            params: {
              type: type,
              lti_key: @application_instance.lti_key,
              account_id: 1,
              include: [1, 2],
              per_page: 100,
            },
            format: :json
        expect(response).to have_http_status(:success)
      end
    end

    describe "POST" do
      it "successfully posts to the canvas api" do
        type = "CREATE_NEW_SUB_ACCOUNT"
        payload = {
          account: { name: "Canvas Demo Courses" },
        }.to_json
        post :proxy,
             body: payload,
             params: {
               type: type,
               lti_key: @application_instance.lti_key,
               account_id: 1,
             },
             format: :json
        expect(JSON.parse(response.body)["name"]).to eq("Canvas Demo Courses")
      end
    end

    describe "PUT" do
      it "successfully puts to the canvas api" do
        type = "UPDATE_ACCOUNT"
        payload = {
          name: "Canvas Demo Courses",
        }.to_json
        put :proxy,
            body: payload,
            params: {
              type: type,
              lti_key: @application_instance.lti_key,
              id: 1,
            },
            format: :json
        expect(JSON.parse(response.body)["name"]).to eq("Canvas Demo Courses")
      end
    end
  end
end
