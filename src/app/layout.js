"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Poppins } from "next/font/google";
import Sidebar from "@/components/Sidebar/Sidebar";
import Provider from "@/components/Provider/Provider";
import { usePathname } from "next/navigation";
import "react-tagsinput/react-tagsinput.css"; 

import BootstrapLoader from "@/components/BootstrapLoader";

const poppins = Poppins({
  weight: ["300", "400", "500", "700"],
  style: "normal",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  // Get the current pathname
  const pathname = usePathname();

  // List of page paths to exclude the sidebar from
  const excludedPages = ["/login", "/register", "/"];

  // Check if the current pathname is in the excludedPages array
  const isExcludedPage = excludedPages.includes(pathname);

  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className={poppins.className}>
          <Provider>
            {/* <PrivateRouter> */}
            <ToastContainer
              limit={3}
              pauseOnFocusLoss={false}
              autoClose={2000}
              newestOnTop
              theme="colored"
            />

            {/* Render the Sidebar conditionally based on isExcludedPage */}
            {isExcludedPage === true ? "" : <Sidebar />}

            {children}
            {/* </PrivateRouter> */}
          </Provider>
        </div>
      </body>
      <BootstrapLoader />
    </html>
  );
}
