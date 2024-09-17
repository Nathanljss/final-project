import { db } from "@/utils/utilities.js";

export default async function PostPage({ params }) {
  console.log(params);
  const jobpost = (
    await db.query(`SELECT * FROM jobstable WHERE id = ${params.id};`)
  ).rows;

  return (
    <>
      {jobpost.map((jobpost) => (
        <>
          <p>Currently viewing: </p>
          <h2 key={jobpost.id}>{jobpost.jobtitle}</h2>
          <p>
            {jobpost.jobposter}&nbsp;
            {jobpost.jobtitle}&nbsp;
            {jobpost.jobdesc}&nbsp; £{jobpost.jobsalary} Per Annum
          </p>
        </>
      ))}
    </>
  );
}
