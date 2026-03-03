# MaxPreps React Interview

This React app has a number of bugs and does not meet all of the requirements below. This interview will assess your ability to debug code and create features, both with and without AI assistance.

## Section 1: No AI-Assistance

Clone this repository and attempt to launch the app. Ensure it meets all of these requirements:
- No errors in the console.
- The form should reset after adding an athlete.
- Clicking the Delete button should remove the athlete from the list.
- Clicking on the Edit button should update the form data, even if another athlete is already loaded in the edit form.
- You should be able to edit the name and position of an athlete.
- When adding an athlete, if the position is `center`, the add button should be hidden.
- There should be 2 columns, one with the Add/Edit Athlete form and the other with View Athletes table. The columns should stack on smaller devices.

When **section 1** is complete, the app should look like this:

| Mobile | Desktop |
|--------|---------|
| <img width="300" alt="mobile" src="https://user-images.githubusercontent.com/49081448/69361282-0258c100-0c41-11ea-8d94-7568ec736431.png" style="max-width: 100%; height: auto;"> | <img width="600" alt="desktop" src="https://user-images.githubusercontent.com/49081448/69361281-01279400-0c41-11ea-8e98-35d37ec3380e.png" style="width: 100%; max-width: 600px;"> |

## Section 2: AI-Assistance Allowed

- Fetch the data from the following endpoint instead of using hard-coded data. You do NOT need to implement the ability to add, edit, or delete via an API.
    - `https://04686f0d-d5ad-4e3b-85e2-d51457898a5b.mock.pstmn.io/test/athletes/`
