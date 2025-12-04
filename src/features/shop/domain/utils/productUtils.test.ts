import { CartItem } from '../entities/cartItem';
import { extractShopifyNumericId, addShopifyNumericIdPrefix, formatThousands, getProductIds } from './productUtils';

describe('productUtils', () => {
  test('extractShopifyNumericId returns numeric suffix', () => {
    expect(extractShopifyNumericId('gid://shopify/Product/12345')).toBe('12345');
    expect(extractShopifyNumericId('prod-678')).toBe('678');
    expect(extractShopifyNumericId('no-digits')).toBe('no-digits');
  });

  test('addShopifyNumericIdPrefix adds prefix', () => {
    expect(addShopifyNumericIdPrefix('123')).toBe('gid://shopify/Product/123');
  });

  test('formatThousands formats numbers for es-ES', () => {
    expect(formatThousands(12345.67)).toBe('12.345');
    expect(formatThousands(1000.00)).toBe('1000');
  });

  test('getProductIds maps cart items to ids', () => {
    const cart: CartItem[] = [{
      id: 'a',
      title: '',
      handle: '',
      imageUrl: null,
      imageAlt: null,
      price: 0,
      currency: '',
      quantity: 0
    }, {
      id: 'b',
      title: '',
      handle: '',
      imageUrl: null,
      imageAlt: null,
      price: 0,
      currency: '',
      quantity: 0
    }];
    // cast to any to avoid importing CartItem type just for test
    expect(getProductIds(cart)).toEqual([{
      id: 'a',
      title: '',
      handle: '',
      imageUrl: null,
      imageAlt: null,
      price: 0,
      currency: '',
      quantity: 0
    }, {
      id: 'b',
      title: '',
      handle: '',
      imageUrl: null,
      imageAlt: null,
      price: 0,
      currency: '',
      quantity: 0
    }]);
  });
});
