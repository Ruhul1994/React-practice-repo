// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

  

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

  

// You can return the answer in any order.

  
  
  

// this under method is very costly, O(n^2) time complexity, which is not efficient for large arrays.

// function twoSum(nums, target) {

// function twoSum(nums, target) {

//     for (let i = 0; i < nums.length; i++) {

//         for (let j = i + 1; j < nums.length; j++) {

//             if (nums[i] + nums[j] === target) {

//                 return [i, j];

//             }

//         }

//     }

// }

  

// console.log(twoSum([3, 2, 4], 6)); // [1, 2]

  

// this is a common problem that can be solved using a hash map for efficient lookups.

  

function twoSum(nums, target) {

    const map = new Map();

    for (let i = 0; i < nums.length; i++) {

        const complement = target - nums[i];

        if (map.has(complement)) {

            return [map.get(complement), i];

        }

        map.set(nums[i], i);

    }

}

console.log(twoSum([3, 2, 4], 6)); // [1, 2]

This is the classic **Two Sum** problem. Here's the most efficient solution using a **hash map** (also known as an object in JavaScript) to get the result in **O(n)** time.

---

### ✅ JavaScript Code (Efficient Way: O(n))

```javascript
function twoSum(nums, target) {
  const map = {}; // to store value => index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (map.hasOwnProperty(complement)) {
      return [map[complement], i]; // found the pair
    }

    map[nums[i]] = i; // store the current number with its index
  }
}
```

---

### 🔍 Example

```javascript
const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target)); // Output: [0, 1]
```

---

### 📘 Explanation

- We loop through the array.
    
- For each element, we calculate the complement: `target - current`.
    
- If this complement is already in the map, we found the two numbers.
    
- Otherwise, we store the current number with its index for future reference.
    

Let me know if you want the **brute-force** version too or want it in another language (like Python or C++)!

Great question! Let's compare your version (brute force) and the optimized version (with a hash map) step by step.

---

## 🧠 Your Code (Brute Force)

```javascript
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
}
```

### ✅ Pros:

- Simple and easy to understand.
    
- Works correctly and gives the right result.
    

### ❌ Cons:

- **Time Complexity**: `O(n^2)` — because it checks every pair of elements.
    
- **Slow for large arrays**.
    

---

## ✅ Optimized Code (Using Hash Map)

```javascript
function twoSum(nums, target) {
    const map = {};

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        if (map.hasOwnProperty(complement)) {
            return [map[complement], i];
        }

        map[nums[i]] = i;
    }
}
```

### ✅ Pros:

- **Time Complexity**: `O(n)` — only one pass through the array.
    
- Much **faster** for large inputs.
    

### ❌ Cons:

- Slightly more complex due to the use of a hash map.
    

---

## 🔍 Key Differences Summary

|Feature|Brute Force|Hash Map Optimized|
|---|---|---|
|Time Complexity|O(n²)|O(n)|
|Space Complexity|O(1)|O(n)|
|Speed|Slower|Faster|
|Code Complexity|Simple|Slightly more complex|
|Best Use Case|Small arrays|Medium to large arrays|

---

✅ **Conclusion:**  
Both are correct and return the same result, but the optimized version is **much faster** and **scalable**, especially for long arrays.

Would you like a visual step-by-step walkthrough of how the hash map version works?

Of course Ruhul! Let's break down **Hash Map (Object in JavaScript)** step by step — especially for how it's used in the `Two Sum` problem.

---

## 🧠 What is a Hash Map?

A **Hash Map** is a data structure that stores **key-value** pairs. In JavaScript, the most common form of a hash map is an **object** (`{}`) or a **Map**.

### ✅ Example:

```javascript
const map = {};
map["a"] = 10;
map["b"] = 20;

console.log(map["a"]); // 10
```

You can store values using any key — numbers, strings, etc.

---

## 🎯 Why Use Hash Map in `Two Sum`?

Because it lets you **check if a value exists instantly** (in `O(1)` time).

Instead of checking all pairs with two loops (`O(n^2)`), we use one loop and store each number’s **index** in the map while checking if the **complement** (`target - current`) already exists.

---

## 🔧 Two Sum with Hash Map — Step by Step

### ✅ Problem:

Given `nums = [2, 7, 11, 15]` and `target = 9`, find two numbers whose sum is 9.

### 🔁 Code:

```javascript
function twoSum(nums, target) {
    const map = {}; // Step 1: create an empty object

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i];
        const complement = target - current;

        // Step 2: Check if the complement is already in the map
        if (map.hasOwnProperty(complement)) {
            return [map[complement], i]; // return their indices
        }

        // Step 3: Otherwise, store current number with its index
        map[current] = i;
    }
}
```

---

## 🧠 Visualization

|i|nums[i]|target - nums[i]|map|result|
|---|---|---|---|---|
|0|2|7|{}|not found|
||||{2: 0}||
|1|7|2|{2: 0}|found! → [0, 1]|

---

## ✅ Benefits of Hash Map

- Fast lookup: `map[value]` is very quick.
    
- You store values with their indexes, which helps you return `[index1, index2]`.
    

---

## 🧪 Mini Practice

Try writing a function that checks if a number exists in an array using a hash map:

```javascript
function contains(nums, target) {
    const map = {};

    for (let num of nums) {
        if (map[num]) return true;
        map[num] = true;
    }

    return false;
}

console.log(contains([1, 2, 3, 4], 3)); // true
console.log(contains([1, 2, 3, 4], 5)); // false
```

---

