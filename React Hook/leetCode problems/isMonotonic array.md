### Understanding the Problem

First, let's restate the problem in my own words to ensure I understand it correctly. We are given an array of integers, and we need to determine if the array is monotonic. An array is monotonic if it is either entirely non-increasing or non-decreasing. 

- **Non-increasing**: Each element is less than or equal to the next one (`nums[i] <= nums[i+1]` for all `i`).
- **Non-decreasing**: Each element is greater than or equal to the next one (`nums[i] >= nums[i+1]` for all `i`).

If the array satisfies either of these conditions, it's monotonic, and we should return `true`. Otherwise, we return `false`.

### Examples to Illustrate

Let's look at some examples to solidify our understanding:

1. `[1, 2, 2, 3]`:
   - Compare adjacent elements: 1 <= 2, 2 <= 2, 2 <= 3.
   - It's non-decreasing, so monotonic. Return `true`.

2. `[6, 5, 4, 4]`:
   - Compare adjacent elements: 6 >= 5, 5 >= 4, 4 >= 4.
   - It's non-increasing, so monotonic. Return `true`.

3. `[1, 3, 2]`:
   - Compare adjacent elements: 1 <= 3 (non-decreasing), but 3 > 2 (not non-decreasing).
   - Also, 1 < 3 (not non-increasing), so it's neither. Return `false`.

4. `[1, 1, 1]`:
   - All elements are equal, so both non-increasing and non-decreasing. Return `true`.

### Edge Cases

We should consider edge cases to ensure our solution is robust:

- Empty array: By definition, it's monotonic (though constraints usually say array length >= 1).
- Single-element array: Always monotonic.
- Two-element array: Always monotonic (since only one comparison, it can't violate both conditions).
- All elements equal: Monotonic.
- Strictly increasing or decreasing: Also monotonic.

### Approach to Solve the Problem

Given the problem, here's how I think we can approach it:

1. **Initial Checks**: If the array has 0 or 1 element, it's monotonic. Similarly, if it has 2 elements, it's always monotonic.
2. **Determine Trend**: For longer arrays, we need to check the trend. However, the array might start with equal elements, so the initial trend might not be clear until we find the first differing adjacent pair.
3. **Check Monotonicity**:
   - Iterate through the array and compare adjacent elements.
   - Track whether the array is potentially non-decreasing or non-increasing based on the first non-equal adjacent pair.
   - Once the trend is determined, ensure all subsequent pairs adhere to this trend.

Alternatively, a more straightforward approach is to:
- Assume the array could be both non-increasing and non-decreasing initially.
- As we iterate, if we find any pair that violates non-decreasing, set a flag indicating it's not non-decreasing.
- Similarly, if we find any pair that violates non-increasing, set a flag indicating it's not non-increasing.
- At the end, if either flag is still true, the array is monotonic.

This way, we can do it in a single pass through the array.

### Pseudocode

Here's how the pseudocode might look:

```
function isMonotonic(nums):
    is_non_decreasing = True
    is_non_increasing = True
    
    for i from 0 to len(nums) - 2:
        if nums[i] < nums[i+1]:
            is_non_increasing = False
        if nums[i] > nums[i+1]:
            is_non_decreasing = False
    
    return is_non_decreasing or is_non_increasing
```

### Time and Space Complexity

- **Time Complexity**: O(n), where n is the length of the array. We traverse the array once.
- **Space Complexity**: O(1). We're using a constant amount of extra space (just a few boolean variables).

### Implementing in Python

Let's translate this into Python code:

```python
def isMonotonic(nums):
    is_non_decreasing = True
    is_non_increasing = True
    
    for i in range(len(nums) - 1):
        if nums[i] < nums[i+1]:
            is_non_increasing = False
        if nums[i] > nums[i+1]:
            is_non_decreasing = False
    
    return is_non_decreasing or is_non_increasing
```

### Testing the Function

Let's test this function with the examples we discussed:

1. `[1, 2, 2, 3]`:
   - Iterations:
     - 1 < 2: is_non_increasing = False
     - 2 == 2: no change
     - 2 < 3: is_non_increasing = False
   - is_non_decreasing remains True.
   - Return True or False → True.

2. `[6, 5, 4, 4]`:
   - Iterations:
     - 6 > 5: is_non_decreasing = False
     - 5 > 4: is_non_decreasing = False
     - 4 == 4: no change
   - is_non_increasing remains True.
   - Return False or True → True.

3. `[1, 3, 2]`:
   - Iterations:
     - 1 < 3: is_non_increasing = False
     - 3 > 2: is_non_decreasing = False
   - Return False or False → False.

4. `[1, 1, 1]`:
   - All comparisons are equal, so both flags remain True.
   - Return True or True → True.

### Handling Edge Cases

- `[]`: The loop doesn't run (range(-1)), both flags remain True. Return True.
- `[5]`: Similarly, loop doesn't run, return True.
- `[2, 2, 2, 1, 1]`:
   - First few equal, then decreasing. is_non_decreasing becomes False when 2 > 1.
   - is_non_increasing remains True.
   - Return False or True → True.

### Optimizations

The current approach is already optimal in terms of time complexity. We could potentially break early if both flags become False during the iteration, as the array can't be monotonic anymore. For example:

```python
def isMonotonic(nums):
    is_non_decreasing = True
    is_non_increasing = True
    
    for i in range(len(nums) - 1):
        if nums[i] < nums[i+1]:
            is_non_increasing = False
        if nums[i] > nums[i+1]:
            is_non_decreasing = False
        if not is_non_decreasing and not is_non_increasing:
            return False
    
    return is_non_decreasing or is_non_increasing
```

This early termination can save some iterations in cases where the array is clearly not monotonic early on.

### Alternative Approach

Another way is to determine the direction (increasing or decreasing) based on the first non-equal adjacent pair and then verify the rest of the array follows that direction. However, this approach might require more code to handle cases where initial elements are equal, and it doesn't necessarily offer a performance advantage over the initial approach.

### Final Answer

Here's the clean and efficient Python function to determine if an array is monotonic:

```python
def isMonotonic(nums):
    is_non_decreasing = True
    is_non_increasing = True
    
    for i in range(len(nums) - 1):
        if nums[i] < nums[i+1]:
            is_non_increasing = False
        if nums[i] > nums[i+1]:
            is_non_decreasing = False
    
    return is_non_decreasing or is_non_increasing
```

### Example Runs

Let's run a few more examples:

5. `[1, 1, 2, 3, 4, 5]`:
   - Non-decreasing, some equal elements. Returns True.

6. `[5, 4, 3, 3, 2, 1]`:
   - Non-increasing, some equal elements. Returns True.

7. `[1, 2, 3, 2, 5]`:
   - 1 < 2, 2 < 3, 3 > 2: is_non_decreasing becomes False at 3 > 2.
   - 1 < 2, 2 < 3: is_non_increasing becomes False at 1 < 2.
   - After 3 > 2, is_non_increasing is already False.
   - Returns False.

### Conclusion

This problem is a good exercise in array traversal and condition checking. The key is to efficiently determine the array's trend without multiple passes or excessive comparisons. The provided solution achieves this by maintaining two boolean flags that are updated during a single pass through the array, making it both time and space efficient.
[[add up to target.]]
[[lastWordLength]]
