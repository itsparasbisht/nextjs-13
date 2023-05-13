import { Suspense } from "react";
import Link from "next/link";
import Repo from "@/app/components/Repo";
import RepoDirs from "@/app/components/RepoDirs";

const RepoPage = ({ params: { name } }: any) => {
  return (
    <div className="card">
      <Link href="/code/repos" className="btn btn-back">
        Back To Repositories
      </Link>
      <Suspense fallback={<div>Loading repo...</div>}>
        {/* @ts-expect-error Server Component */}
        <Repo name={name} />
      </Suspense>
      <Suspense fallback={<div>Loading directories...</div>}>
        {/* @ts-expect-error Server Component */}
        <RepoDirs name={name} />
      </Suspense>
    </div>
  );
};
export default RepoPage;
