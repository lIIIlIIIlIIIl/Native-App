import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import MyCalendar from '../Components/MyCalendar';

const CalendarScreen = () => {
  return (
    <SafeAreaView>
      <View style={styles.Container}>
        <MyCalendar />
      </View>
    </SafeAreaView>
  );
};

export default CalendarScreen;

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
  },
});
