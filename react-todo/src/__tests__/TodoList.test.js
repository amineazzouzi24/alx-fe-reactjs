import TodoList from "../components/TodoList";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
});
