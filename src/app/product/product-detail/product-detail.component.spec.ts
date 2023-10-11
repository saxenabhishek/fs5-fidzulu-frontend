import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from '../service/product-service.service';
import { ProductDetailComponent } from './product-detail.component';

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;
  let productService: ProductService;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductDetailComponent ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({ name: 'TestProductName', service: 'TestServiceName' }),
            },
          },
        },
        ProductService,
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize productName and service from route params', () => {
    expect(component.productName).toEqual('TestProductName');
    expect(component.productCategory).toEqual('TestServiceName');
  });

  it('should set product from ProductService', () => {
    const products: Product[] = [
      { title: 'Product 1', imageUrl: 'image-url-1', description: 'Description 1', price: 10 , rating:3},
      { title: 'Product 2', imageUrl: 'image-url-2', description: 'Description 2', price: 20, rating:3 },
      { title: 'Product 3', imageUrl: 'image-url-3', description: 'Description 3', price: 30, rating:3 },
      { title: 'Product 4', imageUrl: 'image-url-4', description: 'Description 4', price: 40, rating:3},
    ];

    // Stub the ProductService's getAllProducts method to return an observable of products
    spyOn(productService, 'getAllProducts').and.returnValue(products);

    component.ngOnInit();
    expect(component.product).toEqual(products[3]);
  });

});
