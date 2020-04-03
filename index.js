const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let coll = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      coll.forEach( c => callback(c))
      return collection
    },

    map: function(collection, callback) {
      let coll = (collection instanceof Array) ? collection.slice() : Object.values(collection)
      let newcoll = []
      for (let i = 0; i < coll.length; i++) {
        newcoll.push(callback(coll[i]))
      }
      return newcoll
    },

    reduce: function(collection, callback, acc) {
      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }
      collection.forEach(c => acc = callback(acc, c, collection));
      return acc
    },

    find: function(collection, predicate) {
      for (let i = 0; i < collection.length; i++) 
        if (predicate(collection[i])) return collection[i]
      return undefined  
    },

    filter: function(collection, predicate) {
      let result = []
      for (let i = 0; i < collection.length; i++) 
        if (predicate(collection[i])) {
          result.push(collection[i])
        }
      return result  
    },

    size: function(collection) {
      if (collection instanceof Array) return collection.length
      else {
        return Object.keys(collection).length
      }
    },

    first: function(array, n) {
      // if (!n) return array[0]
      // else {
      //   return array.slice(0, n)
      // }
      return n ? array.slice(0, n) : array[0]
    },

    last: function(array, n) {
      return n ? array.slice(1).slice(-n) : array[array.length -1] 
    },

    compact: function(array) {
      let trueArr = []
      for(let el in array) {
        if (!!array[el] === true) trueArr.push(array[el]) 
      }
      return trueArr
    },

    sortBy: function(array, callback) {
      let sorted = [...array]
      return sorted.sort((x,y) => callback(x) - callback(y))
    },

    flatten: function(array, shallow) {
      if (shallow) {
        const flat = [].concat(...array);
        return flat
      } 
      else {
      const flat = [].concat(...array);
      return flat.some(Array.isArray) ? fi.flatten(flat) : flat;
      }
    },

    uniq: function(array, isSorted, callback) { 
      let result = []
      if (isSorted === false) {array.sort()}
      for (const el of array) {
        if (callback) {
          if (!result.find( e => callback(e) === callback(el))) {
            result.push(el)
          }
        } else {
          if (!result.find(e => e === el)) {result.push(el)}
        }
      }
      return result
    },

    keys: function(object) {
      let keys = []
      for (let k in object) {keys.push(k)}
      return keys
    },

    values: function(object) {
      let values = []
      for (let v in object) { values.push(object[v])}
      return values
    },

    functions: function(object) {
      let funcs = []
      for (let f in object) {
        if (typeof object[f] === "function") {funcs.push(f)}
      }
      return funcs.sort()
    },


  }
})()

fi.libraryMethod()
