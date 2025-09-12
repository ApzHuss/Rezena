import Navbar from "~/components/Navbar";

export function meta() {
  return [
    { title: "Rezena" },
    { name: "description", content: "Smart feedback for your dream job!" },
  ];
}

export default function Home() {
  const resumes = [];
  const loadingResumes = false;

  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />

      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track Your Applications & Resume Ratings</h1>
          {!loadingResumes && resumes?.length === 0 ? (
            <h2>No resumes found. Upload your first resume to get feedback.</h2>
          ) : (
            <h2>Review your submissions and check AI-powered feedback.</h2>
          )}
        </div>
      </section>
    </main>
  );
}
