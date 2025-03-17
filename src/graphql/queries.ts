/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getBucketListItem = /* GraphQL */ `query GetBucketListItem($id: ID!) {
  getBucketListItem(id: $id) {
    id
    name
    completed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetBucketListItemQueryVariables,
  APITypes.GetBucketListItemQuery
>;
export const listBucketListItems = /* GraphQL */ `query ListBucketListItems(
  $filter: ModelBucketListItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listBucketListItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      completed
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListBucketListItemsQueryVariables,
  APITypes.ListBucketListItemsQuery
>;
