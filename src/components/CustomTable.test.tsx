import "@testing-library/jest-dom";
import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { InfoCard } from "./InfoCard";
import { FilterIdInput } from "./FilterIdInput";

describe("Testing custom table", () => {
  test("infocard should render with passed message", () => {
    render(<InfoCard message={"Simple message"} />);
    expect(screen.getByText(/Simple message/i)).toBeDefined();
  });
});
