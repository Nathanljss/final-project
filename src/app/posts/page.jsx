import { db } from "@/utils/utilities.js";
import Link from "next/link";

export default async function PostsPage() {
  const jobposts = (await db.query(`SELECT * FROM jobstable`)).rows;

  console.log(jobposts);

  return (
    <>
      <h1>Currently available jobs</h1>
      <ul>
        {jobposts.map((jobpost) => (
          <li key={jobpost.id}>
            <strong>{jobpost.jobposter}</strong> <br></br>
            <br></br>
            {jobpost.jobtitle}
            <br></br>
            {jobpost.jobdesc}
            <br></br> £{jobpost.jobsalary} Per Annum&nbsp;
            <Link href={`/posts/${jobpost.id}`}>View this job</Link>
            <br></br>
            <br></br>
            <hr></hr>
          </li>
        ))}
      </ul>
    </>
  );
}
