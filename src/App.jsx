// src/App.jsx
import React, { useState } from 'react';
import withTheme from './hoc/withTheme';
import ThemedButton from './components/ThemedButton';
import InfoButton from './components/InfoButton';

const ThemedButtonWithTheme = withTheme(ThemedButton);

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="app">
      <div style={{
        position: 'absolute', // Абсолютное позиционирование
        top: '20px', // Верхний отступ
        right: '760px', // Отступ справа
        display: 'flex',
        alignItems: 'center', // Централизация по вертикали
        gap: '1px' // Промежуток между кнопками
      }}>
        <ThemedButtonWithTheme theme={theme} onClick={toggleTheme}/>
        <InfoButton theme={theme} />
      </div>
    </div>
  );
};

export default App;
