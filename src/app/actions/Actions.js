export const setApiData = (data) => {
  return {
    type: "FETCH_DATA",
    payload: data,
  };
};
export const findById = (id) => {
  return {
    type: "FIND_BY_ID",
    id,
  };
};
