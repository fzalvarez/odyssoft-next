import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function AnnouncementBar() {
  return (
    <div className="border-b bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-2 flex items-center justify-center text-sm gap-2">
        <Badge variant="secondary" className="bg-background/10 text-background border-background/20">
          News
        </Badge>
        <Link href="/enterprise" className="hover:underline underline-offset-4">
          New enterprise offering: security, governance, predictable delivery
        </Link>
      </div>
    </div>
  );
}
