const express = require('express');
const bodyParser = require('body-parser');
const { User } = require('./models/user'); 
const { Resource } = require('./models/resource'); 
const { DocumentTransaction } = require('./models');  l
const { DID } = require('./models/did');  
const {DocumentTransaction} = require('./models/documenttransaction');

const app = express();
app.use(bodyParser.json());

// CRUD Operations for Resources
app.post('/resources', async (req, res) => {
  try {
    /**
     * Represents a newly created resource.
     * @typedef {object} Resource
     * @property {string} name - The name of the resource.
     * @property {number} quantity - The quantity of the resource.
     */
    const resource = await Resource.create(req.body);
    res.status(201).json(resource);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/resources', async (req, res) => {
  try {
    /**
     * Represents a collection of resources.
     * @type {Array<Resource>}
     */
    const resources = await Resource.findAll();
    res.status(200).json(resources);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/resources/:id', async (req, res) => {
  try {
    /**
     * Represents a resource object.
     * @typedef {Object} Resource
     * @property {number} id - The ID of the resource.
     * @property {string} name - The name of the resource.
     * @property {string} description - The description of the resource.
     */

    /**
     * Retrieves a resource by its ID.
     * @param {number} id - The ID of the resource to retrieve.
     * @returns {Promise<Resource>} A promise that resolves to the retrieved resource.
     */
    const resource = await Resource.findByPk(req.params.id);
    if (resource) {
      res.status(200).json(resource);
    } else {
      res.status(404).json({ error: 'Resource not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/resources/:id', async (req, res) => {
  try {
    /**
     * Represents a resource.
     * @typedef {Object} Resource
     * @property {number} id - The ID of the resource.
     * @property {string} name - The name of the resource.
     * @property {string} description - The description of the resource.
     */

    /**
     * Find a resource by its ID.
     * @param {number} id - The ID of the resource to find.
     * @returns {Promise<Resource>} A promise that resolves to the found resource.
     */
    const resource = await Resource.findByPk(req.params.id);
    if (resource) {
      await resource.update(req.body);
      res.status(200).json(resource);
    } else {
      res.status(404).json({ error: 'Resource not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/resources/:id', async (req, res) => {
  try {
    /**
     * Represents a resource.
     * @typedef {Object} Resource
     * @property {number} id - The ID of the resource.
     * @property {string} name - The name of the resource.
     * @property {string} description - The description of the resource.
     */

    /**
     * Fetches a resource by its ID.
     * @param {number} id - The ID of the resource to fetch.
     * @returns {Promise<Resource>} A promise that resolves to the fetched resource.
     */
    const resource = await Resource.findByPk(req.params.id);
    if (resource) {
      await resource.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Resource not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// CRUD Operations for Users
app.post('/users', async (req, res) => {
  try {
    /**
     * Represents a newly created user.
     * @typedef {Object} User
     * @property {string} name - The name of the user.
     * @property {string} email - The email address of the user.
     * @property {string} password - The password of the user.
     */
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/users', async (req, res) => {
  try {
    /**
     * Fetches all users from the database.
     *
     * @returns {Array<User>} An array of user objects.
     */
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/users/:id', async (req, res) => {
  try {
    /**
     * Represents a user object.
     * @typedef {Object} User
     * @property {number} id - The ID of the user.
     * @property {string} name - The name of the user.
     * @property {string} email - The email of the user.
     */
    const user = await User.findByPk(req.params.id);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/users/:id', async (req, res) => {
  try {
    /**
     * Represents a user object.
     * @typedef {Object} User
     * @property {number} id - The ID of the user.
     * @property {string} name - The name of the user.
     * @property {string} email - The email of the user.
     */
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.update(req.body);
      res.status(200).json(user);
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/users/:id', async (req, res) => {
  try {
    /**
     * Represents a user object.
     * @typedef {Object} User
     * @property {number} id - The ID of the user.
     * @property {string} name - The name of the user.
     * @property {string} email - The email of the user.
     */
    const user = await User.findByPk(req.params.id);
    if (user) {
      await user.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'User not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// CRUD Operations for DIDs
app.post('/dids', async (req, res) => {
  try {
    /**
     * Represents the created DID.
     * @type {DID}
     */
    const did = await DID.create(req.body);
    res.status(201).json(did);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/dids', async (req, res) => {
  try {
    /**
     * Array of DID objects.
     * @type {Array<DID>}
     */
    const dids = await DID.findAll();
    res.status(200).json(dids);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/dids/:id', async (req, res) => {
  try {
    /**
     * Represents a DID (Decentralized Identifier).
     * @typedef {Object} DID
     * @property {number} id - The ID of the DID.
     * @property {string} value - The value of the DID.
     */
    const did = await DID.findByPk(req.params.id);
    if (did) {
      res.status(200).json(did);
    } else {
      res.status(404).json({ error: 'DID not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/dids/:id', async (req, res) => {
  try {
    /**
     * Represents a DID (Decentralized Identifier).
     * @typedef {Object} DID
     * @property {number} id - The ID of the DID.
     * @property {string} value - The value of the DID.
     */
    const did = await DID.findByPk(req.params.id);
    if (did) {
      await did.update(req.body);
      res.status(200).json(did);
    } else {
      res.status(404).json({ error: 'DID not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/dids/:id', async (req, res) => {
  try {
    /**
     * Represents a DID (Decentralized Identifier).
     * @typedef {Object} DID
     * @property {number} id - The ID of the DID.
     * @property {string} value - The value of the DID.
     */
    const did = await DID.findByPk(req.params.id);
    if (did) {
      await did.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'DID not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// CRUD Operations for DocumentTransactions
app.post('/documenttransactions', async (req, res) => {
  try {
    /**
     * Represents a document transaction.
     * @typedef {Object} DocumentTransaction
     * @property {string} id - The ID of the transaction.
     * @property {string} body - The body of the transaction.
     * @property {Date} createdAt - The creation date of the transaction.
     */

    /**
     * Creates a new document transaction.
     * @param {Object} body - The body of the transaction.
     * @returns {Promise<DocumentTransaction>} A promise that resolves to the created transaction.
     */
    const transaction = await DocumentTransaction.create(req.body);
    res.status(201).json(transaction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/documenttransactions', async (req, res) => {
  try {
    /**
     * Represents a collection of document transactions.
     * @type {Array<DocumentTransaction>}
     */
    const transactions = await DocumentTransaction.findAll();
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/documenttransactions/:id', async (req, res) => {
  try {
    /**
     * Represents a document transaction.
     * @typedef {Object} DocumentTransaction
     * @property {number} id - The ID of the transaction.
     * @property {string} name - The name of the transaction.
     * @property {string} description - The description of the transaction.
     */

    /**
     * Retrieves a document transaction by its ID.
     * @param {number} id - The ID of the transaction to retrieve.
     * @returns {Promise<DocumentTransaction|null>} A promise that resolves to the retrieved transaction, or null if not found.
     */
    const transaction = await DocumentTransaction.findByPk(req.params.id);
    if (transaction) {
      res.status(200).json(transaction);
    } else {
      res.status(404).json({ error: 'DocumentTransaction not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/documenttransactions/:id', async (req, res) => {
  try {
    /**
     * Represents a document transaction.
     * @typedef {Object} DocumentTransaction
     * @property {number} id - The ID of the transaction.
     * @property {string} name - The name of the transaction.
     * @property {string} description - The description of the transaction.
     */

    /**
     * Retrieves a document transaction by its ID.
     * @param {number} id - The ID of the transaction to retrieve.
     * @returns {Promise<DocumentTransaction|null>} A promise that resolves to the retrieved transaction, or null if not found.
     */
    const transaction = await DocumentTransaction.findByPk(req.params.id);
    if (transaction) {
      await transaction.update(req.body);
      res.status(200).json(transaction);
    } else {
      res.status(404).json({ error: 'DocumentTransaction not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/documenttransactions/:id', async (req, res) => {
  try {
    /**
     * Represents a document transaction.
     * @typedef {Object} DocumentTransaction
     * @property {number} id - The ID of the transaction.
     * @property {string} name - The name of the transaction.
     * @property {string} description - The description of the transaction.
     */

    /**
     * Retrieves a document transaction by its ID.
     * @param {number} id - The ID of the transaction to retrieve.
     * @returns {Promise<DocumentTransaction|null>} A promise that resolves to the retrieved transaction, or null if not found.
     */
    const transaction = await DocumentTransaction.findByPk(req.params.id);
    if (transaction) {
      await transaction.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'DocumentTransaction not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
