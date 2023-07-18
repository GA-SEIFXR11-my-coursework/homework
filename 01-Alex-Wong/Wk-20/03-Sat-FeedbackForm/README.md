# Feedback Form

### Getting Started

1. Fork this repo and `git clone` it down to your computer
1. Install dependences with `npm i`
1. Start the `vite` server with `npm run dev`
1. Commit early, commit often
1. When you're finished or when time is up, push your work to your remote repo, file a Pull Request, and react with a green check on Zoom

---

### Technical Requirements

- All form inputs should be fully controlled by React with the form values stored in state.
- On submitting the form:
  - the page should **NOT** refresh.
  - the form's state should be logged to the console.
  - the input fields should be emptied.
- The textarea should have a max length of 200 characters.
- Render the number of characters the user has left for the message textarea. This should live update as they type.

### Extension

Add a "Ratings" section where the user can rate Food, Service, and Cleanliness. Each rating is a score between 1-5.

<details>
<summary>Hints</summary>

- Use radio buttons.
- Use `parseInt` before you store the rating in state or before you compute the average.
- Use `Math.round` to round the average to an int.

</details>

### Preview

- https://sei-react-feedback-form.netlify.app/
- (Fancy) https://sei-react-feedback-form-fancy.netlify.app/
