import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <h1>Jobber</h1>
      <Link href="/">Home</Link>
      &nbsp;&nbsp;
      <Link href="/pages/aboutus">About us</Link>
      &nbsp;&nbsp;
      <Link href="/pages/posts">Available jobs</Link>
    </>
  );
}
