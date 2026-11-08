import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, TextInput, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants/uiDesign';

type Props = {
  placeholder: string;
};

export default function Searcher({ placeholder }: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={COLORS.blackgray}
      />

      <Ionicons
        name="search"
        size={22}
        color={COLORS.blackgray}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 30,
    paddingHorizontal: 15,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontFamily: FONTS.regular,
    fontSize: SIZES.body,
    color: COLORS.black,
    paddingVertical: 10,
  },
});