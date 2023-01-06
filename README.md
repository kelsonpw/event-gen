# What does this do?
It sends events to Amplitude with fake data. Each event has a unique 10 digit user ID.

# How to use:
- Clone this repo
- `yarn install`
- In `src/utils.ts`, replace `API_KEY` with your project's key

# How to Run:
- `yarn start`

# How to Run Batch:
- `yarn batch 50` (where 50 is the number of events you want to send)