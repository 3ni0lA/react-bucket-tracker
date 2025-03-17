/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createBucketListItem = /* GraphQL */ `mutation CreateBucketListItem(
  $input: CreateBucketListItemInput!
  $condition: ModelBucketListItemConditionInput
) {
  createBucketListItem(input: $input, condition: $condition) {
    id
    name
    completed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateBucketListItemMutationVariables,
  APITypes.CreateBucketListItemMutation
>;
export const updateBucketListItem = /* GraphQL */ `mutation UpdateBucketListItem(
  $input: UpdateBucketListItemInput!
  $condition: ModelBucketListItemConditionInput
) {
  updateBucketListItem(input: $input, condition: $condition) {
    id
    name
    completed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateBucketListItemMutationVariables,
  APITypes.UpdateBucketListItemMutation
>;
export const deleteBucketListItem = /* GraphQL */ `mutation DeleteBucketListItem(
  $input: DeleteBucketListItemInput!
  $condition: ModelBucketListItemConditionInput
) {
  deleteBucketListItem(input: $input, condition: $condition) {
    id
    name
    completed
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteBucketListItemMutationVariables,
  APITypes.DeleteBucketListItemMutation
>;
