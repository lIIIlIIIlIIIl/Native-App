import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const days = [
  {day: 'Sun', color: '#F14237'},
  {day: 'Mon', color: '#BDBDBD'},
  {day: 'Tue', color: '#BDBDBD'},
  {day: 'Wed', color: '#BDBDBD'},
  {day: 'Thu', color: '#BDBDBD'},
  {day: 'Fri', color: '#BDBDBD'},
  {day: 'Sat', color: '#54C4FF'},
];

const CalendarDays = () => {
  return (
    <View style={styles.DaysContainer}>
      {days.map((el, idx) => (
        <View key={idx} style={styles.DayBox}>
          <Text style={{color: `${el.color}`}}>{el.day}</Text>
        </View>
      ))}
    </View>
  );
};

export default CalendarDays;

const styles = StyleSheet.create({
  DaysContainer: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  DayBox: {
    height: 40,
    width: '12%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
