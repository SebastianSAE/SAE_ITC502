import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS, SIZES, STYLES } from '../constants/uiDesign';

type Props = {
  title: string;
  company: string;
  jobtype: string;
  location: string;
  salary: string;
  description: string;
  icon: any;
};

export default function JobCard({
  title,
  company,
  jobtype,
  location,
  salary,
  description,
  icon,
}: Props) {
  const [visible, setVisible] = useState(false);

  return (
    <>
        <Pressable
        style={styles.card}
        onPress={() => setVisible(true)}
        >
        <View style={STYLES.imageHeader}>
            <Image source={icon} style={styles.companyIcon} />

            <View style={{ flex: 1 }}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{company}</Text>
            </View>
        </View>

        <Text style={styles.text}>-----------------------------------------------</Text>
        <Text style={styles.salary}>{jobtype} · {salary}  </Text>
        <View style={{ flexDirection: 'row', gap: 8, alignItems: 'center' }}>
            <Ionicons name="location-outline" size={20}></Ionicons>
            <Text style={styles.text}>{location}</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={styles.hint}>Tap to see details</Text>
            <Ionicons name="bookmark-outline" size={28}></Ionicons>
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
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{company} · {location}</Text>
            <Text style={styles.salary}>{salary}</Text>

            <Text style={styles.description}>
              {description}
            </Text>

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
    backgroundColor: COLORS.card,
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
  },
  title: {
    fontFamily: FONTS.bold,
    fontSize: SIZES.body,
    color: COLORS.black,
  },
  text: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.body,
    color: COLORS.blackgray,
    marginTop: 5,
  },
  salary: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.body,
    color: COLORS.black,
    marginTop: 10,
  },
  hint: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.body,
    color: COLORS.blackgray,
    marginTop: 8,
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
  description: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.body,
    color: COLORS.black,
    marginTop: 15,
    lineHeight: 24,
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


companyIcon: {
  width: 45,
  height: 45,
  resizeMode: 'contain',
  borderRadius: 8,
},
});