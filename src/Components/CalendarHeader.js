import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const CalendarHeader = ({monthYear, onIncrease, onDecrease}) => {
  return (
    <View style={styles.headerContainer}>
      <View onTouchEnd={onDecrease}>
        <Icon name="keyboard-arrow-left" color="#54C4FF" size={30} />
      </View>
      <Text style={styles.TextStyle}>{monthYear}</Text>
      <View onTouchEnd={onIncrease}>
        <Icon name="keyboard-arrow-right" color="#54C4FF" size={30} />
      </View>
    </View>
  );
};

export default CalendarHeader;

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  TextStyle: {
    fontSize: 18,
  },
});
