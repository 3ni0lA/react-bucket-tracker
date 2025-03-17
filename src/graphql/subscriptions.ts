/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateBucketListItem = /* GraphQL */ `subscription OnCreateBucketListItem(
  $filter: ModelSubscriptionBucketListItemFilterInput
) {
  onCreateBucketListItem(filter: $filter) {
    id
    name
    completed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateBucketListItemSubscriptionVariables,
  APITypes.OnCreateBucketListItemSubscription
>;
export const onUpdateBucketListItem = /* GraphQL */ `subscription OnUpdateBucketListItem(
  $filter: ModelSubscriptionBucketListItemFilterInput
) {
  onUpdateBucketListItem(filter: $filter) {
    id
    name
    completed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateBucketListItemSubscriptionVariables,
  APITypes.OnUpdateBucketListItemSubscription
>;
export const onDeleteBucketListItem = /* GraphQL */ `subscription OnDeleteBucketListItem(
  $filter: ModelSubscriptionBucketListItemFilterInput
) {
  onDeleteBucketListItem(filter: $filter) {
    id
    name
    completed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteBucketListItemSubscriptionVariables,
  APITypes.OnDeleteBucketListItemSubscription
>;
