# Exercise 16 - Find the Oldest

Given an array of objects representing people with a birth and death year, return the oldest person.

Now that you've reached the final exercise, you should be fairly comfortable getting the information you need from test case(s). Take a look at how the array of objects is constructed in this exercise's test cases to help you write your function.

---

## Hints

- You should return the whole person object, but the tests mostly just check to make sure the name is correct.
- There are many ways of doing this using built-in array methods like `reduce`, or even chaining multiple!
- One of the tests checks for people with no death-date.. use JavaScript's `Date` function to get their age as of today.

---

---

## 💡 What I Learned (Beginner Reflection)

This exercise helped me understand several important JavaScript concepts in a deeper way.

### 1. Working with Arrays of Objects

Before this exercise, I was comfortable with arrays and objects separately.  
But this problem forced me to work with an **array that contains multiple objects**, and access properties inside each object.

Example:

person.yearOfBirth  
person.yearOfDeath

This helped me feel more comfortable navigating nested data structures.

---

### 2. Calculating Values from Object Properties

I learned how to calculate something meaningful from object data.

Age calculation:

age = yearOfDeath - yearOfBirth

But when `yearOfDeath` was missing, I had to think differently:

age = currentYear - yearOfBirth

This made me realize that programming is not just about syntax —  
it’s about understanding the logic behind real-world situations.

---

### 3. Handling Edge Cases

One of the tests included a person with no `yearOfDeath`.

At first, I didn’t think about this case.  
Then I realized that real applications often have incomplete data.

Using:

new Date().getFullYear()

helped me calculate the age of someone who is still alive.

This taught me that good developers always think about edge cases.

---

### 4. Understanding the reduce() Method

This exercise improved my understanding of `reduce()`.

Before, reduce felt confusing.  
Now I understand that:

- It compares values step by step
- It keeps track of the "current best result"
- It returns one final value

In this case, it keeps track of the oldest person while looping through the array.

---

### 5. Reading Tests to Understand Requirements

Instead of guessing what to build,  
I learned to read the test file carefully.

The test cases clearly showed:

- What the function should return
- What edge cases to handle
- How the data is structured

This helped me understand how real developers use test-driven development (TDD).

---

## Overall Growth

This exercise made me feel more confident in:

- Array iteration
- Object property access
- Logical comparisons
- Handling undefined values
- Thinking like a problem
