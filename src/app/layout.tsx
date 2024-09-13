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
          <header>
            <Navbar></Navbar>
          </header>
          <SignedOut>
            <h2>Please sign in or create an account to see the listed jobs</h2>
          </SignedOut>
          <SignedIn>
            <h3>
              Head to the Available Jobs page to see what&apos;s available
            </h3>
            <UserButton />
          </SignedIn>

          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
