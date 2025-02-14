const data = [1, "hello", true, 42, "world", false, { name: "Alice" }];
// Expected output might be: { number: 2, string: 2, boolean: 2, object: 1 }

let typeCounts = {};

for (let i = 0; i < data.length; i++) {
  let type = typeof data[i];
  
  // If type already exists increment it, else initialize it to 1
  if (typeCounts[type]) {
    typeCounts[type] += 1;
  } else {
    typeCounts[type] = 1;
  }
}

console.log(typeCounts);