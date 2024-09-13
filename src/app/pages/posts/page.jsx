import pg from "pg";

export default async function PostsPage() {
  const db = new pg.Pool({
    connectionString: process.env.NEXT_POSTGRES, //states connection to db
  });

app.get("/jobstable", async function (request, response){
  const jobposts = (await db.query(`SELECT * FROM jobstable`)).rows //fetches rows from relevant db table
  console.log(jobposts);
});

app.post("/jobstable", async function (request, response){
  const employername = request.body.employername;
  const jobtitle = request.body.jobtitle;
  const annualsalary = request.body.annualsalary;
  const coverletter = request.body.coverletter;
  const dateposted = request.body.dateposted;
  await db.query(`INSERT INTO jobstable (employername, jobtitle, annualsalary, coverletter, dateposted) VALUES ($1, $2, $3, $4, $5)`,
    [employername, jobtitle, annualsalary, coverletter, dateposted]
  );
  response.json("posted to endpoint")
});

  return (
    <>
      <h1>Here are the currently available jobs</h1>
      <ul>
        {jobposts.map((jobposts) => (
          <li key={jobposts.employername}>{jobposts.jobtitle}</li>
        ))}
      </ul>
    </>
  );
}
