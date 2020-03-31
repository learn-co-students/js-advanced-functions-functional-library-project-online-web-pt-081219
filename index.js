const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
        const newcollection = (collection instanceof Array)? collection.slice() : Object.values(collection)
        for (let i = 0; i < newcollection.length; i++) {
          callback(newcollection[i])
        }
        return collection 
    },

    map: function(arr, callback) {
      const newArr = (arr instanceof Array)? arr.slice() : Object.values(arr)
      let mapped = []
      for (let i = 0; i < newArr.length; i++) {
        mapped.push(callback(newArr[i]))
      }
      return mapped
    },

    reduce: function(c = [], callback = () => {}, acc) {
      let collection = c.slice(0)
      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }                                  

      for (let i = 0; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc;
    },

    find: function(collection, predicate) {
      if (!(collection instanceof Array))
        collection = Object.values(collection)
      let result = []
      for (let i = 0; i < collection.length; i++ ) {
        if (predicate(collection[i])){
        return (collection[i])
        }
      }
      return undefined
    },
    
    size: function(collection) { 
      if (!(collection instanceof Array))
      collection = Object.values(collection)
      return collection.length
    },

    filter: function(collection, callback) {
      if (!(collection instanceof Array))
      collection = Object.values(collection)
      let result = []
      for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i]))
        result.push(collection[i])
      }
      return result
    },

    first: function(arr, n=0) {
      if (!(n > 0)) {
        return arr[0]
      } else {
      return arr.slice(0,n)
      }
    },

    last: function(arr, n=false) {
      if (n) {
        return arr.slice(arr.length - n, arr.length)
      } else {
        return arr[arr.length - 1]
      }
    },

    compact: function(arr) {
      let result = []
      for (let i = 0; i < arr.length; i++) {
        if (!!arr[i]){
        result.push(arr[i])
      }}
      return result
    },

    sortBy: function(arr, callback) {
      let newArr = [...arr]
      return newArr.sort(function(a,b) {
        return callback(a) - callback(b)
      })
    },

    unpack: function(receiver, arr) {
      for (let val of arr)
        receiver.push(val)
    },

    flatten: function(collection, shallow, newArr=[]) {
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


    uniqSorted: function(collection, iteratee) {
      const sorted = [collection[0]]
      for (let idx = 1; idx < collection.length; idx++) {
        if (sorted[idx-1] !== collection[idx])
          sorted.push(collection[idx])
      }
      return sorted
    },

    uniq: function(collection, sorted=false, iteratee=false) {
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
      // Using for loop
      const keys = []
      for (let key in obj){
        keys.push(key)
      }
      return keys
    },

    values: function(obj) {
      // Using for loop
      const values = []
      for (let key in obj){
        values.push(obj[key])
      }
      return values

      // Using the custom 'map' method from above
      // return this.map(obj, (value) => value)

    },

    functions: function(obj) {
      const functionNames = []

      for (let key in obj) {
        if (typeof obj[key] === "function"){
          functionNames.push(key)
        }
      }

      return functionNames.sort()
    },

  }
})()

fi.libraryMethod()