import React from "react";
import Navbar from "../components/Navbar";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>): React.ReactElement {
  return (
    <main className="font-work-sans">
      <Navbar />
      {children}
    </main>
  );
}
