import React from "react";

export const metadata = {
  title: "about",
  description: "this is the about page",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>About nav</nav>
      {children}
    </>
  );
}
