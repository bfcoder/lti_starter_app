DatetimeType = GraphQL::ScalarType.define do
  name "Datetime"
  description "Datetime"

  coerce_input ->(value) { value }
  coerce_result ->(value) { value }
end
