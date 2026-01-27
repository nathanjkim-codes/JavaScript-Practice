# Toggle Button Project

## Description

A simple toggle button that switches between ON and OFF states.  
The button text, status text, and button color change depending on the current state.

## How It Works

- Click the button to toggle the state (`isOn`).
- The button text updates to "ON" or "OFF".
- The status text shows `Current status: ON` or `Current status: OFF`.
- The button color changes using CSS classes `.ON` (green) and `.OFF` (red).

## What I Learned

- **State Management:**  
  I used a boolean variable `isOn` to store the current state of the button.  
  This makes it easy to track whether the button is ON or OFF.

- **Boolean Literal:**  
  I used `true` and `false` as boolean literals because the toggle button only has two possible states.  
  This simplifies the logic and avoids unnecessary values.

- **Ternary Operator vs if Statement:**  
  I used the ternary operator (`? :`) to update text content based on `isOn`.  
  This is shorter and more concise than an `if` statement, making the code easier to read and write for simple conditions.

- **classList.toggle:**  
  I used `classList.toggle` to add or remove CSS classes based on the state, which updates the button color automatically.

## Tech stack

- HTML
- CSS
- JavaScript
