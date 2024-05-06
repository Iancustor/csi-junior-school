import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import Whatsup from "@/components/whatsup";
import FooterCompo from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://csijuniorschool.com"),
  title: {
    default:
      "CSI Junior School Kireka: Nursery to P7 Education in Kampala, Uganda",
    template:
      "%s | CSI Junior School Kireka: Nursery to P7 Education in Kampala, Uganda",
  },
  description:
    "Discover quality education at CSI Junior School Kireka. From nursery to P7, we nurture young minds in Kampala, Uganda. Enroll today! Call +256704442850",
  applicationName: "CSI Junior School Kireka",
  keywords: [
    "CSI Junior School Kireka",
    "Kampala Uganda",
    "education",
    "nursery",
    "primary school",
    "P7",
    "kindergarten",
    "learning",
    "children",
    "students",
    "curriculum",
    "quality education",
    "academic excellence",
    "child development",
    "enrollment",
    "admissions",
    "Kireka",
    "school motto",
    "Proverbs 22:6",
    "learning environment",
  ],
  authors: [
    {
      name: "Ian Custor | code with Iancustor | +256705801633",
      url: "https://custordev.vercel.app",
    },
  ],
  creator: "Ian Custor",
  publisher: "Ian Custor ",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title:
      "CSI Junior School Kireka: Nursery to P7 Education in Kampala, Uganda",
    description:
      "Discover quality education at CSI Junior School Kireka. From nursery to P7, we nurture young minds in Kampala, Uganda. Enroll today! Call +256704442850",
    url: "https://csijuniorschool.com",
    siteName: "CSI Junior School Kireka",
    type: "website",
    local: "en_us ",
  },
  twitter: {
    title:
      "CSI Junior School Kireka: Nursery to P7 Education in Kampala, Uganda",
    description:
      "Discover quality education at CSI Junior School Kireka. From nursery to P7, we nurture young minds in Kampala, Uganda. Enroll today! Call +256704442850",
    handle: "@csijuniorschool",
    site: "CSI Junior School Kireka",
    cardType: "summary_large_image",
  },
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
