require_relative "../scalar_types/json_type"
require_relative "../scalar_types/datetime_type"

ApplicationType = GraphQL::ObjectType.define do
  name "Application"
  description "An application."
  # `!` marks a field as "non-null"
  field :id, !types.ID
  field :name, types.String
  field :description, types.String
  field :client_application_name, types.String
  field :created_at, !DatetimeType
  field :updated_at, !DatetimeType
  field :canvas_api_permissions, types.String
  field :kind, types.ID
  field :application_instances_count, types.ID
  field :default_config, JSONType
end
