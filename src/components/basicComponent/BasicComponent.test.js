import React from "react";
import { render } from "react-dom";
import { act } from "react-dom/test-utils";

import BasicComponent from "./index";

let container = null;

describe("<BasicComponent />", () => {
  beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  it("renders component without any props", () => {
    act(() => {
      render(<BasicComponent />, container);
    });

    expect(container.innerHTML).toMatchSnapshot();
  });

  it("renders component with name = Bilal", () => {
    act(() => {
      render(<BasicComponent name="Bilal" />, container);
    });

    expect(container.innerHTML).toMatchSnapshot();
  });
});
