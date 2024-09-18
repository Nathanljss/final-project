import Link from "next/link";

export default function NavBar() {
  return (
    <div classname="navbar">
      <h1>Jobber</h1>
      <Link href="/">Home</Link>
      &nbsp;&nbsp;
      <Link href="/aboutus">About us</Link>
      &nbsp;&nbsp;
      <Link href="/posts">Available jobs</Link>
      &nbsp;&nbsp;
      <Link href="/jobpost">Post jobs</Link>
    </div>
  );
}
