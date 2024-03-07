import JobFilterSidebar from "@/components/JobFilterSidebar";
import H1 from "@/components/ui/h1";
import JobResults from "@/components/JobResults";
import { JobFiltervalues } from "@/lib/validation";
import { Metadata } from "next";

interface PageProps {
  searchParams: {
    query?: string;
    type?: string;
    location?: string;
    remote?: string;
    page?: string;
  };
}

function getTitle({ query, type, location, remote }: JobFiltervalues) {
  const titlePrefix = query
    ? `${query} jobs`
    : type
      ? `${type} developper jobs`
      : remote
        ? "Remote developper jobs"
        : "All Developper jobs";

  const titleSuffix = location ? ` in ${location}` : "";

  return `${titlePrefix}${titleSuffix}`;
}

export function generateMetadata({
  searchParams: { query, type, location, remote },
}: PageProps): Metadata {
  return {
    title: `${getTitle({ query, type, location, remote: remote === "true" })} | Flow Jobs`,
  };
}

export default async function Home({
  searchParams: { query, type, location, remote, page },
}: PageProps) {
  const filterValues: JobFiltervalues = {
    query,
    type,
    location,
    remote: remote === "true",
  };
  return (
    <main className="m-auto my-10 max-w-5xl space-y-10 px-3">
      <div className="space-y-5 text-center">
        <H1>{getTitle(filterValues)}</H1>
        <p className="text-muted-foreground"> Find your dream job.</p>
      </div>
      <section className="flex flex-col gap-4 md:flex-row">
        <JobFilterSidebar defaultValues={filterValues} />
        <JobResults filterValues={filterValues} 
        page={page ? parseInt(page) : undefined}/>
      </section>
    </main>
  );
}
