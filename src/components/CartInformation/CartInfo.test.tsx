/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/no-container */
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { LineChart, Line, XAxis, YAxis } from "recharts";

const TEST_CHART_DATA = [
  { title: "pr1", price: 400, newPrice: 2400 },
  { title: "pr2", price: 300, newPrice: 4567 },
  { title: "pr3", price: 300, newPrice: 1398 },
  { title: "pr4", price: 200, newPrice: 9800 },
  { title: "pr5", price: 278, newPrice: 3908 },
  { title: "pr6", price: 189, newPrice: 4800 },
];

export const testProduct = {
  discountPercentage: 50,
  discountedPrice: 50,
  discountPrice: 50,
  id: 50,
  price: 50,
  quantity: 50,
  title: 50,
  total: 50,
};

export const testCart = {
  id: 50,
  products: [],
  total: 55,
  discountedTotal: 55,
  totalProducts: 55,
  totalQuantity: 55,
  userId: 55,
};

describe("cart info / chart", () => {
  test("render chart", () => {
    const { container } = render(
      <LineChart width={10} height={10} data={TEST_CHART_DATA}>
        <XAxis />
        <YAxis />
        <Line dataKey="price" stroke="#fff" />
        <Line dataKey="newPrice" stroke="#fff" />
      </LineChart>
    );
    expect(
      container.querySelectorAll(".recharts-line .recharts-line-curve")
    ).toHaveLength(2);
  });
  test("set chart description", () => {
    const { container } = render(
      <LineChart
        title="Chart title"
        width={10}
        height={10}
        data={TEST_CHART_DATA}
      >
        <Line type="monotone" dataKey="newPrice" />
      </LineChart>
    );
    expect(container.querySelector("title")).toHaveTextContent("Chart title");
  });
});
