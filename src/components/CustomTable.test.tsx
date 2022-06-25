import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import GeschichteWithHistory from "geschichte/historyjs";
import { createBrowserHistory } from "history";
import { describe, expect, test, vi } from "vitest";
import { CustomTable } from "./CustomTable";
import { InfoCard } from "./InfoCard";

const flushPromises = () => new Promise(setImmediate);

describe("Testing custom table", () => {
  test("infocard should render with passed message", () => {
    render(<InfoCard message={"Simple message"} />);
    expect(screen.getByText(/Simple message/i)).toBeDefined();
  });

  fetch;
  test("there should be failed to fetch message when the fetch fails", async () => {
    global.fetch = vi.fn().mockImplementationOnce(() =>
      Promise.resolve(
        new Response(null, {
          status: 500,
          statusText: "Internal Server Error",
        })
      )
    );
    render(
      <GeschichteWithHistory history={createBrowserHistory()}>
        <CustomTable />
      </GeschichteWithHistory>
    );
    expect(await screen.findByText(/Failed to fetch/i)).toBeDefined();
  });
});
