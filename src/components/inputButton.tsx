import { StyleSheet, TextInput, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants/uiDesign';

type Props = {
  placeholder: string;
  secureTextEntry?: boolean;
};

export default function TextInputButton({
  placeholder,
  secureTextEntry = false,
}: Props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={COLORS.blackgray}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    paddingHorizontal: 10,
  },

  input: {
    fontFamily: FONTS.regular,
    fontSize: SIZES.body,
    color: COLORS.black,
    paddingVertical: 10,
  },
});
