import { ProductCategory } from "./productCategory";
import { StatusCard } from "./statusCard";

export function ProductList() {
  return (
    <div>
      <StatusCard />
      <ProductCategory />
    </div>
  );
}