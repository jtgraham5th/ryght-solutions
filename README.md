# Ryght Solutions - Healthcare Management System

A comprehensive React-based healthcare management application designed for managing patients, treatment plans, progress notes, authorizations, and clinical documentation.

## 🚀 Live Demo

Visit the live application: **[https://jtgraham5th.github.io/ryght-solutions](https://jtgraham5th.github.io/ryght-solutions)**

The live demo runs in **mock mode** with sample data, allowing you to explore all features without a backend API.

## 📋 Features

- **Patient Management**: Complete patient enrollment and demographics management
- **Treatment Planning**: Create and manage treatment plans with goals, objectives, and interventions
- **Progress Notes**: Document patient progress and session notes
- **Authorization Management**: Track insurance authorizations and session limits
- **Clinical Documentation**: Generate and manage various clinical forms and documents
- **User Dashboard**: Centralized dashboard for clinicians
- **Settings Management**: Configure users, services, and system settings

## 🔐 Mock Data Login Instructions

The application runs in **mock mode** when no external API is configured. This allows you to explore the application with sample data.

### Available Login Credentials

You can log in with any of the following accounts using the password: **`demo`**

#### Admin Account
- **Email/Username**: `admin@ryghtsolutions.com` or `admin`
- **Password**: `demo`
- **Access Level**: Administrator (full access to all features)

#### Therapist Accounts
- **Email/Username**: `sarah.johnson@ryghtsolutions.com` or `therapist1`
- **Password**: `demo`
- **Access Level**: Therapist

- **Email/Username**: `michael.chen@ryghtsolutions.com` or `therapist2`
- **Password**: `demo`
- **Access Level**: Therapist

### Mock Data Available

The mock mode includes sample data:
- **3 Users**: Admin and 2 therapists
- **3 Patients**: Sample patient records with demographics
- **Treatment Plans**: Sample treatment plans with goals and objectives
- **Progress Notes**: Example progress notes
- **Authorizations**: Sample authorization records
- **Services**: Service codes and billing information
- **Diagnosis Codes**: ICD-10 diagnosis codes

### Notes on Mock Mode

- **Data Persistence**: Changes made in mock mode are stored in browser memory only and will be lost on page refresh
- **No Backend Required**: The application runs entirely in the browser with mock data
- **Full Feature Access**: All features are available and functional in mock mode

## 🛠️ Development Setup

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/jtgraham5th/ryght-solutions.git
   cd ryght-solutions
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Development with Mock Data

The application automatically uses mock data when:
- `REACT_APP_USE_MOCK=true` is set in `.env`, OR
- `REACT_APP_API_URL` is not set or is empty

To enable mock mode in development, create a `.env` file:
```env
REACT_APP_USE_MOCK=true
REACT_APP_API_URL=
REACT_APP_MOCK_PASSWORD=demo
```

### Development with Backend API

To use with a real backend API:

1. Create a `.env` file:
   ```env
   REACT_APP_USE_MOCK=false
   REACT_APP_API_URL=https://your-api-url.com/
   ```

2. The application will connect to your API endpoint

## 📦 Available Scripts

### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000)

### `npm run build`
Builds the app for production to the `build` folder

### `npm test`
Launches the test runner in interactive watch mode

### `npm run deploy`
Deploys the built application to GitHub Pages (requires GitHub token)

### `npm run dev`
Runs both the backend server and frontend concurrently (requires backend server setup)

## 🏗️ Project Structure

```
ryght-solutions/
├── src/
│   ├── components/          # Reusable UI components
│   ├── features/            # Feature-based modules
│   │   ├── authentication/  # Login and user management
│   │   ├── clientDetails/   # Patient details
│   │   ├── documents/       # Clinical documents
│   │   ├── enrollment/      # Patient enrollment
│   │   ├── progressNotes/   # Progress notes
│   │   ├── treatmentPlan/   # Treatment planning
│   │   └── ...
│   ├── context/             # React Context providers
│   ├── mock/                # Mock data for demo mode
│   ├── pages/               # Page components
│   ├── services/            # API service layer
│   └── utils/               # Utility functions
├── public/                  # Static assets
└── server/                  # Backend server (optional)
```

## 🚢 Deployment

### GitHub Pages

The application is automatically deployed to GitHub Pages via GitHub Actions when changes are pushed to the `main` branch.

1. Push changes to `main` branch
2. GitHub Actions automatically builds and deploys
3. Site is available at: `https://jtgraham5th.github.io/ryght-solutions`

### Manual Deployment

To deploy manually:

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

## 🔧 Configuration

### Environment Variables

- `REACT_APP_USE_MOCK`: Enable/disable mock mode (`true`/`false`)
- `REACT_APP_API_URL`: Backend API URL (leave empty for mock mode)
- `REACT_APP_MOCK_PASSWORD`: Password for mock mode login (default: `demo`)

### Homepage Configuration

The application is configured to be hosted at `/ryght-solutions/` for GitHub Pages. This is set in `package.json`:
```json
"homepage": "https://jtgraham5th.github.io/ryght-solutions"
```

## 📚 Technologies Used

- **React 18**: UI framework
- **React Router**: Client-side routing
- **React Bootstrap**: UI component library
- **React Hook Form**: Form management
- **Axios**: HTTP client
- **React PDF**: PDF generation
- **Moment.js**: Date manipulation
- **SASS**: CSS preprocessing

## 📝 License

This project is private and proprietary.

## 👤 Author

**John Graham**
- GitHub: [@jtgraham5th](https://github.com/jtgraham5th)

## 🤝 Contributing

This is a private project. Contributions are not currently accepted.

## 📞 Support

For questions or support, please contact the project maintainer.

---

**Note**: This application is designed for healthcare management and includes features for patient records, treatment plans, and clinical documentation. All mock data is for demonstration purposes only.
