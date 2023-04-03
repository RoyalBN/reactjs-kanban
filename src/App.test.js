import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("should render with title React Kanban", () => {
    render(<App />);
    const title = screen.getByText(/React Kanban/i);
    expect(title).toBeInTheDocument();
  });

  test("should render text area input with placeholder", () => {
    render(<App />);
    const textInput = screen.getByPlaceholderText(/New task name/i);
    expect(textInput).toBeInTheDocument();
  });
});
