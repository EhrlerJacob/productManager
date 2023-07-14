const ProductController = require("../controllers/product.controller");

module.exports =  app => {
    app.get('/api/products', ProductController.findAllProducts);
    app.get('/api/products/:id', ProductController.findOneProduct);
    app.post('/api/products', ProductController.createProduct);
    app.patch('/api/products/:id', ProductController.updateProduct);
    app.delete('/api/products/:id', ProductController.deleteProduct);
}

// echo 'export PATH="/opt/homebrew/opt/mongodb-community@5.0/bin:$PATH"' >> ~/.zshrc/