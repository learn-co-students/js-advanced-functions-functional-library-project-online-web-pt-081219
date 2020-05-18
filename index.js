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

  // find(collection, predicate) {
  //   let returnValue;
  //   fi.each(collection, (value, key, collection) => {
  //     if (predicate(value) === true) {
  //       return (returnValue = value);
  //     }
  //   });
  //   return returnValue;
  // },

  find(collection, predicate) {
    for (let i = 0; i < collection.length; i++) {
      if (predicate(collection[i]) === true) {
        return collection[i];
      }
    }
  },

  filter(collection, predicate) {
    let newArr = [];
    fi.each(collection, (value, key, collection) => {
      if (predicate(value) === true) {
        newArr.push(value);
      }
      // return predicate(value) === true ? value : false;
    });
    return newArr;
  },

  size(collection) {
    if (Symbol.iterator in collection) {
      return collection.length;
    } else {
      return Object.entries(collection).length;
    }
  },

  first(array, n) {
    if (!n) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  },

  last(array, n) {
    if (!n) {
      let index = array.length - 1;
      return array[index];
    } else {
      return array.slice(array.length - n, array.length);
    }
  },

  compact(array) {
    return fi.filter(array, (item, i, collection) => {
      return !!item;
    });
  },

  sortBy(array, callback) {
    let newArr = [...array];

    newArr.sort((a1, b1) => {
      let a = callback(a1);
      let b = callback(b1);

      if (a < b) {
        return -1;
      } else if (a > b) {
        return 1;
      } else {
        return 0;
      }
    });
    return newArr;
  },

  flatten(array, shallow, newArr = []) {
    if (!Array.isArray(array)) return newArr.push(array);

    if (!shallow) {
      array.forEach((item) => {
        fi.flatten(item, false, newArr);
      });
    } else {
      array.forEach((item) => {
        if (Array.isArray(item)) {
          extract(item, newArr);
        } else {
          newArr.push(item);
        }
      });
    }
    return newArr;
  },

  uniq(array, isSorted = false, callback) {
    let newArr = [];
    if (callback) {
      let seen = [];
      array.forEach((el) => {
        let result = callback(el);

        if (!seen.includes(result)) {
          seen.push(result);
          newArr.push(el);
        }
      });
    } else {
      array.forEach((el) => {
        if (!newArr.includes(el)) {
          newArr.push(el);
        }
      });
    }

    return newArr;
  },

  keys(object) {
    return Object.getOwnPropertyNames(object).filter(
      (name) => Object.getOwnPropertyDescriptor(object, name).enumerable
    );
  },

  values(object) {
    let keys = this.keys(object);
    return keys.map((key) => object[key]);
  },

  functions(object) {
    let keys = this.keys(object);
    return keys.filter((key) => typeof object[key] === "function");
  },
};

function extract(Arr, newArr) {
  for (let item of Arr) {
    newArr.push(item);
  }
}
