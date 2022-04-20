import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/auth";

//This is how you query.
// In this example:
// we are getting all playlists associated with the user id.

export default validateRoute(async (req, res, user) => {
  const playlist = await prisma.playlist.findMany({
    where: {
      userId: user.userId,
    },
  });

  res.json(playlist);
});
