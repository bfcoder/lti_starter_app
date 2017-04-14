require_relative "./types/query_type"

Schema = GraphQL::Schema.define do
  query QueryType
end
