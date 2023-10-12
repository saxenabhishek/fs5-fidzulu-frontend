export class Member {
    constructor(
      
      public name: string,
      public teamName: string,
      public quote: string,
      public imageLink: string,
      public corpid: string,
      public department: string,
    ) {}
  
    toString(): string {
      return JSON.stringify(this);
    }
  }
  