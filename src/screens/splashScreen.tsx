
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useRef } from 'react';
import { Animated, Image, Text, View } from 'react-native';
import Svg, { Circle } from 'react-native-svg';
import { COLORS, STYLES } from '../constants/uiDesign';
import { RootStackParamList } from '../navigation/appNavigator';

const AnimatedCircle = Animated.createAnimatedComponent(Circle);

export default function SplashScreen() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const progress = useRef(new Animated.Value(0)).current;

const size = 180;
const strokeWidth = 5;
const center = size / 2;
const radius = (size - strokeWidth) / 2;
const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 1500,
      useNativeDriver: false,
    }).start(({ finished }) => {
      if (finished) {
        navigation.replace('Main');
      }
    });
  }, [navigation, progress]);

  // Circular progress animation
  const strokeDashoffset = progress.interpolate({
    inputRange: [0, 1],
    outputRange: [circumference, 0],
  });

  return (
    <View style={STYLES.container}>
      <View style={{ alignItems: 'center', justifyContent: 'center' }}>

        <Image
          source={require('../../assets/images/logo.png')}
          style={{
            width: 130,
            height: 130,
            resizeMode: 'contain',
          }}
        />

        <Text style={[STYLES.title, { marginBottom: 20 }]}>Student Jobs</Text>


<Svg
  width={size}
  height={size}
  viewBox={`0 0 ${size} ${size}`}
>
  <Circle
    cx={center}
    cy={center}
    r={radius}
    stroke={COLORS.white}
    strokeWidth={strokeWidth}
    fill="none"
  />

  <AnimatedCircle
    cx={center}
    cy={center}
    r={radius}
    stroke={COLORS.black}
    strokeWidth={strokeWidth}
    strokeDasharray={circumference}
    strokeDashoffset={strokeDashoffset}
    strokeLinecap="round"
    fill="none"
    rotation="-90"
    origin={`${center}, ${center}`}
  />
</Svg>


        <Text style={STYLES.loadingText}>Loading...</Text>

      </View>
    </View>
  );
}
