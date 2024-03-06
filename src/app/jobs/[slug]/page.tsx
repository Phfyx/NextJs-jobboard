import { cache } from "react"
import prisma from "@/lib/prisma"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import JobPage from "@/components/JobPage"

interface PageProps {
    params: {
        slug: string
    }
}

const getJob = cache(async (slug:string) => {
    const job = await prisma.job.findUnique({
        where: {slug}
    })

    if (!job) notFound();

    return job;
})

export async function generateMetadata({
    params: {slug},
}: PageProps): Promise<Metadata>{
    const job = await getJob(slug);

    return {
        title: job.title,
    }
}


export default async function Page({params: {slug}}: PageProps) {
    const job = await getJob(slug);

    return <main className="max-w-5xl m-auto my-10 flex flex-col md:flex-row items-center gap-5 md:items-start px-3">
        <JobPage job={job}/>
    </main>
}