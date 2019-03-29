import React from "react";
import ReactDOM from "react-dom";
import Books from "../Books";
import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";

describe("<Books />", () => {
	describe("when there are books", () => {
		it("displays the title of a book", () => {
			// setup
			const props = [
				{ title: "Origin", author: "Dan Brown", image: "imageurl" }
			];

			// action
			const wrapper = mount(
				<Router>
					<Books books={props} />
				</Router>
			);

			// assertion
			expect(wrapper.text()).toEqual(expect.stringContaining("Origin"));
		});
		it("displays titles of multiple books", () => {
			// setup
			const props = [
				{ title: "The Da Vinci Code", author: "Dan Brown", image: "imageurl2" },
				{ title: "The Lost Symbol", author: "Dan Brown", image: "imageurl3" },
				{ title: "Angels and Demons", author: "Dan Brown", image: "imageurl4" }
			];

			// action
			const wrapper = mount(
				<Router>
					<Books books={props} />
				</Router>
			);

			//assertion
			expect(wrapper.text()).toEqual(expect.stringContaining("Vinci"));
			expect(wrapper.text()).toEqual(expect.stringContaining("Symbol"));
			expect(wrapper.text()).toEqual(expect.stringContaining("Angels"));
		});
		it("displays author for each book", () => {
			// setup
			const props = [
				{
					title: "Game of Thrones",
					author: "George RR Martin",
					image: "imageurl1"
				},
				{ title: "Mistborn", author: "Brandon Sanderson", image: "imageurl2" },
				{ title: "The Two Towers", author: "JRR Tolkien", image: "imageurl3" }
			];

			// action
			const wrapper = mount(
				<Router>
					<Books books={props} />
				</Router>
			);

			// assertion
			expect(wrapper.text()).toEqual(
				expect.stringContaining("Game of Thrones, by George RR Martin")
			);
			expect(wrapper.text()).toEqual(
				expect.stringContaining("Mistborn, by Brandon Sanderson")
			);
			expect(wrapper.text()).toEqual(
				expect.stringContaining("The Two Towers, by JRR Tolkien")
			);
		});
	});

	describe("when there are no books", () => {
		it("does not throw an error", () => {
			const wrapper = mount(
				<Router>
					<Books books={[]} />
				</Router>
			);
		});
		
	});
});
