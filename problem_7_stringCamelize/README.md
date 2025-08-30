# Camelize Exercise

## Description

Convert a hyphen-separated string into **camelCase**.

## Keypoint

1. Use `split('-')` to make an array of words.
2. Use `map()` to transform each word:
   - First word (`index === 0`) stays the same.
   - Other words: capitalize the first letter and append the rest of the word.
3. Use `join('')` to combine the array into a single string.
4. Return the result.
