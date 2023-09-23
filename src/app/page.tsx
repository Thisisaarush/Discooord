import { ModeToggle } from "@/components/ModeToggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <div>Hello</div>
      <UserButton afterSignOutUrl="/" />
      <ModeToggle />
    </main>
  );
}
