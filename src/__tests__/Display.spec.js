import React from "react";
import ReactDOM from "react-dom";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Display from "../components/Display/Display";

Enzyme.configure({ adapter: new Adapter() });

describe("<Display />", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Display />, div);
  });
  it("should display the component", () => {
    const wrapper = shallow(<Display />);
    const display = wrapper.find("div.component-display");
    expect(display.length).toBe(1);
  });
  it("should display the inner component display", () => {
    const wrapper = shallow(<Display />);
    const display = wrapper.find("div.inner-display");
    expect(display.length).toBe(1);
  });
  it("should display the inner component display", () => {
    const wrapper = shallow(<Display />);
    const display = wrapper.find("div.inner-display");
    expect(display.text()).toBe("");
  });
});
