import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import MyCalendar from '../Components/MyCalendar';

const CalendarScreen = () => {
  return (
    <SafeAreaView style={styles.SafeContainer}>
      <View style={styles.Container}>
        <MyCalendar />
      </View>
    </SafeAreaView>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  SafeContainer: {
    backgroundColor: 'white',
  },
  Container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 20,
  },
});
