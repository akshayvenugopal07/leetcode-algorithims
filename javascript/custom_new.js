function User(name, age) {
  this.name = name;
  this.age = age;
}

function customNew(bindObj, ...args) {
  return bindObj.call(bindObj, ...args);
}

const user = customNew(User, 'foo', 17);