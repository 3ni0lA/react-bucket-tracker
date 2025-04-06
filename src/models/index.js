// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BucketListItem } = initSchema(schema);

export {
  BucketListItem
};