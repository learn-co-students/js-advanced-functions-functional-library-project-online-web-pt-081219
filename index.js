const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = collection instanceof Array ? collection.slice() : Object.values(collection);

      let i;
      for(i = 0; i < newCollection.length; i++){
        callback(newCollection[i]);
      }

      return collection;

    },

    map: function(collection, callback) {
      if(!(collection instanceof Array)){
        collection = Object.values(collection);
      }
      
      const newCollection = [];

      let i;
      for (i = 0; i < collection.length; i++) {
        newCollection.push(callback(collection[i]));
      }

      return newCollection;

    },

    reduce: function(collection = [], callback = () => {}, acc) {
      if(!acc) {
        acc = collection[0];
        collection = collection.slice(1);
      }
      for(let i = 0; i < collection.length; i++){
        acc = callback(acc, collection[i], collection);
      }
      return acc
    },

    find: function(collection, predicate) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection);
      }
      for(let i = 0; i < collection.length; i++){
        if(predicate(collection[i])) return collection[i];
      }
      return undefined;
    },

    filter: function(collection, predicate) {
      if (!(collection instanceof Array)) {
        collection = Object.values(collection);
      }
      const result = []
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) result.push(collection[i]);
      }
      return result;
    },

    size: function(collection) {
      if (!(collection instanceof Array)) {
        return Object.keys(collection).length;
      }
      return collection.length
    },

    first: function(collection, n) {
      return n ? collection.slice(0, n) : collection[0];
    },

    last: function(collection, n) {
      return n ? collection.slice(-n) : collection[collection.length-1];
    },

    compact: function(array) {
      const newArray = []
      array.forEach(ele => ele ? newArray.push(ele) : true);
      return newArray;
    },

    sortBy: function(array, callback) {
      const newArray = array.slice();
      newArray.sort((a, b) => callback(a) - callback(b));
      return newArray;
    },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(collection, shallow, newArr = []) {
      if (!Array.isArray(collection)) return newArr.push(collection)
      if (shallow) {
        for (let val of collection)
          Array.isArray(val) ? this.unpack(newArr, val) : newArr.push(val)
      } else {
        for (let val of collection) {
          this.flatten(val, false, newArr)
        }
      }
      return newArr
    },

    uniqSorted: function (collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx - 1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function (collection, sorted = false, iteratee = false) {
      if (sorted) {
        return fi.uniqSorted(collection, iteratee)
      } else if (!iteratee) {
        return Array.from(new Set(collection))
      } else {
        const modifiedVals = new Set()
        const uniqVals = new Set()
        for (let val of collection) {
          const moddedVal = iteratee(val)
          if (!modifiedVals.has(moddedVal)) {
            modifiedVals.add(moddedVal)
            uniqVals.add(val)
          }
        }
        return Array.from(uniqVals)
      }
    },

    keys: function(obj) {
      return Object.keys(obj);
    },

    values: function(obj) {
      return Object.values(obj);
    },

    functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function") {
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    },


  }
})()

fi.libraryMethod()
