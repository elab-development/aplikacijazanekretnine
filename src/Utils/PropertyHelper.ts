import { Property, Address } from "../Utils/Property";

class PropertyHelper {
  static formatPrice(price: number): string {
    return `$${price.toFixed(2)}`;
  }

  static formatAddress(address: Address): string {
    return `${address.street}, ${address.city}, ${address.state} ${address.zip}`;
  }

  static filterProperties(properties: Property[], query: string): Property[] {
    query = query.toLowerCase();
    return properties.filter((item) => {
      const title = item.title ? item.title.toLowerCase() : "";
      const city = item.city ? item.city.toLowerCase() : "";
      const address = item.address?.street
        ? item.address.street.toLowerCase()
        : "";

      return (
        title.includes(query) || city.includes(query) || address.includes(query)
      );
    });
  }
}

export default PropertyHelper;