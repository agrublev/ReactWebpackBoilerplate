import React from "react";
import renderer from "react-test-renderer";
import App from "./App";
import { render, fireEvent, cleanup } from "react-testing-library";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

test("A[[p222 changes the text after click", () => {
    // Render a checkbox with label in the document
    const AppRend = shallow(<App />);
    expect(AppRend.find("#test").text()).toEqual("DCCC");
    // expect(checkbox.text()).toEqual("On");
});

test("Link changes the class when hovered", () => {
    const component = renderer.create(<App />);

    let tree = component.toJSON();
    expect(tree).
    toMatchSnapshot();
    //
    // // manually trigger the callback
    // tree.props.onMouseEnter();
    // // re-rendering
    // tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
    //
    // // manually trigger the callback
    // tree.props.onMouseLeave();
    // // re-rendering
    // tree = component.toJSON();
    // expect(tree).toMatchSnapshot();
});
