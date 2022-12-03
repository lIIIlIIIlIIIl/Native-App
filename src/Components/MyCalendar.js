import React, {useReducer} from 'react';
import {useState} from 'react';
import {View, Text} from 'react-native';
import calendarReducer from '../Reducer/CalendarReducer';
import CalendarHeader from './CalendarHeader';

const today = new Date();

const initialState = {
  year: today.getFullYear(),
  month: today.getMonth(),
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
};

const MyCalendar = () => {
  const [state, dispatch] = useReducer(calendarReducer, initialState);

  const year = state.year;
  const month = state.month + 1;
  const monthName = state.monthNames[month - 1];
  const monthYear = `${monthName} ${year}`;

  console.log(monthYear);

  const onIncrease = () => {
    dispatch({type: 'INCREMENT'});
  };
  const onDecrease = () => {
    dispatch({type: 'DECREMENT'});
  };
  return (
    <View style={{width: '100%'}}>
      <CalendarHeader
        monthYear={monthYear}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
    </View>
  );
};

export default MyCalendar;
