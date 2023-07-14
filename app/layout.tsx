"use client";
import './globals.css';
import Nav from '../components/Nav';
import Footer from "../components/Footer";
import { ThemeProvider } from 'next-themes';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          enableSystem={true}
          attribute="class"
        >
          <Nav />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
