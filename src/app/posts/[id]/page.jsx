import { db } from "@/utils/utilities.js";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default async function PostPage({ params }) {
  console.log(params);
  const jobpost = (
    await db.query(`SELECT * FROM jobstable WHERE id = ${params.id};`)
  ).rows;

  async function handleAddCoverletter(formData) {
    "use server";

    const applicant = formData.get("applicant");
    const coverletter = formData.get("coverletter");

    await db.query(
      "INSERT INTO applicationstable (applicant, coverletter) VALUES ($1, $2)",
      [applicant, coverletter]
    );
    revalidatePath("/posts"); //revalidates page to ensure updates are shown
    redirect("/posts"); //redirects to posts after submit
    console.log("Cover letter Submitted!");
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
          <div className="JobApplication">
            <h1></h1>
            <form action={handleAddCoverletter}>
              <input name="applicant" placeholder="Applicant Name" />
              <input name="coverletter" placeholder="coverletter" />
              <button>Submit Details</button>
            </form>
          </div>
        </>
      ))}
    </>
  );
}
