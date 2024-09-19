import { ClerkProvider, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import "./globals.css";
import Navbar from "@/components/navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header></header>
          <Navbar></Navbar>
          <div>
            <SignedOut></SignedOut>
            <SignedIn>
              <UserButton showName={true} />
            </SignedIn>
          </div>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
