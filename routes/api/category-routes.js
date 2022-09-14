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
    id: req.params.id,
    category_id: req.params.category_id,
  })
    .then((newCategory) => {
      console.log('test');
      // Send the newly created row as a JSON object
      res.json(newCategory);
    })
    .catch((err) => {
      res.json(err);
    });
});

// router.put('/:id', (req, res) => {
//   // update a category by its `id` value
//   Product.update(req.body, {
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((product) => {
//       // find all associated tags from ProductTag
//       return ProductTag.findAll({ where: { product_id: req.params.id } });
//     })
//     .then((productTags) => {
//       // get list of current tag_ids
//       const productTagIds = productTags.map(({ tag_id }) => tag_id);
//       // create filtered list of new tag_ids
//       const newProductTags = req.body.tagIds
//         .filter((tag_id) => !productTagIds.includes(tag_id))
//         .map((tag_id) => {
//           return {
//             product_id: req.params.id,
//             tag_id,
//           };
//         });
//       // figure out which ones to remove
//       const productTagsToRemove = productTags
//         .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
//         .map(({ id }) => id);

//       // run both actions
//       return Promise.all([
//         ProductTag.destroy({ where: { id: productTagsToRemove } }),
//         ProductTag.bulkCreate(newProductTags),
//       ]);
//     })
//     .then((updatedProductTags) => res.json(updatedProductTags))
//     .catch((err) => {
//       // console.log(err);
//       res.status(400).json(err);
//     });
// });

router.delete('/:id', (req, res) => {
  // Looks for the Category based on id given in the request parameters and deletes the instance from the database
  //console.log(req.params.id);
  Category.destroy({
    where: {
      id: req.params.id
    },
  })
    .then((deletedBook) => {
      res.json(deletedBook);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
/*  // Calls the update method on the Book model
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
    .catch((err) => res.json(err));*/