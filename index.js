const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, alert) {
      const array = (collection instanceof Array) ? collection : Object.values(collection)
      for (let i = 0; i < array.length; i++ ){
        alert(array[i])
      }
      return collection
    },

    map: function(collection, callback) {
      const array = (collection instanceof Array) ? collection : Object.values(collection)
      let newArray = []
      for (let i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]))
      }
      return newArray
    },

    reduce: function(collection, callback, acc) {
      if (!acc) {
        acc = collection[0]
        collection = collection.slice(1)
      }
      for (let i = 0; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc
    },

    find: function(collection, test) {
      let answer = undefined
      for (let i = 0; i < collection.length; i++) {
        if (test(collection[i])) {
          answer = collection[i]
          return answer
        }
      }
      return answer
    },

    filter: function (collection, test) {
      let answer = []
      for (let i = 0; i < collection.length; i++) {
        if (test(collection[i])) {
          answer.push(collection[i])
        }
      }
      return answer
    },

    size: function(collection) {
      const array = (collection instanceof Array) ? collection : Object.values(collection)
      return array.length
    },

    first: function(collection, n) {
      const array = (collection instanceof Array) ? collection : Object.values(collection)
      let answer = !n ? array[0] : array.slice(0, n)
      return answer
    },

    last: function (collection, n) {
      const array = (collection instanceof Array) ? collection : Object.values(collection)
      let answer = !n ? array[array.length - 1] : array.slice(array.length - n, array.length)
      return answer
    },

    compact: function(array) {
      let compacted = []
      for (let i = 0; i < array.length; i++) {
        if (array[i]) {
          compacted.push(array[i])
        }
      }
      return compacted
    },

    sortBy: function (array, callback) {
      let sorted = [...array]
      sorted.sort(function (a, b) {
        return callback(a) - callback(b)
      })
      return sorted
    },

    flatten: function (array, shallow) {
      let flattened = [...array]
      let solution = !shallow ? flattened.flat(Infinity) : flattened.flat()
      return solution
    },

    uniq: function(array, sorted = false, callback = false) {
      let unique = []
      if (!callback) {
        unique = [...new Set(array)]
      } else {
        let modified = []
        array.forEach(function (i) {
          let value = callback(i)
          if (!modified.includes(value)) {
            modified.push(value)
            unique.push(i)
          }
        });
      }
      return unique
    },

    keys: function(object) {
      let keys = []
      for (let key in object) {
        keys.push(key)
      }
      return keys
    },

    values: function (object) {
      let values = []
      for (let key in object) {
        values.push(object[key])
      }
      return values
    },

    functions: function(object) {
      let values = []
      for (let key in object) {
        if (object[key] && {}.toString.call(object[key]) === '[object Function]'){
        values.push(object[key])
        }
      }
      return values.sort()
    },


  }
})()

fi.libraryMethod()
