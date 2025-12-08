import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { DataProvider } from "./context/DataContext";
import { CartProvider } from "./context/CartContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <CartProvider>
          <AppRoutes />
          <Toaster
            position="bottom-center"
            toastOptions={{
              duration: 3000,
              style: {
                background: "#000",
                color: "#fff",
              },
            }}
          />
        </CartProvider>
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
