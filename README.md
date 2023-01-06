# What does this do?
It sends events to Amplitude with fake data. Each event has a unique 10 digit user ID.

# How to use:
- Clone this repo
- `yarn install`
- Replace `API_KEY` with your project's key https://github.com/kelsonpw/event-gen/blob/85400ef518dbaf9609a54c311e2591f15021e33e/main.ts#L54

# How to Run:
- `yarn start`

# How to Run Batch:
- `yarn batch 50` (where 50 is the number of events you want to send)