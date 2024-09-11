import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="./components/aboutUs">About Us</Link>
    </>
  );
}
