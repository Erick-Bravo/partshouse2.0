import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/auth";

export default validateRoute(async (req, res, user) => {
  const parthouse = await prisma.partshouse.findMany({
    where: {
      userId: user.id,
    },
  });

  res.json(parthouse);
});
