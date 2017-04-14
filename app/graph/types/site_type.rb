require_relative "../scalar_types/datetime_type"

SiteType = GraphQL::ObjectType.define do
  name "Site"
  description "A site for domains."
  # `!` marks a field as "non-null"
  field :id, !types.ID
  field :url, types.String
  field :oauth_key, types.String
  field :oauth_secret, types.String
  field :created_at, !DatetimeType
  field :updated_at, !DatetimeType
end
