import { NextApiRequest, NextApiResponse } from "next";
import { fakeAPIResponse } from "../../utils/";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  console.log()
  res.status(200).json(fakeAPIResponse);
};

export default handler;
