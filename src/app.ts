import express from "express";
import type { Request, Response } from "express";

const app = express();
const PORT=Number(process.env.PORT)|3000;
app.get("/", (req: Request, res: Response) => {
 res.status(200).json({
  success: true,
  data: { name: "radhe" }
});

});

app.listen(PORT, () => {
  console.log("Server running on http://localhost:3000");
});
