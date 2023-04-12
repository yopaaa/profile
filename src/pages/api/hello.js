import Visitors from "../../controllers/Visitors";
import { nanoid } from "nanoid";
import parser from "ua-parser-js";

export default async function handler(req, res) {
  const visitor = parser(req.headers["user-agent"]);
  const ipAddress =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress;
  visitor._id = nanoid();
  visitor.visitor = {};
  visitor.visitor.ipAddress = ipAddress;

  Visitors.insertOne(visitor)
  console.log(await Visitors.Db.find());
  // console.log(Visitors);
  

  res.status(200).json(visitor);
}
