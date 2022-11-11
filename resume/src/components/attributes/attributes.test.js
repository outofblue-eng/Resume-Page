import React from "react";
import { shallow } from "enzyme";
import Attributes from "./attributes";

describe("Attributes", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Attributes />);
    expect(wrapper).toMatchSnapshot();
  });
});
