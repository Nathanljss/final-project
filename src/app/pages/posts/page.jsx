import { db } from "@/utils/utilities.js";

export default async function PostsPage() {
  const jobposts = (await db.query(`SELECT * FROM jobstable`)).rows;

  console.log(jobposts);

  return (
    <>
      <h1>Here are the currently available jobs</h1>
      <ul>
        {jobposts.map((jobpost) => (
          <li key={jobpost.id}>
            {jobposter}
            {jobtitle}
            {jobdesc}
            {jobsalary}
          </li>
        ))}
      </ul>
    </>
  );
}
