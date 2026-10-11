import { useMemo, useState } from 'react';

const navItems = ['Create Song', 'My Projects', 'AI Music Assistant', 'Settings'];

const languageOptions = ['English', 'Hindi', 'Kannada', 'Tamil', 'Telugu', 'Bengali'];
const genreOptions = ['Pop', 'Rock', 'Electronic', 'Hip-Hop', 'Classical', 'Indie', 'Bollywood', 'Lo-fi'];
const moodOptions = ['Happy', 'Energetic', 'Chill', 'Romantic', 'Sad', 'Epic', 'Dreamy'];
const vocalOptions = ['Warm Pop', 'Smooth R&B', 'Energetic Rap', 'Soulful Female', 'Deep Male', 'Neutral'];

const projectSamples = [
  {
    name: 'Midnight Drive',
    language: 'English',
    genre: 'Synthwave',
    status: 'Draft',
    duration: '2:46',
  },
  {
    name: 'Rain on the Rooftop',
    language: 'Kannada',
    genre: 'Indie',
    status: 'Ready for vocals',
    duration: '3:12',
  },
  {
    name: 'Dil Ki Baat',
    language: 'Hindi',
    genre: 'Bollywood',
    status: 'Lyrics edit',
    duration: '4:05',
  },
];

const assistantPrompts = [
  'Write a chorus that sounds uplifting and cinematic.',
  'Create a bilingual hook with English and Hindi phrases.',
  'Suggest a warm vocal style for a romantic ballad.',
  'Give me a beat idea with 110 BPM and a dreamy texture.',
];

