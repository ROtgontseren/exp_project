const { sql } = require("../config/pgDb");

const getAllCategory = async (req, res) => {
  try {
    const categories = await sql`SELECT * FROM categories`;

    res.status(200).json({ message: "success", categories });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: "failed" });
  }
};

const createCategory = async (req, res) => {
  try {
    const { name, description, category_image, category_color } = req.body;
    const data =
      await sql`INSERT INTO categories( name, description, category_image, category_color) VALUES(${name}, ${description}, ${category_image}, ${category_color})`;
    res.status(201).json({ message: "success", transaction: data[0] });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: "failed" });
  }
};

module.exports = { getAllCategory, createCategory };
