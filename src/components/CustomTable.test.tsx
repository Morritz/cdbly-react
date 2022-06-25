import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { InfoCard } from "./InfoCard";

describe("Testing custom table", () => {
  test("infocard should render with passed message", () => {
    render(<InfoCard message={"Simple message"} />);
    expect(screen.getByText(/Simple message/i)).toBeDefined();
  });
});
