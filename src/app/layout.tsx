import "./globals.css";
import NavBar from "@/components/navbar";
import AboutPage from "@/components/aboutUs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar></NavBar>
        {children}
      </body>
    </html>
  );
}
