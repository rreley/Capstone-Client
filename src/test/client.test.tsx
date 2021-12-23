import { h } from "preact";
import { render } from "@testing-library/preact";
import { expect } from "@esm-bundle/chai";
import { App } from "../app";

describe("First Test", () => {
  it("renders the test", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Welcome to Helen/i);
    expect(document.body.contains(linkElement));
  });
});
