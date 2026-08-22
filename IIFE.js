const result = (function (a, b) {
  return a + b;
})(10, 20);

console.log(result); 

//async IIFE
(async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  console.log(data);
})();