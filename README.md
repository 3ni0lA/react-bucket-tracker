
# Bucket List Tracker App

A simple, full-stack application that allows users to track and manage their life goals. Built with React and AWS Amplify, it supports user authentication, data persistence with DynamoDB, and a clean UI with theme switching.

## Features

- **Add/Delete Bucket List Goals**: Users can manage their personal life goals in real time.
- **Dark/Light Mode**: Toggle between themes with persistent preferences.
- **Authentication**: Sign-up, log-in, and log-out functionality powered by AWS Amplify.
- **Cloud Backend**: GraphQL API, DynamoDB, and S3 for data storage and backend services.
- **Responsive Design**: Optimized for both mobile and desktop views.

## Technologies Used

- **Frontend**: React, AWS UI Components, CSS
- **Backend**: AWS Amplify, AppSync (GraphQL), DynamoDB, S3
- **Auth**: AWS Cognito
- **Deployment**: AWS Amplify Hosting

## Screenshots

### Home Page (Light Mode)
![Light Mode Screenshot](https://github.com/3ni0lA/react-bucket-tracker/blob/main/light%20mode.png?raw=true
)

### Home Page (Dark Mode)
![Dark Mode Screenshot](https://github.com/3ni0lA/react-bucket-tracker/blob/main/Dark%20mode.png?raw=true)

### Architecture Diagram
![Architecture Screenshot](https://github.com/3ni0lA/react-bucket-tracker/blob/main/App%20architecture.png?raw=true)




## Setup Instructions

1. Clone this repo:
   ```bash
   git clone https://github.com/3nioLA/bucket-list-tracker.git
   cd bucket-list-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up AWS Amplify:
   ```bash
   amplify init
   amplify push
   ```

4. Start the development server:
   ```bash
   npm start
   ```

> Make sure you have an AWS account and the Amplify CLI installed.

## Lessons Learned

- Working with AWS Amplify greatly simplifies backend integration.
- Using GraphQL allowed for more flexible queries and reduced over-fetching.
- Handling user authentication with Amplify was seamless but required careful state management.
- Learned how to debug deployment issues and manage environments in AWS Amplify Console.

## Future Improvements

- Add categories/tags for goals
- Enable file upload for media-based goals (using S3)
- Implement progress tracking (e.g., goal completion percentage)
  
## Full Documentation Link  
[Notion Doc](https://www.notion.so/Building-a-Bucket-list-tracker-and-deploying-to-AWS-Amplify-1d0b7457f77b809ca4b5e90d8fd4a6e3?pvs=4)

## Author

**Eniola Adewale**  
[LinkedIn](https://www.linkedin.com/in/adewale-eniola-4787a12b3/) | [GitHub](https://github.com/3ni0lA)
