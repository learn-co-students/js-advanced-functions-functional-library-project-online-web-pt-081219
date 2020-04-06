const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)){


        for (var i = 0; i < collection.length; i++){
          callback(collection[i], i, collection);
        }
        return collection;
      }else{
        for (const element in collection){
          callback(collection[element], element, collection);
        }
        return collection;
      }
    },

    map: function(collection, callback) {
      if (Array.isArray(collection)){
        const newArr = [];
        for (var i = 0; i < collection.length; i++){
          newArr.push(callback(collection[i]));
        }
        return newArr;
      }else{
        const newArr = [];
        for (const element in collection){
          newArr.push(callback(collection[element]));
        }
        return newArr;
      }
    },

    reduce: function(collection, callback, acc = 0) {
      if (acc == 0){
        acc = collection[0];
        for (var i = 1; i < collection.length; i++){
          acc = callback(acc, collection[i], collection);
        }
        return acc;
      }else{
      for (var i = 0; i < collection.length; i++){
          acc = callback(acc, collection[i], collection);
        }
        return acc;
      }
    },

    find: function(collection, predicate){
      if (Array.isArray(collection)){
        return collection.find(predicate);
      }
    },

    filter: function(collection, predicate){
      if (Array.isArray(collection)){
        return collection.filter(predicate);
      }
    },

    size: function(collection){
      if (Array.isArray(collection)){
        return collection.length;
      }else{
        return Object.keys(collection).length;
      }
    },

    first: function(array, cut = 0){
      if (cut == 0){
        return array[0];
      }else{
      return array.slice(0, cut);
    }
    },

    last: function(array, cut){
      if (cut === undefined){
        return array[array.length -1];
      }else{
      return array.slice(array.length - cut);
    }
    },

    compact: function(array){
      return array.filter(x => Boolean(x));
    },

    sortBy: function(array, callback){
      let copy = [...array];
      return copy.sort((function(a, b){return callback(a) - callback(b)}));
    },

    flatten: function(array, bool = false){
      if (bool === false){
        return array.flat(Infinity);
      }else{
        return array.flat(1);
      }
    },

    uniq: function(array, sorted = false, callback){
      if (callback === undefined){
        return array.filter(function(v, idx) {
          return array.indexOf(v) == idx;
         });
      }else{
        let goodArray = [];
        let badArray =[];
        for (var i = 0; i < array.length; i++){
          let temp = callback(array[i]);
          if (badArray.indexOf(temp) === -1){
            goodArray.push(array[i]);
            badArray.push(temp);
          }
        }
        return goodArray;
      }
    },

    keys: function(obj){
      return Object.keys(obj);
    },

    values: function(obj){
      return Object.values(obj);
    },

    functions: function(obj) {
      return Object.getOwnPropertyNames(obj).filter(item => typeof obj[item] === 'function');
    },


  }
})()

fi.libraryMethod()
