import "@/styles/globals.css";
import localFont from "next/font/local";
import Script from "next/script";

const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "HFT | Excel 2024",
  description:
    "HackForTomorrow (HFT) is a 24 hour-long hackathon, which seeks to promote the creation of novel and distinctive technical solutions to societal problems.",
  icons: {
    icon: "/favicon.ico",
    sizes: "any",
  },
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <head>
        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-1743VN305W"
        />
        <Script strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1743VN305W', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
