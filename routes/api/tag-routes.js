const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // be sure to include its associated Product data

    Tag.findAll().then((tagData) => {
      res.json(tagData);
    });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne(
    {
      where: { 
        id: req.params.id
      },
    }
  ).then((tagData) => {
    res.json(tagData);
  });
});

router.post('/', (req, res) => {
    Tag.create({
      tag_name: req.body.tag_name
    })
      .then((newTag) => {
        // Send the newly created row as a JSON object
        res.json(newTag);
      })
      .catch((err) => {
        res.json(err);
      });
});

router.put('/', (req, res) => {
    // Calls the update method on the Tag model
    Tag.update(
      {
        // The field you can update and the data attached to the request body.
        tag_name: req.body.tag_name,
      },
      {
        // Gets the tag based on the id given in the request parameters
        where: {
          id: req.body.id,
        },
      }
    )
      .then((updatedTag) => {
        // Sends the updated tag as a json response
        res.json(updatedTag);
      })
      .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  // Looks for the Tag based on id given in the request parameters and deletes the instance from the database
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then((deletedTag) => {
    res.json(deletedTag);
  })
  .catch((err) => res.json(err));
});

module.exports = router;
