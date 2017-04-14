JSONType = GraphQL::ScalarType.define do
  name "JSON"
  description "JSON value"

  coerce_input ->(value) { value }
  coerce_result ->(value) { value }
end
