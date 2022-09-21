// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import dbConnect from "../../libs/dbConnect";
import User from "../../models/User";
import { hash } from "bcrypt";
dbConnect();
export default async function handler(req, res) {
  const method = req.method;

  if (method !== "POST") {
    res.status(400).json({ error: "Method not allowed" });
  }

  try {
    const { username, password, email, firstName, lastName } = JSON.parse(
      req.body
    );
    const hashedPassword = await hash(password, 12);
    const user = await User.create({
      username: username,
      email: email,
      firstName: firstName,
      lastName: lastName,
      hash: hashedPassword,
    });

    res.status(200).json({ success: true, data: { username: username } });
  } catch (err) {
    res.status(500).json({ success: false, error: err });
  }
}
