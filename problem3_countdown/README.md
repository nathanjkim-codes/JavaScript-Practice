# Launch Countdown Exercise

## Instructions

### Print a countdown from 10 to "Blast off!" using a loop:

- Loop from 10 down to 0 (`let i = 10; i >= 0; i--`).

### For each iteration:

- Create a paragraph: `const para = document.createElement('p');`

- Append it to the output `<div>`: `output.appendChild(para);`

- Set paragraph text:

  - `"Countdown 10"` if `i === 10`

  - `"Blast off!"` if `i === 0`

  - Otherwise, just `i`

### Key point: Count downwards using `i--` instead of `i++`.
