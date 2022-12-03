const calendarReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      if (state.month < 11) {
        return {...state, month: state.month + 1};
      } else {
        return {...state, year: state.year + 1, month: 0};
      }
    case 'DECREMENT':
      if (state.month > 0) {
        return {...state, month: state.month - 1};
      } else {
        return {...state, year: state.year - 1, month: 11};
      }
  }
};

export default calendarReducer;
