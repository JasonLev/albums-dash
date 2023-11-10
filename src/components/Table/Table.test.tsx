import React from "react";
import { render, screen } from "@testing-library/react";
import Table from "./Table";

test("renders the Table's heading text: 'Albums Details'", () => {
  render(<Table />);
  const tableHeadingText = screen.getByText(/Albums Details/i);
  expect(tableHeadingText).toBeInTheDocument();
});
