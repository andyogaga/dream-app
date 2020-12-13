/* eslint-disable no-undef */
import {
  wait,
  waitForDomChange,
  fireEvent,
  render,
} from "@testing-library/react";
import React from "react";
import Home from "../home";
const helperFunctions = require("../../../utils/helper");
const mockcheckPrimeWithSoE = jest.spyOn(helperFunctions, "checkPrimeWithSoE");

describe("Prime number generator Tests", () => {
  it("should load the document to the DOM with an input form", async () => {
    const { queryByPlaceholderText, queryByText } = render(<Home />);
    await waitForDomChange((done) => {
      const searchInput = queryByPlaceholderText("Enter amount of Primes");
      const searchButton = queryByText("Get Primes");
      expect(searchInput).not.toBeNull();
      expect(searchButton).not.toBeNull();
      done();
    });
  });

  it("should display table with multiplication table", async () => {
    const { queryByTestId } = render(<Home />);
    await wait(() => {
      expect(queryByTestId("prime-table-11-7")).not.toBeNull();
      expect(queryByTestId("prime-table-5-13")).not.toBeNull();
    });
  });

  it("should fire search button when text is entered", async (done) => {
    const { queryByText, queryByPlaceholderText, queryByTestId } = render(
      <Home />
    );
    const searchInput = queryByPlaceholderText("Enter amount of Primes");
    const searchButton = queryByText("Get Primes");

    fireEvent.change(searchInput, {
      target: { value: 25 },
    });
    fireEvent.blur(searchInput);
    fireEvent.click(searchButton);

    // const loader = await waitForElement(() => queryByTestId("loader"));
    await wait(() => {
      expect(mockcheckPrimeWithSoE).toBeCalled();
      expect(queryByTestId("prime-table-29-11")).not.toBeNull();
      done();
    });
  });
});
