import { db } from "@/utils/utilities.js";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function JobPost() {

    async function handleAddJob(formData) {
        "use server";

        const jobposter = formData.get("jobposter");
        const jobtitle = formData.get("jobtitle");
        const jobdesc = formData.get("jobdesc");
        const jobsalary = formData.get("jobsalary");

        await db.query('INSERT INTO jobstable (jobposter, jobtitle, jobdesc, jobsalary) VALUES ($1, $2, $3, $4)',
            [jobposter, jobtitle, jobdesc, jobsalary]
         );
        revalidatePath ("/posts") //revalidates page to ensure updates are shown
        redirect ("/posts") //redirects to posts after submit

        console.log("Job Submitted!")
    }

    return (
      <div className="JobPost"> 
        <h1>Post a new job</h1>
        <form action = {handleAddJob}>
            <input name = "jobposter" placeholder = "Employer Name"/>
            <input name = "jobtitle" placeholder = "Job Title"/>
            <input name = "jobdesc" placeholder = "Job Description" className = "longinput"/>
            <input name = "jobsalary" placeholder = "Job Salary" type = "number"/>
            <button>Post Job</button>
        </form>
      </div>
    );
    //ensure all form input names correspond to the db query input
  }