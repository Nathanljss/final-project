import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <h1>Please sign in to use Jobber</h1>
      <SignIn />
    </>
  );
}
