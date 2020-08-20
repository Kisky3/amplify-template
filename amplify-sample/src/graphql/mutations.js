/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createTodo = /* GraphQL */ `
  mutation CreateTodo(
    $input: CreateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    createTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateTodo = /* GraphQL */ `
  mutation UpdateTodo(
    $input: UpdateTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    updateTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteTodo = /* GraphQL */ `
  mutation DeleteTodo(
    $input: DeleteTodoInput!
    $condition: ModelTodoConditionInput
  ) {
    deleteTodo(input: $input, condition: $condition) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createRequestList = /* GraphQL */ `
  mutation CreateRequestList(
    $input: CreateRequestListInput!
    $condition: ModelRequestListConditionInput
  ) {
    createRequestList(input: $input, condition: $condition) {
      recycle_request_id
      dead_line
      bid_count
      bid_status
      prif_id
      city_id
      category2_id
      category3_id
      item_data
      user_data
      lat
      long
      createdAt
      updatedAt
      TTL
    }
  }
`;
export const updateRequestList = /* GraphQL */ `
  mutation UpdateRequestList(
    $input: UpdateRequestListInput!
    $condition: ModelRequestListConditionInput
  ) {
    updateRequestList(input: $input, condition: $condition) {
      recycle_request_id
      dead_line
      bid_count
      bid_status
      prif_id
      city_id
      category2_id
      category3_id
      item_data
      user_data
      lat
      long
      createdAt
      updatedAt
      TTL
    }
  }
`;
export const deleteRequestList = /* GraphQL */ `
  mutation DeleteRequestList(
    $input: DeleteRequestListInput!
    $condition: ModelRequestListConditionInput
  ) {
    deleteRequestList(input: $input, condition: $condition) {
      recycle_request_id
      dead_line
      bid_count
      bid_status
      prif_id
      city_id
      category2_id
      category3_id
      item_data
      user_data
      lat
      long
      createdAt
      updatedAt
      TTL
    }
  }
`;
export const createRequesBid = /* GraphQL */ `
  mutation CreateRequesBid(
    $input: CreateRequesBidInput!
    $condition: ModelRequesBidConditionInput
  ) {
    createRequesBid(input: $input, condition: $condition) {
      recycle_request_id
      seq_user_id
      item_data
      user_data
      createdAt
      updatedAt
      TTL
      owner
    }
  }
`;
export const updateRequesBid = /* GraphQL */ `
  mutation UpdateRequesBid(
    $input: UpdateRequesBidInput!
    $condition: ModelRequesBidConditionInput
  ) {
    updateRequesBid(input: $input, condition: $condition) {
      recycle_request_id
      seq_user_id
      item_data
      user_data
      createdAt
      updatedAt
      TTL
      owner
    }
  }
`;
export const deleteRequesBid = /* GraphQL */ `
  mutation DeleteRequesBid(
    $input: DeleteRequesBidInput!
    $condition: ModelRequesBidConditionInput
  ) {
    deleteRequesBid(input: $input, condition: $condition) {
      recycle_request_id
      seq_user_id
      item_data
      user_data
      createdAt
      updatedAt
      TTL
      owner
    }
  }
`;
