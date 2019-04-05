import React from "react";
import ReactDOM from "react-dom";
import App from "../App";
import Books from "../Books";
import { mount } from "enzyme";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const mockStore = configureStore();
const store = mockStore();

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});

it("renders a list of books", async () => {
  const flushPromises = () => new Promise(resolve => setImmediate(resolve));
  const wrapper = mount(
    <Router>
      <Provider store={store}>
        {" "}
        <App />{" "}
      </Provider>
    </Router>
  );

  wrapper.find("form").simulate("submit");
  await flushPromises();

  expect(wrapper.update().find(Books).length).toBeGreaterThan(0);
});

it("renders Books with the correct props", async () => {
  const flushPromises = () => new Promise(resolve => setImmediate(resolve));
  const wrapper = mount(
    <Router>
      <Provider store={store}>
        {" "}
        <App />{" "}
      </Provider>
    </Router>
  );

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
