import React from 'react';

export default function TitleBar() {
  return (
    <div
      style={{
        height: 32,
        background: '#222',
        color: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        WebkitAppRegion: 'drag',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        zIndex: 9999
      }}
    >
      <span style={{ marginLeft: 10 }}>SpaceBites</span>
      <div style={{ WebkitAppRegion: 'no-drag' }}>
        <button onClick={() => window.electronAPI.minimize()}>−</button>
        <button onClick={() => window.electronAPI.maximize()}>▢</button>
        <button onClick={() => window.electronAPI.close()}>x</button>
      </div>
    </div>
  );
}