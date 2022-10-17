import { ProductHttpService } from './services/product-http.service';

(async () => {
  try {
    const productService = new ProductHttpService();

    console.log('--'.repeat(10));
    console.log('getAll');

    const products = await productService.getAll();

    console.log('--'.repeat(10));
    console.log('update');

    const productId = products[0].id;
    await productService.update(productId, {
      price: 3000,
      title: 'Alex product',
      description: 'ALex zinli',
    });

    console.log('--'.repeat(10));
    console.log('findOne');
    const product = await productService.findOne(productId);

    console.log(product);
  } catch (error) {
    console.log(error);
  }
})();
