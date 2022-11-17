// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { user, validate } from "../../../types/user";
import { getConn, getRedis } from "../../../utils/db";
import Ret from "../../../utils/ret";

async function getData(data: user & Pick<validate, "code">) {
  const redis = await getRedis();
  redis.get(`code:${data.code}`);
  const db = await getConn();
  return new Promise((resolve, reject) => {
    db.query(
      "select * from user where username = ? and password = ?",
      [data.username, data.password],
      (err, result) => {
        if (err) reject(err);
        resolve(result);
      }
    );
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req;
  const data = await getData(body);

  res.status(200).json(Ret.success(data));
}
