import getUser from "@/lib/getUser";
import getUserPosts from "@/lib/getUserPosts";
import { Suspense } from "react";
import UserPosts from "./components/UserPosts";

type Params = {
  params: {
    userId: string;
  };
};

export async function generateMetaData({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const user: User = await userData;

  return {
    title: user.name,
  };
}

export default async function UserPage({ params: { userId } }: Params) {
  const userData: Promise<User> = getUser(userId);
  const userPostsData: Promise<Post[]> = getUserPosts(userId);

  const user = await userData;
  return (
    <>
      <h2>{user.name}</h2>
      <br />
      <Suspense fallback={<h2>loading...</h2>}>
        {/* @ts-expect-error Async Server Component */}
        <UserPosts promise={userPostsData} />
      </Suspense>
    </>
  );
}
