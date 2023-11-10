import React from "react";
import { render, screen } from "@testing-library/react";
import Chart from "./Chart";

const { ResizeObserver } = window;

beforeEach(() => {
  //@ts-ignore
  delete window.ResizeObserver;
  window.ResizeObserver = jest.fn().mockImplementation(() => ({
    observe: jest.fn(),
    unobserve: jest.fn(),
    disconnect: jest.fn(),
  }));
});

afterEach(() => {
  window.ResizeObserver = ResizeObserver;
  jest.restoreAllMocks();
});

test("renders the Chart's heading text: 'Albums by Genre -- Data Details'", () => {
  render(<Chart />);
  const ChartHeadingText = screen.getByText(/Albums by Genre -- Data Details/i);
  expect(ChartHeadingText).toBeInTheDocument();
});
