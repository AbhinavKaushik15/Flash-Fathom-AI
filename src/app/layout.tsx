import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import { ClerkProvider, UserButton } from "@clerk/nextjs";
import { ThemeProvider } from "..//components/ThemeProvider";
import Footer from "@/components/Footer";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Flash Fathom AI",
  description: "Building a flashcard generatro web application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen font-sans antialiased ", inter.className)}
      >
        <ClerkProvider
          appearance={{
            // baseTheme: dark,
            variables: {
              colorPrimary: "#3371ff",
              fontSize: "16px",
            },
          }}
        >
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
            <Footer />
            <ToastContainer />
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
