import Slider from '@react-native-community/slider';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants/uiDesign';

export default function SalaryFilter() {
  const [salary, setSalary] = useState(50);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Salary Amount</Text>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style= {styles.subtitle}>Rate per hour</Text>
        <Text style={styles.amount}>${salary}</Text>
      </View>

      <Slider
        style={styles.slider}
        minimumValue={0}
        maximumValue={100}
        step={1}
        value={salary}
        onValueChange={setSalary}
        minimumTrackTintColor={COLORS.black}
        maximumTrackTintColor={COLORS.whitegray}
        thumbTintColor={COLORS.black}
      />

      <View style={styles.labels}>
        <Text style={styles.label}>$0</Text>
        <Text style={styles.label}>$100</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    padding: 15,
    borderRadius: 25,
    marginVertical: 10,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.body,
    color: COLORS.black,
  },

  subtitle: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.body,
    color: COLORS.black,
  },
  amount: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.body,
    color: COLORS.black,
    marginTop: 10,
  },
  slider: {
    width: '100%',
    height: 35,
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.body,
    color: COLORS.blackgray,
  },
});