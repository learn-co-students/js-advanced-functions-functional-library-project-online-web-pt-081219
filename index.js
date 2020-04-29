// @ts-check

const fi = {
  /**
   * @template Item
   * @param {Iterable<Item> | { [key: string]: Item }} collection
   * @param {(value: Item, key: string | number, collection: Iterable<Item> | { [key: string]: Item }) => void} callback
   */
  each(collection, callback) {
    if (Symbol.iterator in collection) {
      let i = 0;

      for (let item of collection) {
        callback(item, i, collection);
        i++;
      }
    } else {
      let entries = Object.entries(collection);

      for (let entry of entries) {
        callback(entry[1], entry[0], collection);
      }
    }

    return collection;
  },

  map(collection, callback) {
    let newArray = [];

    fi.each(collection, (item, i, collection) => {
      newArray.push(callback(item, i, collection));
    });

    return newArray;
  },

  /**
   * @template Item
   * @template Output
   * @param {Iterable<Item> | { [key: string]: Item }} collection
   * @param {(accum: Output, value: Item, collection: object) => Output} callback
   * @param {Output} [accumulator]
   * @returns Output
   */
  reduce(collection, callback, accumulator) {
    fi.each(collection, (value, key, collection) => {
      if (accumulator === undefined) {
        accumulator = value;
      } else {
        accumulator = callback(accumulator, value, collection);
      }
    });
    return accumulator;
  },

  functions() {},
};
