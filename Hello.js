fetch('https://www.random.org')
  .then(response => response.json())
  .then(data => console.log(data));
console.log('hello');