import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants/uiDesign';

type Props = {
  name: string;
  options: string[];
};

export default function JobOptions({ name, options }: Props) {
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  return (
    <>
      <Pressable
        style={styles.card}
        onPress={() => setVisible(true)}
      >
        <View style={styles.cardHeader}>
          <Text style={styles.title}>{name}</Text>
          <Ionicons name="arrow-down-outline" size={28} />
        </View>
      </Pressable>

      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.modal}>

            <Text style={styles.title}>{name}</Text>
            <View style={styles.divider} />

            {options.map((option) => (
              <Pressable
                key={option}
                style={styles.option}
                onPress={() => setSelectedOption(option)}
              >
                <View style={styles.radioCircle}>
                  {selectedOption === option && (
                    <View style={styles.selectedCircle} />
                  )}
                </View>

                <Text style={styles.label}>{option}</Text>
              </Pressable>
            ))}

            <Pressable
              style={styles.closeButton}
              onPress={() => setVisible(false)}
            >
              <Text style={styles.closeText}>Close</Text>
            </Pressable>

          </View>
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.white,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.body,
    color: COLORS.black,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    padding: 20,
  },
  modal: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderRadius: 15,
  },
  divider: {
    height: 1,
    backgroundColor: COLORS.whitegray,
    marginVertical: 12,
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
  closeButton: {
    backgroundColor: COLORS.black,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  closeText: {
    color: COLORS.white,
    fontFamily: FONTS.medium,
    fontSize: SIZES.body,
  },
});
