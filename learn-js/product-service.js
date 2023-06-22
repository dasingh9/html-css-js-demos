class Product {
    constructor(productId, productName) {
        this.productId = productId;
        this.productName = productName;
    }
}

class ProductService {

    constructor(products = []) {
        this.products = products;
    }

    getProducts() {
        return this.products;
    }

    createProduct(product) {
        this.products.push(product);
    }

    deleteproduct(productId) {
        this.products = this.products.filter(p => p.productId != productId);
    }

    updateProduct(product) {
        //todo: add product
    }

    getProductById(productId) {
        //todo: return product by Id
    }
}

//test ProductService class
const productService = new ProductService([]);

productService.createProduct({
    productId:101,
    productName:"Garlic Bread"
});

productService.createProduct(
    new Product(102, "Ginger Bread")
);

console.log(JSON.stringify(productService.getProducts()));

productService.deleteproduct(101);

console.log(JSON.stringify(productService.getProducts()));
