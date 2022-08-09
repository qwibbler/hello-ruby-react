const initState = {
  message: '',
};

const messageReducer = (state = initState, action) => {
  console.log(action.type, state);
  switch (action.type) {
    case 'FETCHING_MESSAGE':
      return {
        ...state,
        loaded: true,
      };
    case 'COMPLETE_MESSAGE':
      return { message: action.payload.message };
    default:
      return state;
  }
};

export const fetchmessage = () => async (dispatch) => {
  dispatch({ type: 'FETCHING_MESSAGE' });
  await fetch('/v1/messages')
    .then((response) => response.json())
    .then((data) => {
      dispatch({ type: 'COMPLETE_MESSAGE', payload: data });
    })
    .catch(() => dispatch({ type: 'FETCHING_MESSAGE' }));
};

export default messageReducer; 