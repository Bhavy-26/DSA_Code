📘 QUICK SORT IN JAVASCRIPT

------------------------------------------------------------
⚙️ ALGORITHM OVERVIEW
------------------------------------------------------------
Quick Sort is a divide-and-conquer algorithm.

1️⃣ Pick a pivot element from the array.
2️⃣ Partition the array into three parts:
    - Elements less than pivot
    - Elements equal to pivot
    - Elements greater than pivot
3️⃣ Recursively apply quick sort on the left and right parts.
4️⃣ Combine: sorted = left + pivot + right

------------------------------------------------------------
🧩 JAVASCRIPT IMPLEMENTATION
------------------------------------------------------------
function quickSort(arr) {
  // Base case: arrays with 0 or 1 element are already sorted
  if (arr.length <= 1) return arr;

  // Choose pivot (middle element for simplicity)
  const pivot = arr[Math.floor(arr.length / 2)];

  // Partition array
  const left = arr.filter(x => x < pivot);
  const middle = arr.filter(x => x === pivot);
  const right = arr.filter(x => x > pivot);

  // Recursively sort left and right, then combine
  return [...quickSort(left), ...middle, ...quickSort(right)];
}

// Example usage
const arr = [5, 3, 8, 4, 2, 7, 1, 10];
const sorted = quickSort(arr);

console.log("Original:", arr);
console.log("Sorted:", sorted);

------------------------------------------------------------
🪄 OUTPUT
------------------------------------------------------------
Original: [5, 3, 8, 4, 2, 7, 1, 10]
Sorted:   [1, 2, 3, 4, 5, 7, 8, 10]

------------------------------------------------------------
🔍 DRY RUN (STEP-BY-STEP)
------------------------------------------------------------
Input: [5, 3, 8, 4, 2, 7, 1, 10]

Step 1:
Pivot = 4
Left = [3, 2, 1]
Middle = [4]
Right = [5, 8, 7, 10]

Recursive:
quickSort([3,2,1]) + [4] + quickSort([5,8,7,10])

Step 2 (Left: [3,2,1]):
Pivot = 2
Left = [1]
Middle = [2]
Right = [3]
→ [1,2,3]

Step 2 (Right: [5,8,7,10]):
Pivot = 7
Left = [5]
Middle = [7]
Right = [8,10]
→ [5,7,8,10]

Step 3:
Combine = [1,2,3] + [4] + [5,7,8,10]
✅ Final = [1, 2, 3, 4, 5, 7, 8, 10]

------------------------------------------------------------
⏱️ TIME COMPLEXITY
------------------------------------------------------------
Best Case: O(n log n)
Average Case: O(n log n)
Worst Case: O(n²) (if pivot is poor)

------------------------------------------------------------
💡 SUMMARY
------------------------------------------------------------
| Step | Concept |
|------|----------|
| 1 | Pick a pivot |
| 2 | Partition the array |
| 3 | Recursively sort left/right |
| 4 | Merge sorted parts |

------------------------------------------------------------
✅ ADVANTAGES
------------------------------------------------------------
- Efficient for large datasets
- In-place version uses less memory
- Commonly used in sorting libraries

