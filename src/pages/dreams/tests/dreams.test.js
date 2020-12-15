/* eslint-disable no-undef */
import { render, waitFor, fireEvent } from "@testing-library/react";
import "mutationobserver-shim";
import React, { createRef } from "react";
import Dreams from "../dreams";
const helperFunctions = require("../../../utils/helper");
global.MutationObserver = window.MutationObserver;

const getDreams = jest
  .spyOn(helperFunctions, "getDreams")
  .mockImplementation(() => {
    return [{ id: "1234", dream: "I am a dream", firstName: "Mike" }];
  });
const removeDream = jest
  .spyOn(helperFunctions, "removeDream")
  .mockImplementation(() => {
    return { id: "1234", dream: "I am a dream", firstName: "Mike" };
  });

describe("View Dream Tests", () => {
  it("should add name and dream to dom", async (done) => {
    const { queryByText } = render(
      <Dreams
        dreams={[{ id: "1234", dream: "I am a dream", firstName: "Mike" }]}
        setDreams={jest.fn()}
        setPage={jest.fn()}
        page={1}
        customRef={createRef()}
      />
    );
    const firstname = queryByText("Mike");
    const dream = queryByText("I am a dream");

    await waitFor(() => {
      expect(getDreams).toBeCalled();
      expect(queryByText("Name")).not.toBeNull();
      expect(firstname).not.toBeNull();
      expect(dream).not.toBeNull();
      done();
    });
  });

  it("should delete dream from dom on button click", async (done) => {
    const { queryByText, queryByTestId } = render(
      <Dreams
        dreams={[{ id: "1234", dream: "I am a dream", firstName: "Mike" }]}
        setDreams={jest.fn()}
        setPage={jest.fn()}
        page={1}
        customRef={createRef()}
      />
    );
    const firstname = queryByText("Mike");
    const dream = queryByText("I am a dream");
    expect(firstname).not.toBeNull();
    expect(dream).not.toBeNull();
    const deletButton = queryByTestId("dream-delete-1234");
    fireEvent.click(deletButton);
    await waitFor(() => {
      expect(removeDream).toBeCalled();
      expect(getDreams).toBeCalled();
      done();
    });
  });

  it("should display pagination with page 1 on load", async (done) => {
    const { queryByText, queryByTestId } = render(
      <Dreams
        dreams={[{ id: "1234", dream: "I am a dream", firstName: "Mike" }]}
        setDreams={jest.fn()}
        setPage={jest.fn()}
        page={1}
        customRef={createRef()}
      />
    );
    const firstname = queryByText("Mike");
    const dream = queryByText("I am a dream");
    expect(firstname).not.toBeNull();
    expect(dream).not.toBeNull();
    // fireEvent.click(deletButton);
    await waitFor(() => {
      expect(queryByText("1 - 1 of 1")).not.toBeNull();
      expect(getDreams).toBeCalled();
      done();
    });
  });

  it("should display pagination with page 2 on when dreams are more than 8", async (done) => {
    const getDreams = jest
      .spyOn(helperFunctions, "getDreams")
      .mockImplementation(() => {
        return [
          { id: "1234", dream: "I am a dream", firstName: "Mike" },
          { id: "1234", dream: "I am a dream", firstName: "Mike" },
          { id: "1234", dream: "I am a dream", firstName: "Mike" },
          { id: "1234", dream: "I am a dream", firstName: "Mike" },
          { id: "1234", dream: "I am a dream", firstName: "Mike" },
          { id: "1234", dream: "I am a dream", firstName: "Mike" },
          { id: "1234", dream: "I am a dream", firstName: "Mike" },
          { id: "1234", dream: "I am a dream", firstName: "Mike" },
          { id: "1234", dream: "I am a dream", firstName: "Mike" },
          { id: "1234", dream: "I am a dream", firstName: "Mike" },
        ];
      });

    const setPage = jest.fn();
    const { queryByText } = render(
      <Dreams
        dreams={[
          { id: "1234", dream: "I am a dream", firstName: "Mike" },
          { id: "12341", dream: "I am a dream", firstName: "Mike" },
          { id: "12342", dream: "I am a dream", firstName: "Mike" },
          { id: "12343", dream: "I am a dream", firstName: "Mike" },
          { id: "12344", dream: "I am a dream", firstName: "Mike" },
          { id: "12345", dream: "I am a dream", firstName: "Mike" },
          { id: "12346", dream: "I am a dream", firstName: "Mike" },
          { id: "1237", dream: "I am a dream", firstName: "Mike" },
        ]}
        setDreams={jest.fn()}
        setPage={setPage}
        page={1}
        customRef={createRef()}
      />
    );
    expect(queryByText("1 - 8 of 10")).not.toBeNull();
    const nextButton = queryByText(">");
    fireEvent.click(nextButton);
    await waitFor(() => {
      expect(setPage).toHaveBeenCalledWith(2);
      expect(getDreams).toBeCalled();
      done();
    });
  });
});
