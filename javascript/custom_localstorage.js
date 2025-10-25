/**
* Do change name of the object
* Final object should be of the name `localStorage`
**/

const localStorage = {
    cache: new Map(), // Changed from Set to Map
    setItem: function (key, value) {
        if (typeof key === "string" && value) {
            return this.cache.set(key, value); // Added 'this.'
        } else {
            return null; // Added return null for invalid cases
        }
    },
    getItem: function (key) {
        return this.cache.get(key); // Added 'return'
    },
    removeItem: function (key) {
        return this.cache.delete(key);
    },
    clear: function () {
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

localStorage.clear();
localStorage.setItem('1', 'one');
const answer1 = localStorage.getItem('1');

localStorage.clear();
localStorage.setItem('1', 'one');
const answer2 = localStorage.getItem('1');

localStorage.clear();
localStorage.setItem('1', 'one');
localStorage.removeItem('1');
const answer3 = localStorage.getItem('1');

localStorage.clear();
localStorage.setItem('1', 'one');
localStorage.setItem('2', 'one');
localStorage.setItem('3', 'one');
localStorage.setItem('4', 'one');
localStorage.clear();
const getOne = localStorage.getItem('1');
console.log(getOne); // Expected output: 'one'

localStorage.clear();
localStorage.setItem('1', 'one');
localStorage.setItem('2', 'one');
localStorage.setItem('3', 'one');
localStorage.setItem('4', 'one');
localStorage.removeItem('2');
localStorage.removeItem('3');

localStorage.clear();
localStorage.setItem();
