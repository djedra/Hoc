// src/components/InfoButton.jsx
import React from 'react';
import styled from '@emotion/styled';

const InfoButtonStyle = styled.button`
  padding: 10px 15px; /* Та же высота, что и у главной кнопки */
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  line-height: 1;
  white-space: nowrap; /* Однострочный текст */
  text-align: center; /* Горизонтальное центрирование */
  margin-left: 10px;
  ${({ theme }) =>
    theme === 'light'
      ? `
        background-color: #dfe1e6;
        color: #333;
        border: 1px solid #bbb;
      `
      : `
        background-color: #555;
        color: #fff;
        border: 1px solid #333;
      `}
`;

const InfoButton = ({ theme }) => {
  return (
    <InfoButtonStyle theme={theme}>
      Кнопка с темой
    </InfoButtonStyle>
  );
};

export default InfoButton;