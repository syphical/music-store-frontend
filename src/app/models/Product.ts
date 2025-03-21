export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  stock: number;
  releaseDate: string;
  artist: {
    id: number;
    name: string;
  };
  genre: {
    id: number;
    name: string;
  };
  category: {
    id: number;
    name: string;
  };
  imagePath?: string;
}
