import books from "./books.json";

export default {
  get: jest.fn(url => Promise.resolve(books))
};
