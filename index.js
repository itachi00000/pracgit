const users = [
  { id: 1, name: 'Joe' },
  { id: 2, name: 'Jane' },
  { id: 3, name: 'John' }
];
// const newUser = { id: 10 };

const getNames = users.map(({ name }) => {
  return name;
});

console.log(getNames);
