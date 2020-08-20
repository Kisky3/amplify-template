/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateTodo = /* GraphQL */ `
  subscription OnCreateTodo($owner: String!) {
    onCreateTodo(owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateTodo = /* GraphQL */ `
  subscription OnUpdateTodo($owner: String!) {
    onUpdateTodo(owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteTodo = /* GraphQL */ `
  subscription OnDeleteTodo($owner: String!) {
    onDeleteTodo(owner: $owner) {
      id
      name
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateRequestList = /* GraphQL */ `
  subscription OnCreateRequestList {
    onCreateRequestList {
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
export const onUpdateRequestList = /* GraphQL */ `
  subscription OnUpdateRequestList {
    onUpdateRequestList {
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
export const onDeleteRequestList = /* GraphQL */ `
  subscription OnDeleteRequestList {
    onDeleteRequestList {
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
export const onCreateRequesBid = /* GraphQL */ `
  subscription OnCreateRequesBid($owner: String!) {
    onCreateRequesBid(owner: $owner) {
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
export const onUpdateRequesBid = /* GraphQL */ `
  subscription OnUpdateRequesBid($owner: String!) {
    onUpdateRequesBid(owner: $owner) {
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
export const onDeleteRequesBid = /* GraphQL */ `
  subscription OnDeleteRequesBid($owner: String!) {
    onDeleteRequesBid(owner: $owner) {
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
