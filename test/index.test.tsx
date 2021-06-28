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
  const [insert] = useDynamicScript("myscript.js", "myscript");
  insert();
  return <div></div>
}

function OtherElement() {
  const [insert, remove] = useDynamicScript("otherscript.js", "otherscript");
  insert();
  remove();
  return <div></div>
}