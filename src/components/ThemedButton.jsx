// src/components/ThemedButton.jsx
import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  white-space: nowrap; /* Однострочный текст */
  text-align: center; /* Горизонтальное центрирование */
  ${({ theme }) =>
    theme === 'light'
      ? `
        background-color: #fafafa;
        color: #333;
        border: 1px solid #ddd;
      `
      : `
        background-color: #333;
        color: #fff;
        border: 1px solid #555;
      `}
`;

const ThemedButton = ({ onClick, theme }) => {
  return (
    <StyledButton theme={theme} onClick={() => {
      document.body.style.backgroundColor = theme === 'light' ? '#ffffff' : '#333333';
      onClick(); // Переключаем тему
    }}>
      Переключить тему (сейчас: {theme})
    </StyledButton>
  );
};

export default ThemedButton;