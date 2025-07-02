# Understanding and Checking Palindromic Numbers Efficiently in JavaScript

A palindromic number is a number that remains the same when its digits are reversed. For example, 121, 1331, and 12321 are palindromic numbers.

## Most Efficient Algorithm (O(log n) time, O(1) space)

Here's the most efficient way to check if a number is a palindrome in JavaScript:

```javascript
function isPalindrome(x) {
    // Negative numbers can't be palindromes
    // Numbers ending with 0 (except 0 itself) can't be palindromes
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }
    
    let reversedHalf = 0;
    
    // Reverse half of the number and compare
    while (x > reversedHalf) {
        reversedHalf = reversedHalf * 10 + (x % 10);
        x = Math.floor(x / 10);
    }
    
    // For even digits: x === reversedHalf
    // For odd digits: x === Math.floor(reversedHalf / 10)
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}
```

## How This Works:

1. **Early Rejection**: 
   - Negative numbers can't be palindromes (they have a '-' sign)
   - Numbers ending with 0 (except 0 itself) can't be palindromes (no number starts with 0)

2. **Reverse Half the Number**:
   - We only reverse half of the digits, which is more efficient
   - For even-digit numbers, we'll end up with two equal halves
   - For odd-digit numbers, we ignore the middle digit

3. **Comparison**:
   - Compare the original half with the reversed half
   - For odd digits, we just drop the middle digit from the reversed half

## Time Complexity:
- O(log₁₀ n) - We're processing about half the digits of the number
- This is the most efficient possible for this problem

## Space Complexity:
- O(1) - We're using a constant amount of space regardless of input size

## Example Usage:
```javascript
console.log(isPalindrome(121));   // true
console.log(isPalindrome(-121));  // false
console.log(isPalindrome(10));    // false
console.log(isPalindrome(12321)); // true
```

This approach is optimal because:
1. It handles edge cases first
2. It only processes half the digits
3. It doesn't convert the number to a string (avoiding extra memory usage)
4. It works in logarithmic time relative to the number of digits

# **Visual Explanation of the Palindrome Number Algorithm**

Let's break down the algorithm **line by line** and visualize how it works with an example.

---

## **Example: Checking if `12321` is a Palindrome**

### **Step-by-Step Execution**
| Variable       | Value (Before) | Operation                     | Value (After) |
|----------------|----------------|-------------------------------|---------------|
| `x` (input)    | `12321`        | Initial value                 | `12321`       |
| `reversedHalf` | `0`            | Initial value                 | `0`           |

---

### **1. Edge Case Checks**
```javascript
if (x < 0 || (x % 10 === 0 && x !== 0)) {
    return false;
}
```
- **`x < 0`**: Negative numbers (e.g., `-121`) cannot be palindromes.
- **`x % 10 === 0 && x !== 0`**: Numbers ending with `0` (except `0` itself, e.g., `10`, `120`) cannot be palindromes.

**Example (`12321`)**:
- `12321` is **not negative** and does **not end with `0`** → **continue**.

---

