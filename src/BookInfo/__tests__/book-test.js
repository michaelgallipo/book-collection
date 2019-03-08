import React from "react";
import BookInfo from "../BookInfo";
import { mount } from "enzyme";

describe("<BookInfo />", () => {
	describe("when there is a book", () => {
		it("has a googleLink", () => {
			const props = { book: { googleLink: "google.com/testbook" } };

			const wrapper = mount(<BookInfo location={props} />);

			expect(wrapper.text()).toContain("/testbook");
		});
	});
});
