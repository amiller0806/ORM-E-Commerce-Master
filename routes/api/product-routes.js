const router = require('express').Router();
const {
  Product,
  Category,
  Tag,
  ProductTag
} = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', (req, res) => {
  // find all products
  // be sure to include its associated Category and Tag data

  Product.findAll({
      include: [{
          model: Tag,
          through: ProductTag
        },
        {
          model: Category
        }
      ]
    })
    .then(products => res.json(products))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one product
router.get('/:id', (req, res) => {
  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
  Product.findOne({
      where: {
        id: req.params.id
      },

      include: [{
          model: Tag,
          through: ProductTag
        },
        {
          model: Category
        }
      ]
    })
    .then(dbTagData => res.json(dbTagData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// create new product
router.post('/', (req, res) => {
  /* sample req.body (JSON Body) should look like this...
    {
      product_name: "guitar",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  Product.create(req.body)
    .then((product) => {
      // if there are product tags =>  create pairings to bulk create in  ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if there are no product tags, just respond with:
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update product
router.put('/:id', (req, res) => {
  // update product data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then(dbProductData => {
      // find all associated tags from ProductTag
      if (req.body.tagIds && req.body.tagIds.length) {
        const productTags = ProductTag.findAll({
          where: {
            product_id: req.params.id
          }
        });
        // get list of current tag_ids
        const productTagIds = productTags.map(({
          tag_id
        }) => tag_id);
        // create a filtered list of new tag_ids
        const newProductTags = req.body.tagIds
          .filter((tag_id) => !productTagIds.includes(tag_id))
          .map((tag_id) => {
            return {
              product_id: req.params.id,
              tag_id,
            };
          });
        // figure out which tags to remove
        const productTagsToRemove = productTags
          .filter(({
            tag_id
          }) => !req.body.tagIds.includes(tag_id))
          .map(({
            id
          }) => id);

        // run both actions: removing the tags for product selected & creating new tags
        return Promise.all([
          ProductTag.destroy({
            where: {
              id: productTagsToRemove
            }
          }),
          ProductTag.bulkCreate(newProductTags),
        ]);
      
      }
      return res.json(dbProductData);
    })
    .catch(err => {
      // console.log(err);
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // delete one product by its `id` value

  Product.destroy({
      where: {
        id: req.params.id
      },

    })

    .then(dbProductData => res.json(dbProductData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;