require_relative "../scalar_types/json_type"
require_relative "../scalar_types/datetime_type"

ApplicationInstanceType = GraphQL::ObjectType.define do
  name "ApplicationInstance"
  description "An instance of an application."
  # `!` marks a field as "non-null"
  field :id, !types.ID
  field :application, ApplicationType
  field :lti_key, types.String
  field :lti_secret, types.String
  field :encrypted_canvas_token, types.String
  field :encrypted_canvas_token_salt, types.String
  field :encrypted_canvas_token_iv, types.String
  field :created_at, !DatetimeType
  field :updated_at, !DatetimeType
  field :domain, types.String
  field :site, SiteType
  field :tenant, types.String
  field :config, types.String
  field :config, JSONType
end
