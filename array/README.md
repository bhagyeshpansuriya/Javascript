# Arrays in JavaScript

## What is an Array?

An array in JavaScript is a special type of object used to store multiple values in a single variable.

```js
const fruits = ["Apple", "Mango", "Banana"];
```

Arrays help store collections of data in an ordered way.

---

# Arrays are Objects

Arrays are not primitive data types.  
They are actually a type of object in JavaScript.

## Why are Arrays Objects?

Because internally JavaScript stores arrays as special objects with:

- key-value pairs
- properties
- methods

Example:

```js
const arr = ["Apple", "Mango"];
```

Internally JavaScript treats it like:

```js
{
  0: "Apple",
  1: "Mango"
}
```

Here:

- `0` and `1` are keys (indexes)
- `"Apple"` and `"Mango"` are values

---

# Arrays Have Properties and Methods

Example:

```js
const arr = [1, 3, 4];

console.log(arr.length);

arr.push(5);
```

## Properties

```js
arr.length
```

- `length` is a property
- It returns the total number of elements

## Methods

```js
arr.push(5)
```

- `push()` is a method
- It adds a new element to the array

---

# Why are Arrays Called Special Objects?

Arrays are optimized for:

- ordered data
- numeric indexing
- looping
- fast access of elements

Example:

```js
const arr = ["A", "B", "C"];

console.log(arr[0]);
```

Output:

```js
A
```

---

# Normal Arrays

Normal arrays are flexible and can store mixed data types.

Example:

```js
let arr = ["hello", 2, true];
```

This array stores:

- string
- number
- boolean

---

# Typed Arrays

JavaScript also provides Typed Arrays.

Typed arrays are array-like objects used for handling raw binary data.

Example:

```js
let arr = new Uint8Array([10, 20, 30]);
```

This stores:

- only numbers
- specifically 8-bit unsigned integers

---

# Why Typed Arrays Exist?

Typed arrays are used for high-performance operations such as:

- graphics
- games
- audio/video processing
- WebGL
- binary file handling

Because:

- normal arrays are flexible but slower
- typed arrays are faster and memory efficient

---

# Raw Binary Data Meaning

Computers store data in binary format:

```txt
01010101
```

Typed arrays allow JavaScript to directly work with low-level binary memory.

---

# ArrayBuffer Example

```js
const buffer = new ArrayBuffer(4);

const view = new Uint8Array(buffer);

view[0] = 255;

console.log(view);
```

## Explanation

### Step 1

```js
const buffer = new ArrayBuffer(4);
```

Creates 4 bytes of raw memory.

### Step 2

```js
const view = new Uint8Array(buffer);
```

Creates a typed array view over that memory.

### Step 3

```js
view[0] = 255;
```

Stores value `255` in the first byte.

---

# Key Points Summary

| Feature | Normal Array | Typed Array |
|---|---|---|
| Flexible Types | Yes | No |
| Fixed Data Type | No | Yes |
| Stores Binary Data | No | Yes |
| Faster Performance | Medium | High |
| Used In | General Programming | Graphics, Audio, Games |

---

# Final Conclusion

- Arrays in JavaScript are special objects.
- They use numeric indexes internally as object keys.
- Arrays have properties and methods because they are objects.
- Typed arrays are optimized for handling binary memory and high-performance operations.