/* eslint-disable react-native/no-inline-styles */
import React, {useReducer} from 'react';
import {View} from 'react-native';

import calendarReducer from '../Reducer/CalendarReducer';
import CalendarDates from './CalendarDates';
import CalendarDays from './CalendarDays';
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
  const month = state.month;
  const monthName = state.monthNames[month];
  const monthYear = `${monthName} ${year}`;
  const lastDate = parseInt(new Date(year, month + 1, 0).getDate(), 10);
  const firstDay = parseInt(new Date(year, month, 1).getDay(), 10);

  console.log(lastDate, firstDay);
  console.log(monthName, month);

  const onIncrease = () => {
    dispatch({type: 'INCREMENT'});
  };
  const onDecrease = () => {
    dispatch({type: 'DECREMENT'});
  };
  return (
    <View style={{width: '85%'}}>
      <CalendarHeader
        monthYear={monthYear}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
      />
      <CalendarDays />
      <CalendarDates
        year={year}
        month={month}
        firstDay={firstDay}
        lastDate={lastDate}
      />
    </View>
  );
};

export default MyCalendar;
