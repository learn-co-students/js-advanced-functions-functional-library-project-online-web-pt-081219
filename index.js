const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for(const el in collection) {
        callback(collection[el])
      }
      return collection 
    },

    map: function(collection, callback) {
      let newArray = []
      for(const el in collection) {
        newArray.push(callback(collection[el]))
      }
      return newArray
    },

    reduce: function(collection, callback, acc) {
      if (!acc) {
        acc = collection[0]; 
        collection = collection.slice(1) 
      }
      for (const el of collection) {
        acc = callback(acc, el)
      }
      return acc 
    },

    find: function(collection, predicate) {
      for(const el in collection){
        if (predicate(collection[el])) {
          return collection[el]
        }
      }
      return undefined
    },

    filter: function(collection, predicate) {
      let filtered = []
      for(const el in collection){
        if(predicate(collection[el])) {
          filtered.push(collection[el])
        }
      }
      return filtered
    },

    size: function(collection) {
      let arrayLength = []
      for(const el in collection){
        arrayLength.push(collection[el])
      }
      return arrayLength.length
    }, 

    first: function(array, n) {
      if (!n){
        return array[0]
      } else {
        return array.slice(0, n)
      }
    }, 

    last: function(array, n) {
      if (!n){
        return array.slice(-1)[0] 
      } else {
        return array.slice(-n)
      }
    }, 

    compact: function(array) {
      let newArray = []
      for(const el in array) {
        if (!!array[el] === true) {
          newArray.push(array[el])
        }
      }
      return newArray
    }, 

    sortBy: function(array, callback) {
      let newArray = [...array]
      return newArray.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    }, 

    flatten: function(array, shallow = false, newArray =[]) {
      if (shallow === true) {
        for(const el of array) {
          if (Array.isArray(el)) {
            for(const char of el) {
              newArray.push(char) 
            }
          } else {
            newArray.push(el)
          }
        }
      } else {
        for(const el of array) {
          if (Array.isArray(el)) {
            this.flatten(el, false, newArray)
          } else {
            newArray.push(el)
          }
        }
      }
      return newArray
    }, 

    uniq: function(array, isSorted, callback) {
      let newArray = []
      if(isSorted === false){
        array.sort((a, b) => a - b)
      }
      for(const el of array){
        if(callback){
          if(!newArray.find( e => callback(e) === callback(el))) {
            newArray.push(el)
          }
        } else {
          if(!newArray.find(e => e === el)) {
            newArray.push(el)
          }
        }
      }
      return newArray
    }, 

    keys: function(object){
      let newArray = []
      for(const el in object){
        newArray.push(el)
      }
      return newArray
    }, 

    values: function(object){
      let newArray = []
      for(const el in object) {
        newArray.push(object[el])
      }
      return newArray
    }, 
  
    functions: function(object) {
      let newArray = []
      for(const el in object) {
        if (typeof object[el] === 'function') {
          newArray.push(el)
        }
      }
      return newArray.sort()
    }




  }
})()

fi.libraryMethod()
