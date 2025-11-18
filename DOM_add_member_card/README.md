# DOM Add Member Card

## Overview

A simple JavaScript project that allows users to dynamically create member cards on a web page.  
Users can input a name, add it as a card, and see it displayed with "Delete" and "Edit" buttons.

---

## Features

- Add a member card with a name input.
- Clear the input field automatically after submission.
- Each card contains:
  - Member name
  - Delete button (removes the card)
  - Edit button (allows changing the name)
- Practicing DOM manipulation with `createElement`, `appendChild`, and event handling.

---

## How It Works

1. User types a name in the input field.
2. User clicks the **Add** button.
3. JavaScript checks if the input is empty:
   - Shows an alert if empty.
   - Proceeds if valid.
4. Creates a new card `<div>` for the member.
5. Creates a `<h3>` element for the member name and adds it to the card.
6. Creates "Delete" and "Edit" buttons and adds them to the card.
7. Appends the card to the card container.
8. Clears the input field for the next submission.

---

## Technologies Used

- HTML
- CSS (for styling cards and layout)
- JavaScript (DOM manipulation, event handling)

---

## What I Learned

- How to dynamically create and append HTML elements using JavaScript.
- How to handle user input and validate it before processing.
- How to attach event listeners to dynamically created elements.
- How to manipulate the DOM to delete or edit elements on the page.
- Using `prompt` for user interaction to edit existing content.
- Styling elements using CSS classes and pseudo-classes (hover effects).
- Basic layout with Flexbox to align elements vertically and horizontally.
- How to implement Edit functionality by updating text content based on user input.
