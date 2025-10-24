import ProductList from "@/components/product/product-list";
import { getLatestProducts } from "@/lib/actions/products.actions";

export const metadata = {
  title: "Home",
};
const Homepage = async () => {
  const products = await getLatestProducts();
  return (
    <>
      <ProductList data={products} title="Newest Arrivals" />
    </>
  );
};

export default Homepage;
