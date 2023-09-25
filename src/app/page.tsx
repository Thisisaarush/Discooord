import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import { initialProfile } from "@/lib/initial-profile";
import { InitialModal } from "@/components/initial-modal";

export default async function Home() {
  const profile = await initialProfile();
  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile?.id,
        },
      },
    },
  });

  if (server) return redirect(`/servers/${server.id}`);

  return <InitialModal name={profile?.name || profile?.email} />;
}
