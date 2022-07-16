import React from 'react';
import ReactDOM from 'react-dom/client';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from 'redux/store';

const darkTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#7862E4' },
    secondary: { main: '#ff0000' },
    disabled: { main: '#eee' },
    text: {
      primary: '#111111',
      secondary: '#999999',
      disabled: '#dddddd'
    },
    background: {
      default: '#f7f7f7',
      paper: '#f7f7f7'
    },
    components: {
      MuiCalendarPicker: {
        styleOverrides: {
          viewTransitionContainer: {
            '&::-webkit-scrollbar': {
              width: '50px'
            }
          }
        }
      }
    }
  },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <LocalizationProvider dateAdapter={AdapterMoment}>
          <App />
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
