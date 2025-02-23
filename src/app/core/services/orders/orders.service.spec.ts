import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { OrdersService } from './orders.service';
import { Product } from '../../models/product.model';

describe('OrdersService', () => {
  let service: OrdersService;
  let httpMock: HttpTestingController;
  const apiUrl = 'https://fakestoreapi.com/products';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [OrdersService],
    });

    service = TestBed.inject(OrdersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fetch all products', () => {
    const mockProducts: Product[] = [
      {
        id: 1,
        title: 'Product 1',
        price: 100,
        description: 'Desc 1',
        category: 'Category 1',
        image: 'img1.jpg',
        rating: { rate: 4.5, count: 120 },
      },
      {
        id: 2,
        title: 'Product 2',
        price: 200,
        description: 'Desc 2',
        category: 'Category 2',
        image: 'img2.jpg',
        rating: { rate: 3.8, count: 80 },
      },
    ];

    service.getAllProducts().subscribe((products) => {
      expect(products.length).toBe(2);
      expect(products).toEqual(mockProducts);
    });

    const req = httpMock.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockProducts);
  });

  it('should fetch a product by ID', () => {
    const mockProduct: Product = {
      id: 1,
      title: 'Product 1',
      price: 100,
      description: 'Desc 1',
      category: 'Category 1',
      image: 'img1.jpg',
      rating: { rate: 4.5, count: 120 },
    };

    service.getProductById(1).subscribe((product) => {
      expect(product).toEqual(mockProduct);
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    expect(req.request.method).toBe('GET');
    req.flush(mockProduct);
  });

  it('should handle error when fetching products', () => {
    service.getAllProducts().subscribe({
      next: () => fail('Expected an error, but got a response'),
      error: (error) => {
        expect(error.message).toBe('Failed to load products');
      },
    });

    const req = httpMock.expectOne(apiUrl);
    req.flush('Error', { status: 500, statusText: 'Internal Server Error' });
  });

  it('should handle error when fetching product by ID', () => {
    service.getProductById(1).subscribe({
      next: () => fail('Expected an error, but got a response'),
      error: (error) => {
        expect(error.message).toBe('Failed to load product details');
      },
    });

    const req = httpMock.expectOne(`${apiUrl}/1`);
    req.flush('Error', { status: 404, statusText: 'Not Found' });
  });
});
