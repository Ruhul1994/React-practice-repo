Sure! Here's the **efficient JavaScript code**, followed by a **description** and a **visual walkthrough**:

---

### ✅ **Efficient JavaScript Code**

```javascript
function romanToInt(s) {
    const roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        const curr = roman[s[i]];
        const next = roman[s[i + 1]];

        if (next > curr) {
            total -= curr;
        } else {
            total += curr;
        }
    }

    return total;
}
```

---

### 📘 **Description**

- `roman` is a **map** of Roman numeral symbols to their integer values.
    
- Loop through the Roman string.
    
- For each symbol:
    
    - If it's **less than the next symbol**, **subtract it** (subtractive rule, like IV = 4).
        
    - Otherwise, **add it**.
        

---

### 🎯 **Visualization: Input → `"MCMXCIV"`**

```
Index:      0   1   2   3   4   5   6
Character:  M   C   M   X   C   I   V
Value:    1000 100 1000 10 100 1   5
```

|Step|Current|Next|Action|Explanation|Total|
|---|---|---|---|---|---|
|0|M(1000)|C(100)|+1000|1000 > 100 → add|1000|
|1|C(100)|M(1000)|-100|100 < 1000 → subtract|900|
|2|M(1000)|X(10)|+1000|1000 > 10 → add|1900|
|3|X(10)|C(100)|-10|10 < 100 → subtract|1890|
|4|C(100)|I(1)|+100|100 > 1 → add|1990|
|5|I(1)|V(5)|-1|1 < 5 → subtract|1989|
|6|V(5)|undefined|+5|last char, add|1994|

✅ Final Output = **1994**

---

Let me know if you want to **see this visual as a diagram or chart image**!

[[add up to target.]]
[[add up to target.]]
