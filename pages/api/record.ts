import prisma from "../../lib/prisma";
import { validateRoute } from "../../lib/auth";
import { recordData } from "../../prisma/seederData";

// export default validateRoute(async (req, res, user) => {
//     const record = await prisma.record.findMany({
//         where: {
//             partsHouseId: h
//         }
//     })
// } )