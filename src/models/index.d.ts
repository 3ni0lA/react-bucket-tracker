import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerBucketListItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BucketListItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly completed: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBucketListItem = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BucketListItem, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name: string;
  readonly completed: boolean;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BucketListItem = LazyLoading extends LazyLoadingDisabled ? EagerBucketListItem : LazyBucketListItem

export declare const BucketListItem: (new (init: ModelInit<BucketListItem>) => BucketListItem) & {
  copyOf(source: BucketListItem, mutator: (draft: MutableModel<BucketListItem>) => MutableModel<BucketListItem> | void): BucketListItem;
}