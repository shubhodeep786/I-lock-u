const express = require('express');
const bodyParser = require('body-parser');
const { Users, Resources, DocumentTransactions, DIDs, Documents } = require('./models');  
require('dotenv').config();

const app = express();
app.use(bodyParser.json());

// CRUD Operations for Resources
app.post('/resources', async (req, res) => {
  try {
    const resource = await Resources.create(req.body);
    res.status(201).json(resource);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/resources', async (req, res) => {
  try {
    const resources = await Resources.findAll();
    res.status(200).json(resources);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/resources/:id', async (req, res) => {
  try {
    const resource = await Resources.findByPk(req.params.id);
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
    const resource = await Resources.findByPk(req.params.id);
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
    const resource = await Resources.findByPk(req.params.id);
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
    const user = await Users.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await Users.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/users/:id', async (req, res) => {
  try {
    const user = await Users.findByPk(req.params.id);
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
    const user = await Users.findByPk(req.params.id);
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
    const user = await Users.findByPk(req.params.id);
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
    const did = await DIDs.create(req.body);
    res.status(201).json(did);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/dids', async (req, res) => {
  try {
    const dids = await DIDs.findAll();
    res.status(200).json(dids);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/dids/:id', async (req, res) => {
  try {
    const did = await DIDs.findByPk(req.params.id);
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
    const did = await DIDs.findByPk(req.params.id);
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
    const did = await DIDs.findByPk(req.params.id);
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

// CRUD Operations for Documents
app.post('/documents', async (req, res) => {
  try {
    const document = await Documents.create(req.body);
    res.status(201).json(document);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/documents', async (req, res) => {
  try {
    const documents = await Documents.findAll();
    res.status(200).json(documents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/documents/:id', async (req, res) => {
  try {
    const document = await Documents.findByPk(req.params.id);
    if (document) {
      res.status(200).json(document);
    } else {
      res.status(404).json({ error: 'Document not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.put('/documents/:id', async (req, res) => {
  try {
    const document = await Documents.findByPk(req.params.id);
    if (document) {
      await document.update(req.body);
      res.status(200).json(document);
    } else {
      res.status(404).json({ error: 'Document not found' });
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.delete('/documents/:id', async (req, res) => {
  try {
    const document = await Documents.findByPk(req.params.id);
    if (document) {
      await document.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Document not found' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// CRUD Operations for DocumentTransactions
app.post('/documenttransactions', async (req, res) => {
  try {
    const transaction = await DocumentTransactions.create(req.body);
    res.status(201).json(transaction);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.get('/documenttransactions', async (req, res) => {
  try {
    const transactions = await DocumentTransactions.findAll();
    res.status(200).json(transactions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/documenttransactions/:id', async (req, res) => {
  try {
    const transaction = await DocumentTransactions.findByPk(req.params.id);
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
    const transaction = await DocumentTransactions.findByPk(req.params.id);
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
    const transaction = await DocumentTransactions.findByPk(req.params.id);
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

const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
