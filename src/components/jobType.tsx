import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants/uiDesign';

const jobTypes = ['On-site', 'Remote', 'Hybrid'];

export default function JobTypeFilter() {
  const [selectedType, setSelectedType] = useState('On-site');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Job type</Text>

      <View style={styles.divider} />

      {jobTypes.map((type) => (
        <Pressable
          key={type}
          style={styles.option}
          onPress={() => setSelectedType(type)}
        >
          <View style={styles.radioCircle}>
            {selectedType === type && (
              <View style={styles.selectedCircle} />
            )}
          </View>

          <Text style={styles.label}>{type}</Text>
        </Pressable>
      ))}
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
    marginBottom: 10,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.whitegray,
    marginBottom: 8,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    gap: 12,
  },
  label: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.body,
    color: COLORS.black,
  },
  radioCircle: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: COLORS.black,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedCircle: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: COLORS.background,
  },
});
