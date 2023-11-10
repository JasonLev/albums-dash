import React from "react";
import { render, screen } from "@testing-library/react";
import FilterGenre from "./FilterGenre";

test("renders the FilterGenre's heading text: 'Genre Filter'", () => {
  const mockGenres: string[] = [];
  render(<FilterGenre genres={mockGenres} />);
  const genreFilterHeadingText = screen.getByText(/Genre Filter/i);
  expect(genreFilterHeadingText).toBeInTheDocument();
});
