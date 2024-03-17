import { FC, useEffect, useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ProductDetails } from "./product-details";
import { Dialog, DialogTrigger } from "./ui/dialog";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const ProductList: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product>();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProducts(res);
      });
  }, []);

  return (
    <Dialog>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <DialogTrigger
            key={product.id}
            className="text-left flex w-full"
            onClick={() => setSelectedProduct(product)}
          >
            <article className="flex-grow">
              <Card className="flex hover:bg-rose-50 active:bg-rose-100">
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
          </DialogTrigger>
        ))}
        {selectedProduct && <ProductDetails product={selectedProduct} />}
      </div>
    </Dialog>
  );
};
