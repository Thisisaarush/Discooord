import { currentUser, redirectToSignIn } from "@clerk/nextjs";
import { db } from "./db";

export const initialProfile = async (): Promise<{
  id: string;
  userId: string;
  name: string;
  email: string;
  imageUrl: string;
  createdAt: Date;
  updatedAt: Date;
} | null> => {
  const user = await currentUser();

  if (!user) return redirectToSignIn();

  const profile = await db.profile.findUnique({
    where: {
      userId: user.id,
    },
  });
  if (profile) return profile;

  const newProfile = await db.profile.create({
    data: {
      userId: user.id,
      email: user.emailAddresses[0].emailAddress,
      imageUrl: user.imageUrl,
      name: `${user.firstName} ${user.lastName}`,
    },
  });

  return newProfile;
};
