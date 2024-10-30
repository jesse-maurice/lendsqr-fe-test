import { openDB } from 'idb';

const dbPromise = openDB("my-database", 1, {
  upgrade(db) {
    db.createObjectStore("keyval");
  },
});

export const setItem = async <T>(key: string, val: T): Promise<void> => {
  const db = await dbPromise;
  await db.put("keyval", val, key);
};

export const getItem = async <T>(key: string): Promise<T | undefined> => {
  const db = await dbPromise;
  return db.get("keyval", key);
};
