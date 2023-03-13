import React from "react";
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

const data = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
];

function CartInfo({ cart }: { cart: ICart }) {
  const screenWidth = window.screen.width;
  {
    console.log(cart, "cart");
  }
  let products: IProduct[] = [];
  if (cart.products) {
    products = [...cart.products];
  }
  products?.forEach((product) => {
    product.discountPrice = Math.ceil(
      product.price - (product.price / 100) * product.discountPercentage
    );
  });
  {
    console.log(screenWidth, "products");
  }
  return (
    <div>
      {screenWidth > 500 ? (
        <LineChart width={400} height={300} data={cart.products}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="id" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line dataKey="price" stroke="#8884d8" activeDot={{ r: 5 }} />
          <Line dataKey="discountPrice" stroke="#82ca9d" />
        </LineChart>
      ) : <ul>
         {products.map((product, index) => (
            <li key={index}>
               {product.title}
            </li>
         ))}
         </ul>}
    </div>
  );
}

export default CartInfo;
