import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import Whatsup from "@/components/whatsup";
import FooterCompo from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CSI JUNIOR SCHOOL ",
  description: "CSI Junior Academy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex min-h-screen w-full flex-col lg:gap-4 lg:px-4">
          <Header />
          {children}
          <Whatsup />
          <FooterCompo />
        </div>
      </body>
    </html>
  );
}
