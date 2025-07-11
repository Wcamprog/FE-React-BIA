import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { ThemeRegistry } from "./themeRegistry";
import { Box } from "@mui/material";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BIA Test",
  description: "Test Front End for BIA",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ThemeRegistry>
          <main
            style={{
              height: "86vh",
              overflowY: "auto",
              marginTop: "7vh",
              marginBottom: "7vh",
            }}
          >
            {children}
          </main>
          <footer>
            <Box
              sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                width: "100%",
                height: "7vh",
                bgcolor: "background.paper",
                color: "text.primary",
                boxShadow: 1,
                px: 3,
                py: 2,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1000,
              }}
            >
              <Link
                href="https://github.com/Wcamprog"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <FaGithub size={30} />
                @WCamProg
              </Link>
            </Box>
          </footer>
        </ThemeRegistry>
      </body>
    </html>
  );
}
