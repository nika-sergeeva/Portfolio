import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle} from 'styled-components'

const Global = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family:'Inter', sans-serif;
  color: hsl(240, 38%, 20%);
}
a{
  text-decoration: none;
  color: inherit;
  transition: all ease 200ms;
  font-weight: 700;
}
a:hover{
  color: hsl(240, 18%, 77%);
}
li{
  list-style: none;
}
`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <>
 <Global />
 <App />
 </>
    
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
