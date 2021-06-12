import React from 'react';
import './App.css';

// MUI 
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

// components
import {TopBar, MainContainer, FormList } from './components';

//  redux 
import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <TopBar />
        <MainContainer />
        <FormList />
      </Provider>
      </ThemeProvider>
  );
}

export default App;