Would you like to see a diagram or animation of how this works? Or want to try a small practice task to test your understanding?

Great question, Ruhul! In JavaScript, **"Hash Map"** is a general **concept**, while **`Map`** and **Object (`{}`)** are two different **implementations** of it.

Let me explain in a simple and clear way:

---

## 🧠 Concept: What is a Hash Map?

A **Hash Map** is a **data structure** that stores key-value pairs, and allows **fast lookup**, insertion, and deletion — usually in **O(1)** time.

---

## ✅ Two Ways to Create Hash Maps in JavaScript

### 1. **Object (`{}`)** – Traditional Way

```javascript
const obj = {};
obj["name"] = "Ruhul";
console.log(obj["name"]); // Ruhul
```

### 2. **`Map` (introduced in ES6)** – Modern and More Powerful

```javascript
const map = new Map();
map.set("name", "Ruhul");
console.log(map.get("name")); // Ruhul
```

---

## 🔍 Key Differences: `Object` vs `Map`

|Feature|Object (`{}`)|`Map`|
|---|---|---|
|🔑 Key types|Only strings or symbols|Any type (e.g. object, number)|
|🧠 Inherited keys|Yes (from `Object.prototype`)|No (clean and pure)|
|📏 Order of keys|Not guaranteed|Maintains insertion order|
|🔄 Iteration|Use `for...in` or `Object.keys`|Use `map.forEach()` or `for...of`|
|📊 Performance (large)|Slower with lots of keys|Optimized for frequent adds/deletes|
|🧼 Clean key-value storage|Not purely key-value (has prototype stuff)|Pure key-value|

---

## ✅ When to Use Which?

|Situation|Use|
|---|---|
|Simple key-value (string keys)|**Object** `{}`|
|Dynamic keys, any data type as key|**Map**|
|Need guaranteed order of keys|**Map**|
|Want better performance with large data|**Map**|
|Want simplest syntax (no `.set()` / `.get()`)|**Object**|

---

## 🔧 Two Sum with Object vs Map

You can solve Two Sum using either:

### Using Object:

```javascript
const map = {};
map[5] = 2;      // key: "5", value: 2
console.log(map[5]); // 2
```

### Using `Map`:

```javascript
const map = new Map();
map.set(5, 2);   // key: 5 (number), value: 2
console.log(map.get(5)); // 2
```

If you used an object with a **number key**, JavaScript **converts it to a string** internally!

---

## ✅ Summary

- **Hash Map** = General concept (key-value store).
    
- **Object (`{}`)** = Simple, fast for string keys.
    
- **Map** = Modern, powerful, supports any key type, ordered, better for complex data.
    

---

Let me know if you want a chart image or want to try converting an `Object` example into a `Map` version!

Here’s a **visual explanation** and **documentation** of your `twoSum` function using a `Map`:

---

### ✅ **Goal of the Function**

Given an array `nums` and a target value, find the indices of the two numbers that add up to the target.

---

### ✅ **Code Recap**

```js
function twoSum(nums, target) {
    const map = new Map(); // ➊
    for (let i = 0; i < nums.length; i++) { // ➋
        const complement = target - nums[i]; // ➌
        if (map.has(complement)) { // ➍
            return [map.get(complement), i]; // ➎
        }
        map.set(nums[i], i); // ➏
    }
}
console.log(twoSum([3, 2, 4], 6)); // [1, 2]
```

---

### 🧠 **Step-by-Step Visual Description**

We'll use this input:  
📥 `nums = [3, 2, 4]`, `target = 6`

---

#### 📌 Step 1: Initialization

```js
const map = new Map();
```

👉 Create an empty Map to store value → index pairs.

---

#### 📌 Step 2: First Iteration (i = 0)

```js
nums[0] = 3
complement = 6 - 3 = 3
```

- `map` doesn't have `3`.
    
- So, store `map.set(3, 0)`
    
- `map` becomes: `{ 3 → 0 }`
    

---

#### 📌 Step 3: Second Iteration (i = 1)

```js
nums[1] = 2
complement = 6 - 2 = 4
```

- `map` doesn't have `4`.
    
- So, store `map.set(2, 1)`
    
- `map` becomes: `{ 3 → 0, 2 → 1 }`
    

---

#### 📌 Step 4: Third Iteration (i = 2)

```js
nums[2] = 4
complement = 6 - 4 = 2
```

✅ `map` **has** `2`. So:

- `map.get(2)` is `1`
    
- Return: `[1, 2]`
    

---

### 🧾 **Documentation (Simple and Clear)**

|**Part**|**Description**|
|---|---|
|`Map()`|Stores each number in the array as a key, and its index as the value.|
|`complement`|The number needed to reach the `target` with `nums[i]`.|
|`map.has()`|Checks if the complement exists — meaning we've already seen the matching pair.|
|`map.set()`|Saves the current number and its index for future lookups.|
|`return`|Returns the pair of indices `[map.get(complement), i]` that add up to target.|

---

### 📊 **Map Growth Overview**

|i|nums[i]|complement|map before|map.has(complement)?|Action Taken|
|---|---|---|---|---|---|
|0|3|3|`{}`|❌|`map.set(3, 0)`|
|1|2|4|`{3: 0}`|❌|`map.set(2, 1)`|
|2|4|2|`{3: 0, 2: 1}`|✅|`return [1, 2]`|

---

### ✅ Final Output:

```
[1, 2]
```

---

Would you like a **diagram** to visualize this map creation in memory with arrows and boxes?


[[lastWordLength]]
[[string is valid]]
