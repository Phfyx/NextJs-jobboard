import JobListItem from "@/components/JobListItem";
import JobFilterSidebar from "@/components/JobFilterSidebar";
import prisma from "@/lib/prisma";
import H1 from "@/components/ui/h1";
import JobResults from "@/components/JobResults";
import { JobFiltervalues } from "@/lib/validation";

interface PageProps {
  searchParams:{
    query?: string;
    type?: string;
    location?: string;
    remote?: string;
  }
}

export default async function Home({searchParams: {query, type, location, remote}}: PageProps) {
  const filterValues: JobFiltervalues = {
    query,
    type,
    location,
    remote: remote === "true",
  }
  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-y-5 text-center">
        <H1>
          Developper Jobs
        </H1>
        <p className="text-muted-foreground"> Find your dream job.</p>
      </div>
      <section className="flex flex-col gap-4 md:flex-row">
        <JobFilterSidebar defaultValues={filterValues}/>
        <JobResults filterValues={filterValues}/>
      </section>
    </main>
  );
}
