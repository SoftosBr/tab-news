import database from "../../../../infra/database.js";

async function status(req, res) {
  const result = await database.query("select 1 + 1;");

  res.status(200).json({
    status: "ok",
  });
}

export default status;
