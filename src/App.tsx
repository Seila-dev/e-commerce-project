import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/routes";
import { CartProvider } from "./contexts/CartContext";

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
