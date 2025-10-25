/**
* Do change name of the object
* Final object should be of the name `localStorage`
**/

const localStorage = {
    cache: new Map(), // Changed from Set to Map
    setItem: function(key, value) {
        return this.cache.set(key, value); // Added 'this.'
    },
    getItem: function(key) {
        return this.cache.get(key); // Added 'return'
    },
    removeItem: function(key) {
        return this.cache.delete(key);
    },
    clear: function() {
        return this.cache.clear();
    }
};

localStorage.setItem("a", "b")
localStorage.setItem("1", "2")
console.log(localStorage.getItem("a"))
console.log(localStorage.getItem("1"))
console.log(localStorage.removeItem("a"))
console.log(localStorage.getItem("a"))
console.log(localStorage.getItem("1"))
console.log(localStorage.clear())