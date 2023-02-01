# ORM E-Commerce 

  ## Table of Contents

  * [Description](#description)

  * [License](#license)

  * [Installation](#installation)

  * [Contribution](#contribution)

  * [Usage](#usage)

  * [Tests](#tests)

  * [Github](#github)

  * [Email](#email)

  ### Description 
 An application that uses Object Relational Mapping and employs Back end for an e-commerce site. This application takes a working Express.js API and configures it to use Sequelize to interact with a MySQL database.


  ### License 
  ![GitHub license](https://img.shields.io/badge/license-MIT-turquoise.svg)
[For Further Information]( https://shields.io/category/license)

  ### Installation

  In the terminal: 
 1. Ensure you are in the correct folder, “ORM-E-Commerce” 
 2. Type “npm i” or “npm install” in the terminal3
 
  ### Contribution
  Ariel Miller 

  ### Usage
1. Ensure you are in the correct folder
1. Install by typing “npm i” or “npm install”

2. Run mysql with "mysql -u root -p", enter password
3. Type "source db/schema.sql"
4. Type “npm run seed" 
5. Type "npm start"

3. Open Insomnia and run the following requests for Categories, Tags, and Products:

- POST Requests
a. a.	POST: Create New Product:  http://localhost:3001/api/products/
JSON Body example: {
      "product_name": "Guitar",
      "price": 1,000.00,
      "stock": 3,
      "tagIds": [1, 2, 3, 4]
    }
b. Create New Tag

http://localhost:3001/api/tags
JSON Body example:

{
	"tag_name": "skincare"
}

c. Create New Category
 http://localhost:3001/api/categories 
JSON Body example:

{
	"category_name": "cosmetics"
}

- GET Requests
a.	GET All Products: 
Route: http://localhost:3001/api/products 

b.	GET One Product:
Syntax: http://localhost:3001/api/products/{id} 
Example Route: http://localhost:3001/api/products/2 
c.	GET All Categories:
Route:
http://localhost:3001/api/categories 

 

e.	GET All Tags:
Example Route: http://localhost:3001/api/tags/    

f.	GET One Tag:

Syntax: http://localhost:3001/api/tags/{tag_id}
Example Route: http://localhost:3001/api/tags/1 

- PUT REQUESTS

a.	PUT: Update Product
http://localhost:3001/api/products/{product_id}
b.	PUT: Update Category
http://localhost:3001/api/categories/{category_id}

c.	PUT: Update Tag 

http://localhost:3001/api/tags/{tag_id}


- DELETE REQUESTS


a.	DELETE: Delete Product
http://localhost:3001/api/products/{product_id}

b.	DELETE: Delete Category
http://localhost:3001/api/categories/{category_id}

c.	DELETE: Delete Tag 
http://localhost:3001/api/tags/{tag_id}





## Link to Video 
TODO: Enter Link to Video
  ### Github
[Github Profile](https://github.com/amiller0806)

  ### Email
ariel.miller555@gmail.com
