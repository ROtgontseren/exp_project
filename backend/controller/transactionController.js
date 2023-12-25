const { sql } = require("../config/pgDb");

const getAllTransaction = async (req, res) => {
  try {
    const data =
      await sql`SELECT * FROM transaction ORDER BY createdat DESC LIMIT 5`;
    res.status(200).json({ message: "success", data });
  } catch (error) {
    toast.error("алдаа гарлаа.");
  }
};

const createTransaction = async (req, res) => {
  try {
    console.log("TRANSACTION-POST");
    const {
      user_id,
      category_id,
      amount,
      transaction_type,
      description,
      name,
      updatedat,
    } = req.body;

    console.log(req.body);

    const data =
      await sql`INSERT INTO transaction(user_id, category_id, name, amount, description, transaction_type, updatedat) VALUES(${user_id}, ${category_id}, ${name}, ${amount}, ${description}, ${transaction_type}, ${updatedat}) RETURNING *`;
    res.status(201).json({ message: "success", transaction: data[0] });
    // res.json({ ss: "" });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: "failed" });
  }
};

module.exports = { createTransaction, getAllTransaction };
