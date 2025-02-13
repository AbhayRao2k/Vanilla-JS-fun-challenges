const data = [1, "hello", true, 42, "world", false, { name: "Alice" }];
// Expected output might be: { number: 2, string: 2, boolean: 2, object: 1 }

let obj = {}

for (let i = 0; i < data.length; i++) {
    obj += typeof(data[i])
}

console.log(obj)