import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductListComponent } from './product-list.component';
import { ProductService } from '../service/product-service.service';
import { Product } from 'src/app/model/product';
import { StarRatingComponent } from 'src/app/component/star-rating/star-rating.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('ProductListComponent', () => {
  let fixture: ComponentFixture<ProductListComponent>;
  let component: ProductListComponent;
  let productService: ProductService;

  // Mock product data
  const mockProductData: Product[] = [
    // Add sample products here
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListComponent, StarRatingComponent],
      providers: [ProductService],
      imports: [RouterTestingModule], // Add RouterTestingModule
    });

    // Inject a mock ProductService with mock data
    productService = TestBed.inject(ProductService);
    productService.productList = mockProductData;

    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display products', () => {
    fixture.detectChanges();
    const productElements = fixture.nativeElement.querySelectorAll(
      '.product-list-wrapper .w-full'
    );
    expect(productElements.length).toBe(mockProductData.length);

    mockProductData.forEach((product, index) => {
      const productElement = productElements[index];
      const titleElement = productElement.querySelector('.text-gray-900');
      const priceElement = productElement.querySelector('.font-bold');

      expect(titleElement.textContent).toContain(product.title);
      expect(priceElement.textContent).toContain(`$${product.price}`);
    });
  });

  it('should display the correct star rating for each product', () => {
    fixture.detectChanges();
    const starRatingElements =
      fixture.nativeElement.querySelectorAll('app-star-rating');

    expect(starRatingElements.length).toBe(mockProductData.length);

    mockProductData.forEach((product, index) => {
      const starRatingComponent = starRatingElements[index];
      const ratingValue = starRatingComponent.getAttribute('rating');

      expect(+ratingValue).toBe(product.rating);
    });
  });

  it('should have the correct router links for each product', () => {
    fixture.detectChanges();
    const routerLinkElements =
      fixture.nativeElement.querySelectorAll('a[routerLink]');

    expect(routerLinkElements.length).toBe(mockProductData.length);

    mockProductData.forEach((product, index) => {
      const routerLink = routerLinkElements[index].getAttribute('routerLink');

      expect(routerLink).toBe(`/toys/${product.title}`);
    });
  });
});
