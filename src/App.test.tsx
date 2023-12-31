import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

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

test("renders the AppBar's text: 'Albums Dashboard'", () => {
  render(<App />);
  const AppBarText = screen.getByText(/Albums Dashboard/i);
  expect(AppBarText).toBeInTheDocument();
});
