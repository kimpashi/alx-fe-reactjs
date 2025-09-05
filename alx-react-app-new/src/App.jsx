import { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';
import WelcomeMessage from './components/WelcomeMessage';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        maxWidth: 720,
        margin: '32px auto',
        padding: '0 16px',
        fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif',
        color: '#111827'
      }}
    >
      <Header />
      <MainContent />

      {/* Example user profiles using props */}
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile name="Bob" age="30" bio="Enjoys cooking and traveling" />

      {/* Optional existing component from earlier tasks */}
      <WelcomeMessage />

      {/* Small counter just to show the app is alive */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          alignItems: 'center',
          marginTop: '16px'
        }}
      >
        <button
          onClick={() => setCount((c) => c + 1)}
          style={{
            padding: '8px 12px',
            borderRadius: '8px',
            border: '1px solid #d1d5db',
            background: '#f9fafb',
            cursor: 'pointer'
          }}
        >
          count is {count}
        </button>
        <span style={{ color: '#6b7280' }}>Inline-styled components demo</span>
      </div>

      <Footer />
    </div>
  );
}

export default App;
