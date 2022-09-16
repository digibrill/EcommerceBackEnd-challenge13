const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  //get all
  Category.findAll().then((productData) => {
    res.json(productData);
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
    Category.findOne(
      {
        where: { 
          id: req.params.id 
        },
      }
    ).then((productData) => {
      res.json(productData);
    });
});

router.post('/', (req, res) => {
  Category.create({
    id: req.body.id,
    category_name: req.body.category_name,
  })
    .then((newCategory) => {
      //console.log('test');
      // Send the newly created row as a JSON object
      res.json(newCategory);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.delete('/:id', (req, res) => {
  // Looks for the Category based on id given in the request parameters and deletes the instance from the database
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((deletedCat) => {
     res.json(deletedCat);
  })
    .catch((err) => res.json(err));
});


// Calls the update method on the Category model
router.put('/', (req, res) => {
  Category.update(
    {
      // All the fields you can update and the data attached to the request body.
      category_name: req.body.category_name,
    },
    {
      // Gets the categories based on the id given in the request parameters
      where: {
        id: req.body.id,
      },
    }
  )
    .then((updatedCat) => {
      // Sends the updated category as a json response
      res.json(updatedCat);
    })
    .catch((err) => res.json(err));
});

module.exports = router;