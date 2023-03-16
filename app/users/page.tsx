import getAllUsers from "@/lib/getAllUsers";
import Link from "next/link";

export const metadata = {
  title: "users",
};

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();
  const users = await usersData;
  return (
    <div>
      <h1>
        <Link href="/">Back to Home</Link>
      </h1>
      <div>
        {users.map((user) => {
          return (
            <p key={user.id}>
              <Link href={`/users/${user.id}`}>{user.name}</Link>
            </p>
          );
        })}
      </div>
    </div>
  );
}
