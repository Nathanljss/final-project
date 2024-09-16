import { db } from "@/utils/utilities.js";
import Link from "next/link";

export default async function PostsPage() {
  const jobposts = (await db.query(`SELECT * FROM jobstable`)).rows;

  console.log(jobposts);

  return (
    <>
      <h1>Here are the currently available jobs</h1>
      <ul>
        {jobposts.map((jobpost) => (
          <li key={jobpost.id}>
            {jobpost.jobposter}&nbsp;
            {jobpost.jobtitle}&nbsp;
            {jobpost.jobdesc}&nbsp; £{jobpost.jobsalary} Per Annum&nbsp;
            <Link href="/posts/1">View this job</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
