import ProductList from "@/components/product/product-list";
import { APP_NAME } from "@/lib/constants";
import sampleData from "@/db/sample-data";

export const metadata = {
  title: "Home",
};
const Homepage = () => {
  return (
    <>
      <ProductList
        data={sampleData.products}
        title="Newest Arrivals"
        limit={4}
      />
    </>
  );
};

export default Homepage;
