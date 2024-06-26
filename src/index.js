import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalSyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import "modern-normalize";
import { BrowserRouter } from "react-router-dom";
// import ContextProvider from "./context/ContextProvider";

import ThemeProviderContext from "./context/ThemeProviderContext.jsx";
import AuthProvider from "./context/AuthProvider.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter basename="/react-example-start">
    <ThemeProviderContext>
    <AuthProvider>
    <App />
    </AuthProvider>
      
    </ThemeProviderContext>
   
    </BrowserRouter>
    <ToastContainer autoClose={1000} />
    <GlobalSyles />
  </ThemeProvider>
//   <ThemeProvider theme={theme}>
//   <ContextProvider>
//     <ThemeProviderContext>
//     <App />
//     </ThemeProviderContext>
 
//   </ContextProvider>
//   <ToastContainer autoClose={1000} />
//   <GlobalSyles />
// </ThemeProvider>
);
