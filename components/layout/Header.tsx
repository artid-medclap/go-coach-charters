import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";

export function Header() {
  return (
    <header className="sticky top-0 z-50">
      {/* <TopBar /> */}
      <Navbar />
    </header>
  );
}