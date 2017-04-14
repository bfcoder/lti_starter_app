require_relative "./application_type"
require_relative "./application_instance_type"
require_relative "./site_type"

QueryType = GraphQL::ObjectType.define do
  name "Query"
  description "The query root for this schema"

  field :application do
    type ApplicationType
    argument :id, !types.ID
    description "Find an Application by ID"
    resolve ->(_obj, args, _ctx) { Application.find(args["id"]) }
  end

  field :application_instance do
    type ApplicationInstanceType
    argument :id, !types.ID
    description "Find an Application Instance by ID"
    resolve ->(_obj, args, _ctx) { ApplicationInstance.find(args["id"]) }
  end

  field :site do
    type SiteType
    argument :id, !types.ID
    description "Find a Site by ID"
    resolve ->(_obj, args, _ctx) { Site.find(args["id"]) }
  end
end
