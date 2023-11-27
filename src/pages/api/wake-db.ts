import { NextApiRequest, NextApiResponse } from "next";
import { db } from "@/lib/db";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const wakeDbApiSecret = req.headers["x-wake-db-api-secret"];
  if (wakeDbApiSecret !== process.env.WAKE_DB_API_SECRET) {
    return res.status(403).json({ error: "Unauthorized" });
  }

  const current = await db.wakeDb.findFirst();

  await db.wakeDb.update({
    where: {
      id: current?.id,
    },
    data: {
      wakeCount: current?.wakeCount && current?.wakeCount + 1,
    },
  });

  res.status(200).json({
    DatabaseWakeCount: "Database Woke Up",
  });
}
