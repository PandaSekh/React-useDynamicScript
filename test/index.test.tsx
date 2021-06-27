import 'regenerator-runtime/runtime'
import React from "react";
import { render } from "@testing-library/react";

describe("Hook test", () => {
  test("should import script", async () => {
    render(<Element />);
    expect(document.getElementById("myscript")).toBeTruthy();
  });

  test("should import and remove script", async () => {
    render(<OtherElement />);
    expect(document.getElementById("otherscript")).toBeFalsy();
  });
});

import useDynamicScript from "../dist/index"

function Element() {
  useDynamicScript("myscript.js", "myscript");
  return <div></div>
}

function OtherElement() {
  const removeScript = useDynamicScript("otherscript.js", "otherscript");
  removeScript();
  return <div></div>
}