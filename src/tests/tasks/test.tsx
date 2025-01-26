import { render, screen } from "@testing-library/react";
import Tasks from "././pages/tasks";

test("renders task management page", () => {
  render(<Tasks />);
  const heading = screen.getByText(/Task Management/i);
  expect(heading).toBeInTheDocument();
});
