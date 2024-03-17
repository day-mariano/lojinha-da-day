import { FC, useEffect, useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export const ProductList: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <article key={product.id}>
          <Card className="flex">
            <div className="flex shrink-0 justify-center w-[120px] h-[120px] p-4">
              <img
                className="object-contain"
                src={product.image}
                alt={product.title}
              />
            </div>
            <CardHeader>
              <CardTitle>{product.title}</CardTitle>
              <CardDescription>${product.price.toFixed(2)}</CardDescription>
            </CardHeader>
          </Card>
        </article>
      ))}
    </div>
  );
};
