/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

const CalendarDates = ({
  today,
  year,
  month,
  firstDay,
  lastDate,
  onIncrease,
  onDecrease,
}) => {
  const [clickDate, setClickDate] = useState(today);

  const CalendarDate = [];

  const weeks = Math.ceil((firstDay + lastDate) / 7);

  const makeDay = week => {
    const dates = [];

    if (week === 1) {
      const prevLastDate = parseInt(new Date(year, month, 0).getDate(), 10);
      for (let i = 1; i <= 7; i++) {
        if (i <= firstDay) {
          const now = prevLastDate - firstDay + i;
          dates.push({
            date: now,
            color: '#BDBDBD',
            month: 'last',
            thisMonth: false,
          });
        } else {
          const now = i - firstDay;
          dates.push({
            date: now,
            color: '#000000',
            month: 'this',
            thisMonth: true,
          });
        }
      }
    } else {
      const startDate = (week - 1) * 7;
      for (let i = startDate; i <= week * 7 - 1; i++) {
        if (i - firstDay < lastDate) {
          const now = i - firstDay + 1;
          dates.push({
            date: now,
            color: '#000000',
            month: 'this',
            thisMonth: true,
          });
        } else {
          const now = i - lastDate - firstDay + 1;
          dates.push({
            date: now,
            color: '#BDBDBD',
            month: 'next',
            thisMonth: false,
          });
        }
      }
    }
    return dates;
  };

  for (let i = 1; i <= weeks; i++) {
    CalendarDate.push(makeDay(i));
  }

  const onTouchHandler = date => {
    console.log(date.date);
    if (date.month === 'this') {
      setClickDate(date.date);
    }
    if (date.month === 'last') {
      onDecrease();
      setClickDate(date.date);
    }
    if (date.month === 'next') {
      onIncrease();
      setClickDate(date.date);
    }
  };
  console.log(clickDate);

  return (
    <View>
      {CalendarDate.map((el, idx) => (
        <View key={idx} style={styles.WeekContainer}>
          {el.map(date =>
            clickDate === date.date && date.thisMonth ? (
              <TouchableOpacity
                key={date.date}
                style={styles.ClickDateBox}
                onPress={() => onTouchHandler(date)}>
                <Text style={{color: date.color, textAlign: 'center'}}>
                  {date.date}{' '}
                </Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                key={date.date}
                style={styles.DateBox}
                onPress={() => onTouchHandler(date)}>
                <Text style={{color: date.color, textAlign: 'center'}}>
                  {date.date}{' '}
                </Text>
              </TouchableOpacity>
            ),
          )}
        </View>
      ))}
    </View>
  );
};

export default CalendarDates;

const styles = StyleSheet.create({
  WeekContainer: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  DateBox: {
    height: 55,
    width: '12%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ClickDateBox: {
    height: 40,
    width: '12%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#54C4FF',
    borderRadius: 50,
    borderWidth: 2,
  },
});
