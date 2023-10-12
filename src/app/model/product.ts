export class Product {
  constructor(
    
    public LaptopId: number,
    public BrandName: string,
    public Colour: string,
    public Price: number,
    public price: number,
    public Ratings: number,
    public ImageUrl: string,
    public FoodId?: number,
    public Description?: string,
    public GPU?: string,
    public VRAM?: string,
    public CPU?: string,
    public RAM?: number,
    public Storage?: number,
    public ScreenSize?: number,
    public ModelName?: string,
    public idx?: number,
  ) {}

  toString(): string {
    return JSON.stringify(this);
  }
}
