import React, { FC } from "react";
import Layout from "./layout/Layout";
import Calendar from "./pages/Calendar";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
  }
  button {
    border: none;
    background: none;
    cursor: pointer;
  }
`;

const App: FC = () => {
  return (
    <Layout>
      <GlobalStyles />
      <Calendar />
    </Layout>
  );
};

export default App;
