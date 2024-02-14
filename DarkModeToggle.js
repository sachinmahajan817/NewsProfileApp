import React from 'react';

const DarkModeToggle = ({ darkMode, toggleDarkMode }) => {
  return (
    <div>
      <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
      <label>Dark Mode</label>
    </div>
  );
};

export default DarkModeToggle;
