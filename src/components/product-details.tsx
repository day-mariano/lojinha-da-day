import { FC } from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Product } from "./product-list";

interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails: FC<ProductDetailsProps> = ({ product }) => {
  return (
    <DialogContent className="flex justify-center p-10">
      <div className="w-[120px] h-[120px] shrink-0">
        <img src={product.image} alt={product.title} />
      </div>
      <div>
        <DialogHeader>
          <DialogTitle>{product.title}</DialogTitle>
          <DialogDescription>
          {product.description}
          </DialogDescription>
        </DialogHeader>
        <p>
          ${product.price.toFixed(2)} ⭐️ {product.rating.rate}/5 de{" "}
            {product.rating.count} avaliações
        </p>
      </div>
    </DialogContent>
  );
};
