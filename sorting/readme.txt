🧠 Sorting Algorithms — Logic, Steps, and Visual Intuition

This guide explains Bubble Sort, Selection Sort, Insertion Sort, and Merge Sort — 
with logic, step-by-step examples, and intuitive visuals to help you truly understand them.
It also covers Quick Sort, a commonly used and efficient sorting algorithm.

🫧 1. Bubble Sort — “Keep pushing the biggest bubble up”
🔹 Logic

Compare adjacent elements.

If they’re in the wrong order, swap them.

After one full pass, the largest element “bubbles” to the end.

Repeat until the array is sorted.

🔹 Example

Input: [5, 3, 8, 4, 2]

Pass 1

[5, 3, 8, 4, 2] → swap 5,3 → [3, 5, 8, 4, 2]
[3, 5, 8, 4, 2] → swap 8,4 → [3, 5, 4, 8, 2]
[3, 5, 4, 8, 2] → swap 8,2 → [3, 5, 4, 2, 8]


➡️ 8 is now sorted

Pass 2

[3, 5, 4, 2, 8]
→ swap 5,4 → [3, 4, 5, 2, 8]
→ swap 5,2 → [3, 4, 2, 5, 8]


➡️ 5 is now in place

🔹 Visualization
Initial:  5 3 8 4 2
Pass 1:   3 5 4 2 | 8
Pass 2:   3 4 2 | 5 8
Pass 3:   3 2 | 4 5 8
Pass 4:   2 | 3 4 5 8


🧠 Intuition: keep “bubbling up” the largest number to the top like a bubble in water.

🧩 2. Selection Sort — “Find the smallest and place it where it belongs”
🔹 Logic

Divide the array into two parts: sorted and unsorted.

Repeatedly find the smallest element in the unsorted part.

Swap it with the first unsorted element.

🔹 Example

Input: [5, 3, 8, 4, 2]

Find smallest (2) → swap with 5 → [2, 3, 8, 4, 5]
Find smallest (3) → already in place → [2, 3, 8, 4, 5]
Find smallest (4) → swap with 8 → [2, 3, 4, 8, 5]
Find smallest (5) → swap with 8 → [2, 3, 4, 5, 8]

🔹 Visualization
Start:   [5, 3, 8, 4, 2]
Step 1:  [2 | 3, 8, 4, 5]
Step 2:  [2, 3 | 8, 4, 5]
Step 3:  [2, 3, 4 | 8, 5]
Step 4:  [2, 3, 4, 5 | 8]


🧠 Intuition: like organizing playing cards by repeatedly picking the smallest one and placing it on the left.

🪜 3. Insertion Sort — “Insert new cards in their right place”
🔹 Logic

Like sorting cards in your hand.

Start from the second element; insert it into the correct position in the sorted part (left side).

Shift elements as needed.

🔹 Example

Input: [5, 3, 8, 4, 2]

[5]          (sorted)
Insert 3 → [3,5]
Insert 8 → [3,5,8]
Insert 4 → [3,4,5,8]
Insert 2 → [2,3,4,5,8]

🔹 Visualization
Start:       [5 | 3, 8, 4, 2]
Insert 3 →   [3,5 | 8,4,2]
Insert 8 →   [3,5,8 | 4,2]
Insert 4 →   [3,4,5,8 | 2]
Insert 2 →   [2,3,4,5,8]


🧠 Intuition: build the sorted list one element at a time.

🧮 4. Merge Sort — “Divide, sort, and merge back”
🔹 Logic

Use Divide and Conquer.

Split the array in half until each part has one element.

Then merge the parts back in sorted order.

🔹 Example

Input: [5, 3, 8, 4, 2]

1️⃣ Split

[5,3,8,4,2] → [5,3] and [8,4,2]
→ [5],[3] and [8],[4,2]
→ [4,2] → [4],[2]


2️⃣ Merge

[5],[3] → [3,5]
[4],[2] → [2,4]
[8],[2,4] → [2,4,8]
[3,5],[2,4,8] → [2,3,4,5,8]

🔹 Visualization
         [5,3,8,4,2]
        /           \
   [5,3]             [8,4,2]
   /   \             /    \
 [5]   [3]        [8]    [4,2]
                   / \
                 [4] [2]

→ Merge upwards → [2,3,4,5,8]


🧠 Intuition: keep dividing until trivially sorted, then merge back together in order.

⚡ Bonus: Quick Sort — “Pick a pivot and partition”
🔹 Logic

Another Divide and Conquer algorithm.

Pick a pivot element.

Partition the array so that smaller → left, larger → right.

Recursively sort left and right parts.

🔹 Example
[5, 3, 8, 4, 2]
Pick pivot = 5 → left: [3,4,2], right: [8]
→ Sort left → [2,3,4]
→ Merge → [2,3,4,5,8]


🧠 Intuition: choose a center point and arrange others around it — efficient in practice.

🧾 Summary Table
Sort Type	Best Case	Worst Case	Stable	In-place	Concept
Bubble Sort	O(n²)	O(n²)	✅ Yes	✅ Yes	Repeated swapping
Selection Sort	O(n²)	O(n²)	❌ No	✅ Yes	Select smallest each time
Insertion Sort	O(n)	O(n²)	✅ Yes	✅ Yes	Insert in order
Merge Sort	O(n log n)	O(n log n)	✅ Yes	❌ No	Divide and merge
Quick Sort	O(n log n)	O(n²)	❌ No	✅ Yes	Partition by pivot
💡 Summary

Easiest to learn: Bubble Sort 🫧

Most practical for small data: Insertion Sort 🪜

Most efficient (general purpose): Merge Sort & Quick Sort ⚡