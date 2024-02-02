import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

import App from "./App.jsx";
import { GlobalStyles } from "./styles/globalStyles.js";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <GlobalStyles />
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);
