import React from "react";
import AlertMessage from "./AlertMessage";
import { render } from "@testing-library/react";

const mockedProps = {
  primaryText: "Sample primary",
  secondaryText: "Sample secondary",
};

it("should render custom alert text", () => {
  const { getByText } = render(<AlertMessage {...mockedProps} />);
  getByText("Sample primary");
  getByText("Sample secondary");
});
