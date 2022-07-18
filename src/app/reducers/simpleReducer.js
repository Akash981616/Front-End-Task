const InitialState = {
  apidata: [],
  details: [],
};
const TaskReducer = (state = InitialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        apidata: action.payload,
      };

    case "FIND_BY_ID":
      const data = state.apidata;
      const delet = data.filter((ele, i) => ele.id === action.id + 1);
      return {
        ...state,
        details: delet,
      };
    default:
      return state;
  }
};
export default TaskReducer;
