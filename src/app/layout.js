import Navbar from "./pages/NavBar";
import "react-toastify/dist/ReactToastify.css";
import "./global.css";
import { ToastContainer } from "react-toastify";
import { LocaleStoreKontrol } from "./pages/LocaleStoreKontrol";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LocaleStoreKontrol />
        <Navbar />
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}
