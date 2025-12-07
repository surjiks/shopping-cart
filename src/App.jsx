import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    
    <BrowserRouter>
      <DataProvider>
        <AppRoutes />
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
