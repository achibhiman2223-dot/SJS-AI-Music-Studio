# SJS AI Music Studio

Professional AI-powered music studio interface for generating complete songs with instrumental music and expressive singing vocals.

## Current Status

✅ **First Frontend Prototype Complete**

This repository now contains a fully functional, responsive music studio interface built with React and Vite. The UI includes:
- Beautiful dark theme with purple/cyan gradients
- Song creation form with language, genre, mood, and vocal controls
- Project management dashboard
- AI music assistant interface
- Settings panel
- Music player interface (disabled until audio generation is integrated)
- Progressive Web App structure for installable offline experience
- Mobile-responsive design for all devices

## Tech Stack

- **Frontend:** React 18 + Vite
- **Styling:** Modern CSS with CSS variables and gradients
- **PWA:** Service Worker + Web Manifest
- **Build:** Vite (fast dev server and production builds)

## System Requirements

- **Windows 11** (or any OS with Node.js support)
- **Node.js** 18 or later (free from https://nodejs.org/)
- **RAM:** 2GB minimum (you have 16GB, which is plenty)
- **Internet:** Required for npm installation only

## Installation & Setup (Windows 11)

### Step 1: Install Node.js

1. Download from https://nodejs.org/
2. Run the installer (.msi file)
3. Choose default options
4. Verify installation by opening PowerShell and typing:
   ```powershell
   node --version
   npm --version
   ```

### Step 2: Setup This Project

1. Open PowerShell
2. Navigate to the project folder:
   ```powershell
   cd C:\path\to\SJS-AI-Music-Studio
   ```
3. Install dependencies (one-time, takes 2-3 minutes):
   ```powershell
   npm install
   ```

### Step 3: Start Development Server

```powershell
npm run dev
```

You should see:
```
  VITE v5.4.10  ready in 456 ms

  ➜  Local:   http://localhost:5173/
  ➜  press h to show help
```

### Step 4: Open in Browser

- Click the link: http://localhost:5173/
- Or open your browser and type: `localhost:5173`

## Features

### ✅ Implemented

- **Create Song Page**: Form with song idea, lyrics, language (English, Hindi, Kannada, Tamil, Telugu, Bengali), genre, mood, vocal type
- **My Projects**: Sample project list with status tracking
- **AI Music Assistant**: Creative prompt suggestions
- **Settings**: Workspace configuration display
- **Music Player**: Full UI with play, pause, seek, volume (disabled until audio exists)
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile
- **Dark Theme**: Professional music studio aesthetic with purple and cyan gradients
- **PWA Ready**: Can be installed as an app on mobile browsers

### ⏳ Not Yet Implemented (Next Stage)

- Real music generation (requires backend + AI model)
- AI singing vocals synthesis
- Lyrics database and editing
- Project saving and loading
- Audio playback and download
- User authentication
- Backend API integration

## Important Security Notes

✅ **This frontend is safe and does NOT:**
- Expose any API keys in code
- Generate fake audio
- Claim to have working AI features
- Connect to any real AI services yet
- Store user data (no database integration)

All real AI integration will happen in the backend, which is built and tested separately.

## Building for Production

```powershell
npm run build
```

This creates an optimized `dist/` folder ready for deployment.

## Preview Production Build

```powershell
npm run preview
```

This runs the production build locally to test before deployment.

## Development Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start the development server (localhost:5173) |
| `npm run build` | Create optimized production build |
| `npm run preview` | Preview the production build locally |

## File Structure

```
SJS-AI-Music-Studio/
├── src/
│   ├── main.jsx          # App entry point with PWA setup
│   ├── App.jsx           # Main React component with all UI
│   └── styles.css        # All styling with dark theme
├── public/
│   ├── manifest.webmanifest  # PWA manifest for installable app
│   ├── sw.js             # Service Worker for offline support
│   └── icon.svg          # App icon
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md             # This file
```

## Next Steps

After the frontend is working, the next stage is:

1. **Create Backend Server** (Python/Node.js)
   - Set up API endpoints for song generation
   - Integrate music generation models (MusicGen, Coqui TTS)
   - Handle database storage
   - Secure API key management

2. **Integrate Music Models**
   - MusicGen for instrumental music
   - Coqui TTS for singing vocals
   - Language support via Piper

3. **Connect Frontend to Backend**
   - Update React forms to send requests to backend
   - Display real audio from models
   - Add progress tracking and error handling

## Troubleshooting

**Problem:** `npm install` fails
- **Solution:** Make sure Node.js is installed. Restart PowerShell if needed.

**Problem:** Port 5173 already in use
- **Solution:** Change the port in `vite.config.js` or close the app using it.

**Problem:** Blank screen on localhost:5173
- **Solution:** Check browser console (F12) for errors. Try clearing cache and refreshing.

**Problem:** Service Worker not working
- **Solution:** This is expected in development. PWA features work best in production.

## License

Open source. Free to use and modify.

## Support

For questions or issues with this prototype, check:
1. Browser console (Press F12) for error messages
2. The README troubleshooting section
3. Vite docs: https://vitejs.dev/
4. React docs: https://react.dev/
