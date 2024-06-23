export interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
  }
  
  export interface Property {
    id: number;
    title: string;
    price: number;
    address: Address;
    city: string;
    img: string;
    bedroom: number;
    bathroom: number;
    latitude: number;
    longitude: number;
  }