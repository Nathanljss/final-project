import { db } from "@/utils/utilities.js";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function PostPage({ params }) {
  console.log(params);
  const jobpost = (
    await db.query(`SELECT * FROM jobstable WHERE id = ${params.id};`)
  ).rows;

  console.log(jobpost);

    async function handleAddCoverletter(formData) {
        "use server";

    const applicant = formData.get("applicant");
    const coverletter = formData.get("coverletter");

        await db.query('INSERT INTO applicationstable (applicant, coverletter, jobsid) VALUES ($1, $2, $3)',
            [applicant, coverletter, jobpost[0].id]
         );
        revalidatePath ("/posts") //revalidates page to ensure updates are shown
        redirect ("/posts") //redirects to posts after submit
        console.log("Cover letter Submitted!")
    }

  return (
    <>
      {jobpost.map((jobpost) => (
        <>
          <h1>Currently viewing: </h1>
          <h2 key={jobpost.id}>{jobpost.jobtitle}</h2>
          <p>
            <strong>{jobpost.jobposter}</strong>
            <br></br>
            <br></br>
            {jobpost.jobtitle}
            <br></br>
            {jobpost.jobdesc}
            <br></br> £{jobpost.jobsalary} Per Annum
          </p>
          <div className = "JobApplication">
            <h1>Send a cover letter to job poster</h1>
            <form action = {handleAddCoverletter}>
              <input name = "applicant" placeholder = "Applicant Name" required/>
              <input name = "coverletter" placeholder = "coverletter" className ="longinput" required/>
              <button>Submit Cover Letter</button>
            </form>
          </div>
        </>
      ))}
    </>
  );
}
