import { Request, Response, NextFunction } from "express";
import { auth as betterAuth } from "../lib/auth";

declare module "express-serve-static-core" {
  interface Request {
    user?: {
      id: string;
      role: string;
    };
  }
}

export const auth = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
<<<<<<< HEAD
    const session = await betterAuth.api.getSession({
      headers: req.headers as Record<string, string>,
    });

    if (!session) {
      res.status(401).json({ message: "Unauthorized" });
      return;
    }

    req.user = {
      id: session.user.id,
      role: (session.user as any).role || "user",
    };
=======
    const decoded = jwt.verify(token, JWT_SECRET) as any ;
    req.user = decoded;
    console.log(decoded)
>>>>>>> MNchanges

    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid session" });
  }
};
