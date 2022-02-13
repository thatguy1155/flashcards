// ACTIONS

const GET = 'GET';
const SET_SELECTED_ITEM = 'SET_SELECTED_ITEM';
const POST = 'POST';

// ACTION CREATORS

// eslint-disable-next-line arrow-body-style
export const get = (cards) => {
  return {
    type: GET,
    cards,
  };
};

// export const post = item => ({
//   type: POST,
//   item,
// });

// REDUCER

const reducer = (state = { items: [], selectedItem: 0 }, action) => {
  switch (action.type) {
    case GET:
      return {
        ...state,
        cards: action.cards,
      };
    case SET_SELECTED_ITEM:
      return {
        ...state,
        selectedItem: action.item,
      };
    default:
      return state;
  }
};

export default reducer;
