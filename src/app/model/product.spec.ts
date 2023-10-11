import { Product } from './product';

describe('Product', () => {
  it('should create an instance', () => {
    const product = new Product(
      123, // Replace with an actual ID
      'Test Brand Name',
      'Test Colour',
      999,
      4.5,
      'Test Image URL',
      'Test Description',
      'Test GPU',
      'Test VRAM',
      'Test CPU',
      16,
      512,
      13.3,
      'Test Model Name'
    );

    expect(product).toBeTruthy();
  });
});