function App() {
  const [activeSection, setActiveSection] = useState('Create Song');
  const [form, setForm] = useState({
    idea: 'A late-night emotional track about hope after a difficult year.',
    lyrics: 'We found our light in the quiet, and the city remembered our names.',
    language: 'English',
    genre: 'Pop',
    mood: 'Dreamy',
    vocalType: 'Warm Pop',
    instrumentalOnly: false,
  });
  const [status, setStatus] = useState(
    'No AI generation model is connected yet. This prototype only shows the studio interface and safe workflow.',
  );

  const summary = useMemo(() => {
    return `${form.language} • ${form.genre} • ${form.mood} • ${form.vocalType}`;
  }, [form]);

  const handleInput = (key, value) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleGenerate = (event) => {
    event.preventDefault();
    setStatus(
      'No music-generation model or API is connected yet. Audio generation will be enabled in the next stage after backend integration and testing.',
    );
  };

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand-wrap">
          <div className="brand-mark">S</div>
          <div>
            <p className="eyebrow">Creative Suite</p>
            <h1>SJS AI</h1>
          </div>
        </div>

        <nav className="nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <button
              key={item}
              type="button"
              className={item === activeSection ? 'nav-item active' : 'nav-item'}
              onClick={() => setActiveSection(item)}
            >
              <span className="nav-dot" aria-hidden="true" />
              {item}
            </button>
          ))}
        </nav>

        <div className="sidebar-card">
          <p className="small-label">Studio status</p>
          <strong>Prototype mode</strong>
          <span>UI ready, AI engine pending</span>
        </div>
      </aside>

      <main className="main-panel">
        <header className="topbar">
          <div>
            <p className="eyebrow">Music creation workspace</p>
            <h2>{activeSection}</h2>
          </div>
          <button type="button" className="ghost-button">
            Save draft
          </button>
        </header>

        {activeSection === 'Create Song' && (
          <section className="content-grid">
            <form className="studio-card form-card" onSubmit={handleGenerate}>
              <div className="section-head">
                <div>
                  <p className="small-label">Song brief</p>
                  <h3>New Generation</h3>
                </div>
              </div>

              <label className="field">
                <span>Song idea</span>
                <textarea
                  rows={3}
                  value={form.idea}
                  onChange={(event) => handleInput('idea', event.target.value)}
                />
              </label>

              <label className="field">
                <span>Lyrics</span>
                <textarea
                  rows={5}
                  value={form.lyrics}
                  onChange={(event) => handleInput('lyrics', event.target.value)}
                />
              </label>

              <div className="grid-two">
                <label className="field">
                  <span>Language</span>
                  <select value={form.language} onChange={(event) => handleInput('language', event.target.value)}>
                    {languageOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="field">
                  <span>Genre</span>
                  <select value={form.genre} onChange={(event) => handleInput('genre', event.target.value)}>
                    {genreOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <div className="grid-two">
                <label className="field">
                  <span>Mood</span>
                  <select value={form.mood} onChange={(event) => handleInput('mood', event.target.value)}>
                    {moodOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="field">
                  <span>Vocal type</span>
                  <select value={form.vocalType} onChange={(event) => handleInput('vocalType', event.target.value)}>
                    {vocalOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="checkbox-row">
                <input
                  type="checkbox"
                  checked={form.instrumentalOnly}
                  onChange={(event) => handleInput('instrumentalOnly', event.target.checked)}
                />
                Instrumental-only mode
              </label>

              <button type="submit" className="primary-button">
                Generate Song
              </button>
            </form>

            <aside className="side-stack">
              <div className="studio-card preview-card">
                <div className="section-head compact">
                  <div>
                    <p className="small-label">Project summary</p>
                    <h3>{form.idea || 'Untitled idea'}</h3>
                  </div>
                </div>

                <div className="tag-list">
                  <span>{form.language}</span>
                  <span>{form.genre}</span>
                  <span>{form.mood}</span>
                  <span>{form.instrumentalOnly ? 'Instrumental only' : 'With vocals'}</span>
                </div>

                <p className="muted-text">{summary}</p>
              </div>

              <div className="studio-card player-card">
                <div className="section-head compact">
                  <div>
                    <p className="small-label">Audio studio</p>
                    <h3>Music Player</h3>
                  </div>
                </div>

                <div className="player-meta">
                  <span className="track-pill">No audio ready</span>
                </div>

                <div className="player-controls">
                  <button type="button" className="icon-button" disabled aria-label="Play audio">
                    Play
                  </button>
                  <button type="button" className="icon-button" disabled aria-label="Pause audio">
                    Pause
                  </button>
                </div>

                <label className="slider-block">
                  <span>Seek</span>
                  <input type="range" min="0" max="100" value="0" disabled />
                </label>

                <label className="slider-block">
                  <span>Volume</span>
                  <input type="range" min="0" max="100" value="65" disabled />
                </label>

                <button type="button" className="secondary-button" disabled>
                  Download audio
                </button>
                <p className="system-note">Playback and downloads stay disabled until a real music model generates a verified audio file.</p>
              </div>
            </aside>
          </section>
        )}

        {activeSection === 'My Projects' && (
          <section className="studio-card full-width-card">
            <div className="section-head">
              <div>
                <p className="small-label">Saved works</p>
                <h3>My Projects</h3>
              </div>
            </div>

            <div className="project-grid">
              {projectSamples.map((project) => (
                <article className="project-card" key={project.name}>
                  <div className="project-topline">
                    <span className="status-tag">{project.status}</span>
                    <span>{project.duration}</span>
                  </div>
                  <h4>{project.name}</h4>
                  <p>{project.language} • {project.genre}</p>
                  <button type="button" className="ghost-button small-button">
                    Open project
                  </button>
                </article>
              ))}
            </div>
          </section>
        )}

        {activeSection === 'AI Music Assistant' && (
          <section className="studio-card full-width-card">
            <div className="section-head">
              <div>
                <p className="small-label">Creative help</p>
                <h3>AI Music Assistant</h3>
              </div>
            </div>

            <div className="assistant-grid">
              {assistantPrompts.map((prompt) => (
                <button type="button" key={prompt} className="assistant-prompt">
                  {prompt}
                </button>
              ))}
            </div>

            <div className="assistant-panel">
              <p className="muted-text">Assistant response</p>
              <p>
                A polished, modern pop arrangement with a warm leading vocal, light synth pad, and a gentle
                rhythm section would suit this song idea.
              </p>
            </div>
          </section>
        )}

        {activeSection === 'Settings' && (
          <section className="studio-card full-width-card">
            <div className="section-head">
              <div>
                <p className="small-label">Workspace control</p>
                <h3>Settings</h3>
              </div>
            </div>

            <div className="settings-grid">
              <div className="setting-box">
                <span>Theme</span>
                <strong>Dark Studio</strong>
              </div>
              <div className="setting-box">
                <span>Language</span>
                <strong>English</strong>
              </div>
              <div className="setting-box">
                <span>Offline ready</span>
                <strong>PWA enabled</strong>
              </div>
              <div className="setting-box">
                <span>AI engine</span>
                <strong>Not connected</strong>
              </div>
            </div>
          </section>
        )}

        <div className="studio-card status-card">
          <p className="small-label">Studio log</p>
          <p>{status}</p>
        </div>
      </main>
    </div>
  );
}

export default App;
