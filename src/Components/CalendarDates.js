import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const CalendarDates = ({year, month, firstDay, lastDate}) => {
  const CalendarDate = [];

  const week = Math.ceil((firstDay + lastDate) / 7);

  const makeDay = week => {
    const dates = [];

    if (week === 1) {
      const prevLastDate = parseInt(new Date(year, month, 0).getDate(), 10);
      for (let i = 1; i <= 7; i++) {
        if (i <= firstDay) {
          const now = prevLastDate - firstDay + i;
          dates.push({date: now, color: '#BDBDBD'});
        } else {
          const now = i - firstDay;
          dates.push({date: now, color: '#000000'});
        }
      }
    } else {
      const startDate = (week - 1) * 7;
      for (let i = startDate; i <= week * 7 - 1; i++) {
        if (i - firstDay < lastDate) {
          const now = i - firstDay + 1;
          dates.push({date: now, color: '#000000'});
        } else {
          const now = i - lastDate - firstDay + 1;
          dates.push({date: now, color: '#BDBDBD'});
        }
      }
    }
    return dates;
  };

  for (let i = 1; i <= week; i++) {
    CalendarDate.push(makeDay(i));
  }

  return (
    <View>
      {CalendarDate.map((el, idx) => (
        <View key={idx} style={styles.WeekContainer}>
          {el.map(date => (
            <View key={date.date} style={styles.DateBox}>
              <Text style={{color: date.color}}>{date.date}</Text>
            </View>
          ))}
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
    height: 40,
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
