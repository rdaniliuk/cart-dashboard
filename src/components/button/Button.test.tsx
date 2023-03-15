import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

const TEST_ICON_PATH = "testPath";
const TEST_BUTTON_TEXT = "test Button";

describe("button", () => {
  const mockCallBack = jest.fn();
  it("button render", () => {
    render(
      <Button
        icon={TEST_ICON_PATH}
        onClick={mockCallBack}
        buttonText={TEST_BUTTON_TEXT}
      />
    );
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
    expect(screen.getByText(TEST_BUTTON_TEXT)).toBeInTheDocument();
  });

  it("button clicked", () => {
    render(
      <Button
        icon={TEST_ICON_PATH}
        onClick={mockCallBack}
        buttonText={TEST_BUTTON_TEXT}
      />
    );
    const button = screen.getByTestId("button");
    expect(button).toBeInTheDocument();
    userEvent.click(button);
    expect(mockCallBack.mock.calls.length).toEqual(1);
  });
});
