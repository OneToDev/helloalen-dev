import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Helloalen.dev",
  description: "About Helloalen.dev",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