### **2. Reversing Half the Number**
```javascript
while (x > reversedHalf) {
    reversedHalf = reversedHalf * 10 + (x % 10);
    x = Math.floor(x / 10);
}
```
- **Loop Condition**: `x > reversedHalf` (we stop when we've processed half the digits).
- **`x % 10`**: Extracts the **last digit** of `x`.
- **`reversedHalf * 10 + (x % 10)`**: Builds the reversed number digit by digit.
- **`x = Math.floor(x / 10)`**: Removes the last digit from `x`.

#### **Iteration 1 (`x = 12321`, `reversedHalf = 0`)**
| Operation                     | New Value |
|-------------------------------|-----------|
| `reversedHalf = 0 * 10 + 1`   | `1`       |
| `x = Math.floor(12321 / 10)`  | `1232`    |

#### **Iteration 2 (`x = 1232`, `reversedHalf = 1`)**
| Operation                     | New Value |
|-------------------------------|-----------|
| `reversedHalf = 1 * 10 + 2`   | `12`      |
| `x = Math.floor(1232 / 10)`   | `123`     |

#### **Iteration 3 (`x = 123`, `reversedHalf = 12`)**
| Operation                     | New Value |
|-------------------------------|-----------|
| `reversedHalf = 12 * 10 + 3`  | `123`     |
| `x = Math.floor(123 / 10)`    | `12`      |

**Loop stops** because `x (12)` is no longer greater than `reversedHalf (123)`.

---

### **3. Final Comparison**
```javascript
return x === reversedHalf || x === Math.floor(reversedHalf / 10);
```
- **For even digits**: `x === reversedHalf` (e.g., `1221` → `12 == 12`).
- **For odd digits**: `x === Math.floor(reversedHalf / 10)` (ignore middle digit).

**Example (`12321`)**:
- `reversedHalf = 123`, `x = 12`
- **Drop the middle digit (`3`)** → `Math.floor(123 / 10) = 12`
- **Check**: `12 == 12` → **`true` (palindrome)**.

---

## **Visualization of Different Cases**

| Number  | Steps (`x` vs `reversedHalf`) | Final Check (`x == reversedHalf` or `x == reversedHalf/10`) | Result |
|---------|-------------------------------|-------------------------------------------------------------|--------|
| `121`   | `12` vs `1` → `1` vs `12`     | `1 == Math.floor(12 / 10) = 1`                              | ✅ True |
| `1221`  | `122` vs `1` → `12` vs `12`   | `12 == 12`                                                  | ✅ True |
| `123`   | `12` vs `3` → `1` vs `32`     | `1 != 32` and `1 != 3`                                      | ❌ False |
| `10`    | Fails `x % 10 === 0` check    | -                                                           | ❌ False |
| `-121`  | Fails `x < 0` check           | -                                                           | ❌ False |

---

## **Why This Algorithm is Efficient**
1. **Only processes half the digits** → **O(log₁₀ n) time**.
2. **No string conversion** → **O(1) space** (no extra arrays/strings).
3. **Early rejection of invalid cases** (negative numbers, trailing zeros).

This is the **fastest possible** method for checking palindromic numbers in JavaScript. 🚀


# **Why We Need `Math.floor(reversedHalf / 10)` for Odd-Length Palindromes**

Let me explain this crucial step with **real examples** and **visual breakdowns**.

---

## **Key Idea**
- For **even-digit numbers**, the reversed half should exactly match the remaining half (e.g., `1221` → `12` vs `12`).
- For **odd-digit numbers**, the middle digit doesn't need comparison (e.g., `12321` → `12` vs `123` → ignore `3`).

### **Why?**
- When the number has an **odd length**, the **middle digit remains in place** when reversed.
- So, we **discard the middle digit** from the reversed half before comparing.

---

## **Example 1: Odd-Length Palindrome (`12321`)**
### **Step-by-Step Execution**

| Step | `x` (remaining) | `reversedHalf` | Action |
|------|----------------|----------------|--------|
| 0    | `12321`        | `0`            | Start |
| 1    | `1232`         | `1`            | `reversedHalf = 0*10 + 1` |
| 2    | `123`          | `12`           | `reversedHalf = 1*10 + 2` |
| 3    | `12`           | `123`          | `reversedHalf = 12*10 + 3` → **Loop stops (`x=12` ≤ `reversedHalf=123`)** |

### **Final Check**
- **Original remaining (`x`)**: `12`
- **Reversed half (`reversedHalf`)**: `123`
- **Middle digit (`3`) is irrelevant** → Drop it:
  - `Math.floor(123 / 10) = 12`
- **Compare**: `x == 12` → **✅ True (`12321` is a palindrome)**.

---

## **Example 2: Odd-Length Non-Palindrome (`12345`)**
| Step | `x` (remaining) | `reversedHalf` | Action |
|------|----------------|----------------|--------|
| 0    | `12345`        | `0`            | Start |
| 1    | `1234`         | `5`            | `reversedHalf = 0*10 + 5` |
| 2    | `123`          | `54`           | `reversedHalf = 5*10 + 4` |
| 3    | `12`           | `543`          | `reversedHalf = 54*10 + 3` → **Loop stops (`x=12` ≤ `reversedHalf=543`)** |

### **Final Check**
- **Original remaining (`x`)**: `12`
- **Reversed half (`reversedHalf`)**: `543`
- **Drop middle digit (`3`)**:
  - `Math.floor(543 / 10) = 54`
- **Compare**: `12 != 54` → **❌ False (`12345` is not a palindrome)**.

---

## **Example 3: Even-Length Palindrome (`1221`)**
| Step | `x` (remaining) | `reversedHalf` | Action |
|------|----------------|----------------|--------|
| 0    | `1221`         | `0`            | Start |
| 1    | `122`          | `1`            | `reversedHalf = 0*10 + 1` |
| 2    | `12`           | `12`           | `reversedHalf = 1*10 + 2` → **Loop stops (`x=12` ≤ `reversedHalf=12`)** |

### **Final Check**
- **Original remaining (`x`)**: `12`
- **Reversed half (`reversedHalf`)**: `12`
- **No middle digit → Direct comparison**:
  - `12 == 12` → **✅ True (`1221` is a palindrome)**.

---

## **Why `Math.floor(reversedHalf / 10)`?**
- **For odd-length numbers**, the reversed half **has one extra digit** (the middle digit).
- **Dividing by 10 removes the last digit** (which is the middle digit in the original number).
- **Example**:
  - `12321` → Reversed half = `123` → `123 / 10 = 12` (drop `3`).
  - Compare `12` (remaining `x`) vs `12` (after dropping middle digit).

### **When is it used?**
- Only when `x` becomes **smaller than `reversedHalf`** (indicating an odd-length number).

---

## **Summary**
| Case | Example | Check | Why? |
|------|---------|-------|------|
| **Even-length palindrome** | `1221` | `x == reversedHalf` | Both halves match exactly |
| **Odd-length palindrome** | `12321` | `x == Math.floor(reversedHalf / 10)` | Middle digit is irrelevant |
| **Non-palindrome** | `12345` | `x != reversedHalf` and `x != reversedHalf/10` | Halves don’t match |

This ensures **optimal performance** without converting to a string! 🚀


[[add up to target.]]
