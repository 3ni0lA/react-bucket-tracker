/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBucketListItemInput = {
  id?: string | null,
  name: string,
  completed: boolean,
};

export type ModelBucketListItemConditionInput = {
  name?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  and?: Array< ModelBucketListItemConditionInput | null > | null,
  or?: Array< ModelBucketListItemConditionInput | null > | null,
  not?: ModelBucketListItemConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type BucketListItem = {
  __typename: "BucketListItem",
  id: string,
  name: string,
  completed: boolean,
  createdAt: string,
  updatedAt: string,
};

export type UpdateBucketListItemInput = {
  id: string,
  name?: string | null,
  completed?: boolean | null,
};

export type DeleteBucketListItemInput = {
  id: string,
};

export type ModelBucketListItemFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  completed?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelBucketListItemFilterInput | null > | null,
  or?: Array< ModelBucketListItemFilterInput | null > | null,
  not?: ModelBucketListItemFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelBucketListItemConnection = {
  __typename: "ModelBucketListItemConnection",
  items:  Array<BucketListItem | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionBucketListItemFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  completed?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionBucketListItemFilterInput | null > | null,
  or?: Array< ModelSubscriptionBucketListItemFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type CreateBucketListItemMutationVariables = {
  input: CreateBucketListItemInput,
  condition?: ModelBucketListItemConditionInput | null,
};

export type CreateBucketListItemMutation = {
  createBucketListItem?:  {
    __typename: "BucketListItem",
    id: string,
    name: string,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBucketListItemMutationVariables = {
  input: UpdateBucketListItemInput,
  condition?: ModelBucketListItemConditionInput | null,
};

export type UpdateBucketListItemMutation = {
  updateBucketListItem?:  {
    __typename: "BucketListItem",
    id: string,
    name: string,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBucketListItemMutationVariables = {
  input: DeleteBucketListItemInput,
  condition?: ModelBucketListItemConditionInput | null,
};

export type DeleteBucketListItemMutation = {
  deleteBucketListItem?:  {
    __typename: "BucketListItem",
    id: string,
    name: string,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBucketListItemQueryVariables = {
  id: string,
};

export type GetBucketListItemQuery = {
  getBucketListItem?:  {
    __typename: "BucketListItem",
    id: string,
    name: string,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBucketListItemsQueryVariables = {
  filter?: ModelBucketListItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBucketListItemsQuery = {
  listBucketListItems?:  {
    __typename: "ModelBucketListItemConnection",
    items:  Array< {
      __typename: "BucketListItem",
      id: string,
      name: string,
      completed: boolean,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateBucketListItemSubscriptionVariables = {
  filter?: ModelSubscriptionBucketListItemFilterInput | null,
};

export type OnCreateBucketListItemSubscription = {
  onCreateBucketListItem?:  {
    __typename: "BucketListItem",
    id: string,
    name: string,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBucketListItemSubscriptionVariables = {
  filter?: ModelSubscriptionBucketListItemFilterInput | null,
};

export type OnUpdateBucketListItemSubscription = {
  onUpdateBucketListItem?:  {
    __typename: "BucketListItem",
    id: string,
    name: string,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBucketListItemSubscriptionVariables = {
  filter?: ModelSubscriptionBucketListItemFilterInput | null,
};

export type OnDeleteBucketListItemSubscription = {
  onDeleteBucketListItem?:  {
    __typename: "BucketListItem",
    id: string,
    name: string,
    completed: boolean,
    createdAt: string,
    updatedAt: string,
  } | null,
};
