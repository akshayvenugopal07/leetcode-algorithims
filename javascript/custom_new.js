function User(name, age) {
  this.name = name;
  this.age = age;
}

function customNew(bindObj, ...args) {
  return bindObj.call(bindObj, ...args);
}

const user = customNew(User, 'foo', 17);

// This is called the factory function pattern
const createUser = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  email,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
});

const user1 = createUser({
  firstName: "John",
  lastName: "Doe",
  email: "john@doe.com"
});

const user2 = createUser({
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@doe.com"
});

console.log(user1);
console.log(user2);