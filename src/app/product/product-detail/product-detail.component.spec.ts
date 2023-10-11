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
      declarations: [ProductDetailComponent],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: convertToParamMap({
                name: 'TestProductName',
                service: 'TestServiceName',
              }),
            },
          },
        },
        ProductService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    productService = TestBed.inject(ProductService);
    activatedRoute = TestBed.inject(ActivatedRoute);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize productName and service from route params', () => {
    expect(component.productName).toEqual('TestProductName');
    expect(component.productCategory).toEqual('TestServiceName');
  });

  it('should set product from ProductService', () => {
    const product: Product = new Product(
      123, // Replace with the actual ID
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

    // Stub the getProductByName method of the ProductService
    spyOn(productService, 'getProductByName').and.returnValue(product);

    component.ngOnInit();
    expect(component.product).toEqual(product);
  });
});
