import { Metadata } from "next";
import { Footer } from "../_Components/Footer";

export const metadata: Metadata = {
  title: "Get in Touch!",
  description: "Get in Touch!",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
