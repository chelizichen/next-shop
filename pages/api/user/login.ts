// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { user, validate } from "../../../types/user";
import {conn} from "../../../utils/db";
import Ret from "../../../utils/ret";

async function Login(data: user & validate) {

  return new Promise((resolve, reject) => {
    conn.getConnection((err,connect)=> {
      connect.query(
        "select * from user where us_name = ? and us_password = ?",
        [data.username, data.password],
        (err, result) => {
          if (err) reject(err);
          resolve(result);
        }
      );
      connect.release()
  
    })
    
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { body } = req;
  const data = await Login(body);

  res.status(200).json(Ret.success(data));
}
