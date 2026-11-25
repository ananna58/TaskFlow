# TaskFlow – Smart Task Management & Productivity Tracker

TaskFlow is a responsive task management web application built with React, Vite, Tailwind CSS, Firebase Authentication, and Cloud Firestore. It helps users organize tasks, set priorities and deadlines, manage a Kanban workflow, and review productivity analytics.

## Features
- Email/password registration, login, logout, and password reset
- User-specific Firestore task storage
- Create, edit, delete, search, filter, and sort tasks
- To Do / In Progress / Completed workflow
- Drag-and-drop Kanban board
- Monthly deadline calendar
- Dashboard statistics and charts based on saved tasks
- Deadline reminder page for overdue, due-today, and next-seven-day tasks
- Light/dark theme and profile display-name editing
- Responsive layout and toast feedback

## Tech stack
React 18, Vite, JavaScript, Tailwind CSS, Firebase Authentication, Cloud Firestore, React Router, Recharts, Lucide React, dnd-kit, date-fns.

## Requirements
Node.js 18+ and a Firebase project.

## Firebase setup
1. Create a project at https://console.firebase.google.com/.
2. Add a Web App and copy its Firebase configuration.
3. In **Authentication → Sign-in method**, enable **Email/Password**.
4. In **Firestore Database**, create a database.
5. Copy `.env.example` to `.env` in the project root and fill in the Firebase web app values. These client configuration values identify your Firebase project; access control is enforced by Firestore Security Rules.
6. Publish the rules from `firestore.rules` in Firebase Console → Firestore → Rules.

## Run locally
```bash
npm install
cp .env.example .env
# Edit .env with your Firebase values
npm run dev
```
On Windows PowerShell, use `Copy-Item .env.example .env` instead of `cp`.

## Build
```bash
npm run build
npm run preview
```

## Firestore data model
```text
users/{uid}
users/{uid}/tasks/{taskId}
```
The security rules restrict access to a user's own document and nested tasks. Do not deploy with permissive test rules.

## Deployment
- Deploy the Vite frontend to Vercel.
- Add the same `VITE_FIREBASE_*` environment variables in Vercel project settings.
- Publish `firestore.rules` to Firebase.
- Configure SPA rewrites in Vercel if required by your deployment setup.

## Notes
- TaskFlow requires Firebase configuration; without it, the app shows a setup guide rather than pretending to save data.
- Calendar displays tasks by due date.
- Notifications are currently represented by in-app toast feedback and deadline visibility; scheduled push notifications are not included.
- This is a portfolio/learning project. Review Firebase rules and project configuration before production use.

## License
MIT
