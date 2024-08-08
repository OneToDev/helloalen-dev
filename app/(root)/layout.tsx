import { Footer } from "../_Components/Footer";
import { Navbar } from "../_Components/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <section>{children}</section>;
}
