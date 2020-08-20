/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getTodo = /* GraphQL */ `
  query GetTodo($id: ID!) {
    getTodo(id: $id) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listTodos = /* GraphQL */ `
  query ListTodos(
    $filter: ModelTodoFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getRequestList = /* GraphQL */ `
  query GetRequestList($recycle_request_id: String!, $createdAt: AWSDateTime!) {
    getRequestList(
      recycle_request_id: $recycle_request_id
      createdAt: $createdAt
    ) {
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
export const listRequestLists = /* GraphQL */ `
  query ListRequestLists(
    $recycle_request_id: String
    $createdAt: ModelStringKeyConditionInput
    $filter: ModelRequestListFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listRequestLists(
      recycle_request_id: $recycle_request_id
      createdAt: $createdAt
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
    }
  }
`;
export const getRequesBid = /* GraphQL */ `
  query GetRequesBid($recycle_request_id: String!, $seq_user_id: Int!) {
    getRequesBid(
      recycle_request_id: $recycle_request_id
      seq_user_id: $seq_user_id
    ) {
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
export const listRequesBids = /* GraphQL */ `
  query ListRequesBids(
    $recycle_request_id: String
    $seq_user_id: ModelIntKeyConditionInput
    $filter: ModelRequesBidFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listRequesBids(
      recycle_request_id: $recycle_request_id
      seq_user_id: $seq_user_id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        recycle_request_id
        seq_user_id
        item_data
        user_data
        createdAt
        updatedAt
        TTL
        owner
      }
      nextToken
    }
  }
`;
export const listSortedByStatus = /* GraphQL */ `
  query ListSortedByStatus(
    $bid_status: String
    $dead_line: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelRequestListFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSortedByStatus(
      bid_status: $bid_status
      dead_line: $dead_line
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
    }
  }
`;
