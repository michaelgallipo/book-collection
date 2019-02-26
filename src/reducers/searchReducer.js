export default (state = {}, action) => {
	return { searchTerm: action.payload };
};
