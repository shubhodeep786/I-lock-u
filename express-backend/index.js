import express from "express";
import process from "process";
import { Pool } from "pg";
import { json } from "body-parser";
import { config } from "dotenv";
const app = express();
const port = 3000;
config();
// PostgreSQL connection configuration
/* const pool = new Pool({
  user: "your_username",
  host: "localhost",
  database: "your_database_name",
  password: "your_password",
  port: 5432,
});
 */
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

console.log("DB_USER:", process.env.DB_USER);
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD);
console.log("DB_PORT:", process.env.DB_PORT);

// Middleware
app.use(json());

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// CRUD operations for Users

// Create a new user
app.post("/users", async (req, res) => {
  try {
    const {
      name,
      email,
      phoneNumber,
      loginPIN,
      dateOfBirth,
      aadhaarNumber,
      panNumber,
      userImage,
    } = req.body;
    const query =
      "INSERT INTO users (name, email, phone_number, login_pin, date_of_birth, aadhaar_number, pan_number, user_image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *";
    const values = [
      name,
      email,
      phoneNumber,
      loginPIN,
      dateOfBirth,
      aadhaarNumber,
      panNumber,
      userImage,
    ];
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating user", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Read all users
app.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching users", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update a user
app.put("/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const {
      name,
      email,
      phoneNumber,
      loginPIN,
      dateOfBirth,
      aadhaarNumber,
      panNumber,
      userImage,
    } = req.body;
    const query =
      "UPDATE users SET name=$1, email=$2, phone_number=$3, login_pin=$4, date_of_birth=$5, aadhaar_number=$6, pan_number=$7, user_image=$8 WHERE user_id=$9 RETURNING *";
    const values = [
      name,
      email,
      phoneNumber,
      loginPIN,
      dateOfBirth,
      aadhaarNumber,
      panNumber,
      userImage,
      userId,
    ];
    const result = await pool.query(query, values);
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error updating user", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete a user
app.delete("/users/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const result = await pool.query("DELETE FROM users WHERE user_id=$1", [
      userId,
    ]);
    res.json({ message: "User deleted successfully", result });
  } catch (error) {
    console.error("Error deleting user", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Create a new DID
app.post("/dids", async (req, res) => {
  try {
    const { id, controller, didDocument } = req.body;
    const query =
      "INSERT INTO dids (id, controller, did_document, created, updated) VALUES ($1, $2, $3, NOW(), NOW()) RETURNING *";
    const values = [id, controller, didDocument];
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating DID", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Read all DIDs
app.get("/dids", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM dids");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching DIDs", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update a DID
app.put("/dids/:id", async (req, res) => {
  try {
    const didId = req.params.id;
    const { controller, didDocument } = req.body;
    const query =
      "UPDATE dids SET controller=$1, did_document=$2, updated=NOW() WHERE id=$3 RETURNING *";
    const values = [controller, didDocument, didId];
    const result = await pool.query(query, values);
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error updating DID", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete a DID
app.delete("/dids/:id", async (req, res) => {
  try {
    const didId = req.params.id;
    const result = await pool.query("DELETE FROM dids WHERE id=$1", [didId]);
    res.json({ message: "DID deleted successfully", result });
  } catch (error) {
    console.error("Error deleting DID", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// CRUD operations for Resources

// Create a new resource
app.post("/resources", async (req, res) => {
  try {
    const { resourceId, didId, payload } = req.body;
    const query =
      "INSERT INTO resources (resource_id, did_id, payload) VALUES ($1, $2, $3) RETURNING *";
    const values = [resourceId, didId, payload];
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating resource", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Read all resources
app.get("/resources", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM resources");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching resources", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update a resource
app.put("/resources/:id", async (req, res) => {
  try {
    const resourceId = req.params.id;
    const { didId, payload } = req.body;
    const query =
      "UPDATE resources SET did_id=$1, payload=$2 WHERE resource_id=$3 RETURNING *";
    const values = [didId, payload, resourceId];
    const result = await pool.query(query, values);
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error updating resource", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete a resource
app.delete("/resources/:id", async (req, res) => {
  try {
    const resourceId = req.params.id;
    const result = await pool.query(
      "DELETE FROM resources WHERE resource_id=$1",
      [resourceId]
    );
    res.json({ message: "Resource deleted successfully", result });
  } catch (error) {
    console.error("Error deleting resource", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
// CRUD operations for Documents

// Create a new document
app.post("/documents", async (req, res) => {
  try {
    const { ownerId, content } = req.body;
    const query =
      "INSERT INTO documents (owner_id, content, created, updated) VALUES ($1, $2, NOW(), NOW()) RETURNING *";
    const values = [ownerId, content];
    const result = await pool.query(query, values);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Error creating document", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Read all documents
app.get("/documents", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM documents");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching documents", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Update a document
app.put("/documents/:id", async (req, res) => {
  try {
    const documentId = req.params.id;
    const { content } = req.body;
    const query =
      "UPDATE documents SET content=$1, updated=NOW() WHERE document_id=$2 RETURNING *";
    const values = [content, documentId];
    const result = await pool.query(query, values);
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Error updating document", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Delete a document
app.delete("/documents/:id", async (req, res) => {
  try {
    const documentId = req.params.id;
    const result = await pool.query(
      "DELETE FROM documents WHERE document_id=$1",
      [documentId]
    );
    res.json({ message: "Document deleted successfully", result });
  } catch (error) {
    console.error("Error deleting document", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
