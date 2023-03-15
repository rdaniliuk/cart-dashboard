import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { ICart, IProduct } from "../CartPreview/CartPreview";
import CartInfoMobile from "./CartInfoMobile";

function addDiscountPrice({
  cart,
  products,
}: {
  cart: ICart;
  products: IProduct[];
}) {
  if (cart.products) {
    products = [...cart.products];
  }
  products?.forEach((product) => {
    product.discountPrice = Math.ceil(
      product.price - (product.price / 100) * product.discountPercentage
    );
  });
  return products;
}

function CartInfo({ cart }: { cart: ICart }) {
  if (!cart.products) {
    return null;
  }
  const screenWidth = window.screen.width;
  let products: IProduct[] = [];
  addDiscountPrice({ cart, products });
  return (
    <div>
      {screenWidth > 600 ? (
        <LineChart
          width={400}
          height={300}
          data={cart.products}
          data-testid="chart"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="id" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line dataKey="price" stroke="#8884d8" activeDot={{ r: 5 }} />
          <Line dataKey="discountPrice" stroke="#82ca9d" />
          <Line dataKey="x-ordinate number --> product id" stroke="#ED1A1A" />
        </LineChart>
      ) : (
        <CartInfoMobile products={cart.products} />
      )}
    </div>
  );
}

export default CartInfo;
