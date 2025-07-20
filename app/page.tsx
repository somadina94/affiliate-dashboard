import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex items-center justify-center h-screen">
      <Button asChild size="lg">
        <Link href="/dashboard">VIEW DASHBOARD</Link>
      </Button>
    </div>
  );
}
