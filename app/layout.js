import { Inter } from "next/font/google";
import "./globals.css";

// Components
import Nav from "@/components/Nav/Nav";
import Topbar from "@/components/Topbar/Topbar";
import SplashScreen from "@/components/SplashScreen";
import FullScreenNav from "@/components/Nav/FullScreenNav";

// Provider
import ProviderTree from "@/context/ProviderTree";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Youtube Redesign",
  description: "Inspired by ---",
};

export default function RootLayout({ children }) {
  return (
    <html className="overflow-hidden bg-bgPrimary" lang="en">
      <body className={`flex flex-row ${inter.className}`}>
        <ProviderTree>
          <SplashScreen />
          <FullScreenNav />
          <Nav />
          <div className="flex w-full flex-col">
            <Topbar />
            {children}
          </div>
        </ProviderTree>
      </body>
    </html>
  );
}
