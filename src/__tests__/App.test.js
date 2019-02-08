import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Books from "../Books";

Enzyme.configure({ adapter: new Adapter() });
import { mount } from "enzyme";

it("renders without crashing", () => {
	const div = document.createElement("div");
	ReactDOM.render(<App />, div);
	ReactDOM.unmountComponentAtNode(div);
});

it("renders a list of books", async () => {
	const flushPromises = () => new Promise(resolve => setImmediate(resolve));
	const wrapper = mount(<App />);

	wrapper.find("form").simulate("submit");
	await flushPromises();

	expect(wrapper.update().find(Books).length).toBeGreaterThan(0);
});

it("renders Books with the correct props", async () => {
	const flushPromises = () => new Promise(resolve => setImmediate(resolve));
	const wrapper = mount(<App />);

	wrapper.find("form").simulate("submit");
	await flushPromises();
	wrapper.update();

	expect(wrapper.find(Books).props().books[0].title).toEqual(
		"The Sword of Shannara Trilogy"
	);

	expect(wrapper.find(Books).props().books[0].imageUrl).toEqual(
		"http://books.google.com/books/content?id=b8DHGwAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api"
	);
});

// describe("error handling", () => {
// 	describe("when there are no imageLinks", () => {
// 		it("passes null for imageUrl to books", () => {
// 			const wrapper = mount(<App />);
// 		});
// 	});
//});
