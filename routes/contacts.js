import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Contacts route');
});

export default router;


// Get all contacts
router.get('/all', (req, res) => {
    res.send('All contacts');
  });
  
  // Get a contact by id
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send('Contact by id ' + id);
  });
  
  // to-do: add post, put, and delete routers

  router.post('/:create', (req, res) => {
    const id = req.params.id;
    res.send('Create Contact ' + id);
  });

  router.put('/:update', (req, res) => {
    const id = req.params.id;
    res.send('Update Contact ' + id);
  });

  router.delete('/:delete', (req, res) => {
    const id = req.params.id;
    res.send('Delete Contact' + id);
  });

  
  
