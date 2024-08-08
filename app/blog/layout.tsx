import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Find a project that interests you!",
  description: "Find a project that interests you!",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section className="max-h-screen">
      {children}
    </section>
  );
}
