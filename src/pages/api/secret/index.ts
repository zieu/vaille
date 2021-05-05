import { getSession } from "next-auth/client";

export default async (req: any, res: any) => {
  const session = await getSession({ req });

  if (session) {
    res.send({
      content: "Welcome to the secret page",
    });
  } else {
    res.send({
      error: "You need to be signed in.",
    });
  }
};