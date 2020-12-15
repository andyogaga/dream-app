/* eslint-disable no-undef */
import { wait, fireEvent, render, waitFor } from "@testing-library/react";

import "mutationobserver-shim";

import React from "react";
import Home from "../home";
const helperFunctions = require("../../../utils/helper");
global.MutationObserver = window.MutationObserver;

const initiateDBMock = jest.spyOn(helperFunctions, "initiatStorage");
const getDreams = jest.spyOn(helperFunctions, "getDreams");
const addDream = jest.spyOn(helperFunctions, "addDream");
const executeScroll = jest
  .spyOn(helperFunctions, "executeScroll")
  .mockImplementation(() => {});

describe("Add Dream Tests", () => {
  it("should load the dream home page document to the DOM with input forms", async (done) => {
    const { queryByPlaceholderText, queryByText } = render(<Home />);

    await wait(() => {
      const addFirstNameInput = queryByPlaceholderText("Mike");
      const addDreamInput = queryByPlaceholderText("Enter your dream");
      const addButton = queryByText("Add dream");
      const welcomeText = queryByText("Welcome to my Dreams");
      expect(addFirstNameInput).not.toBeNull();
      expect(addDreamInput).not.toBeNull();
      expect(addButton).not.toBeNull();
      expect(welcomeText).not.toBeNull();
      expect(initiateDBMock).toBeCalled();
      done();
    });
  });

  it("should display error if field is not entered", async (done) => {
    const { queryAllByText, queryByText } = render(<Home />);
    const addButton = queryByText("Add dream");
    fireEvent.click(addButton);

    await waitFor(() => {
      const errorText = queryAllByText("Required!");
      expect(errorText.length).toEqual(2);
      done();
    });
  });

  it("should add name and dream to dom on submit", async (done) => {
    const { queryByText, queryByPlaceholderText, debug } = render(<Home />);
    const addFirstNameInput = queryByPlaceholderText("Mike");
    const addDreamInput = queryByPlaceholderText("Enter your dream");
    const addButton = queryByText("Add dream");

    fireEvent.change(addFirstNameInput, {
      target: { value: "henry" },
    });
    fireEvent.change(addDreamInput, {
      target: { value: "This is my first dream and I am ready to conquer" },
    });
    fireEvent.click(addButton);

    await waitFor(() => {
      expect(executeScroll).toBeCalled();
      expect(addDream).toBeCalled();
      expect(getDreams).toBeCalled();
      expect(queryByText("Name")).not.toBeNull();
      expect(queryByText("henry")).not.toBeNull();
      expect(
        queryByText("This is my first dream and I am ready to conquer")
      ).not.toBeNull();
      done();
    });
  });
});
