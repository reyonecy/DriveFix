
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import "./globals.css";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-slate-200" >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
