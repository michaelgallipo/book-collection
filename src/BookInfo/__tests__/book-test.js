import React from "react";
import BookInfo from "../BookInfo";
import { mount } from "enzyme";
import { BrowserRouter as Router } from "react-router-dom";

describe("<BookInfo />", () => {
  describe("when there is a book", () => {
    it("has a googleLink", () => {
      const props = { book: { googleLink: "google.com/testbook" } };

      const wrapper = mount(
        <Router>
          <BookInfo location={props} />
        </Router>
      );

      expect(wrapper.html()).toContain("google.com/testbook");
    });
  });
});
