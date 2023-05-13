import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to your CodeSpace</h1>
      <ul>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;
