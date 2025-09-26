export {};

declare global {
  var mongo: {
    client: import('mongodb').MongoClient | null;
    promise: Promise<import('mongodb').MongoClient> | null;
  };
}