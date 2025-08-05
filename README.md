# Alpha Sales Flow

Alpha Sales Flow is a React application that helps track new families through the Alpha Anywhere onboarding pipeline. Advisors can add customers, monitor progress through key milestones, and send tailored emails from editable templates.

## Features
- Add customers with parent and student information, start dates, and advisor assignments
- Track onboarding status across multiple steps with at-a-glance counts
- Sort and search the pipeline by customer, student, or status
- Send predefined email templates (confirmation, ESA tips, enrollment welcome, parent support) and customize them in-app
- View a timeline of actions for each customer, including sent emails and completed steps

## Local Development
This project is bootstrapped with [Create React App](https://create-react-app.dev/). To run the app locally:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
   The app will be available at [http://localhost:3000](http://localhost:3000) and reload on code changes.

## Testing
Run the test suite once using:

```bash
npm test -- --watchAll=false
```

## Production Build
Create an optimized build for deployment:

```bash
npm run build
```

