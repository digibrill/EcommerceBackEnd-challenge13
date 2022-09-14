const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data
    // Get all books from the book table
    Product.findAll().then((productData) => {
      res.json(productData);
    });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Product.findOne(
    {
      // Gets the book based on the isbn given in the request parameters
      where: { 
        id: req.params.id
      },
    }
  ).then((productData) => {
    res.json(productData);
  });
});

router.post('/', (req, res) => {
/*    Category.create({
      title: req.body.title,
      author: req.body.author,
      is_paperback: true
    })
      .then((newCategory) => {
        // Send the newly created row as a JSON object
        res.json(newCategory);
      })
      .catch((err) => {
        res.json(err);
      });*/
});

router.put('/:id', (req, res) => {
    // Calls the update method on the Book model
    Book.update(
      {
        // All the fields you can update and the data attached to the request body.
        title: req.body.title,
        author: req.body.author,
        isbn: req.body.isbn,
        pages: req.body.pages,
        edition: req.body.edition,
        is_paperback: req.body.is_paperback,
      },
      {
        // Gets the books based on the isbn given in the request parameters
        where: {
          isbn: req.params.isbn,
        },
      }
    )
      .then((updatedBook) => {
        // Sends the updated book as a json response
        res.json(updatedBook);
      })
      .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // Looks for the books based on isbn given in the request parameters and deletes the instance from the database
  Tag.destroy({
    where: {
      isbn: req.params.isbn,
    },
  })
  .then((deletedBook) => {
    res.json(deletedBook);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
