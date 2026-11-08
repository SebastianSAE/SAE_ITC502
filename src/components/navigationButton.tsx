import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable, StyleSheet, Text } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants/uiDesign';
import { RootStackParamList } from '../navigation/appNavigator';

type Props = {
  title: string;
  destination: keyof RootStackParamList;
};

export default function NavigationButton({
  title,
  destination,
}: Props) {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <Pressable
      style={styles.button}
      onPress={() => navigation.navigate(destination)}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.black,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },

  text: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.body,
    color: COLORS.white,
  },
});