import { db } from "@/utils/utilities.js";

export default async function ApplicationsPage() {
  const applications = (await db.query(`SELECT * FROM applicationstable`)).rows;

  console.log(applications);

  return (
    <>
      <h1>See Job applications below</h1>
      <ul>
        {applications.map((applications) => (
          <li key={applications.id}>
            {applications.applicant}&nbsp;
            {applications.coverletter}&nbsp;
          </li>
        ))}
      </ul>
    </>
  );
}
