import styled from 'styled-components';
import { Input, Button } from 'antd';

export const SearchContainer = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  min-height: 150px;
  padding: 10px;
  width: 25%;
`;

export const SearchTitle = styled.h1`
  color: #62ACF5;
  font-size: 20px;
  font-weight: 600;
  width: 100%;
`;

export const CustomInput = styled(Input)`
  border-radius: 0;
  font-size: 20px;
  min-height: 50px;
  text-align: center;
  width: 88%;
`;

export const CustomDividerContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
  min-height: 30px;
  width: 100%;
`;

export const CustomDividerLine = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  height: 1px;
  width: 45%;
`;

export const CustomDividerInfo = styled.p`
  color: rgba(0, 0, 0, 0.3);
  font-size: 20px;
`;

export const CustomButton = styled(Button)`
  background-color: #62ACF5;
  border: none;
  color: white;
  font-size: 18px;
  margin: ${({ margin }) => margin};
  min-height: 40px;
  width: ${({ width }) => width};

  &:hover {
    color: white !important;
  }
`;
