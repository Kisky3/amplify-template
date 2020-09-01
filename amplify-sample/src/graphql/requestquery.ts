// 依頼一覧のquery定義
export const ListSortedByStatusQuery = `query ListSortedByStatus ($bid_status: String
    $dead_line: ModelStringKeyConditionInput){
    listSortedByStatus (bid_status: $bid_status
      dead_line: $dead_line){
      items {
        recycle_request_id
        dead_line
        bid_count
        item_data
        user_data
        lat
        long
        createdAt
      }
    }
  }`;

// 入札あり依頼のquery定義
export const ListRequesBidsQuery = `query listRequesBids {
    listRequesBids {
      items {
        item_data
        user_data
      }
    }
  }`;
