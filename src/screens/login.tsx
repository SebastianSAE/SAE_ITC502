import { Image, Text, View } from 'react-native';
import TextInputButton from '../components/inputButton';
import NavigationButton from '../components/navigationButton';
import { STYLES } from '../constants/uiDesign';

export default function LoginScreen() {
  return (
    <View style={STYLES.container}>
      <View style={STYLES.headingContainer}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{
            width: 130,
            height: 130,
            resizeMode: 'contain',
          }}
        />
        <Text style={[STYLES.title, { marginBottom: 20 }]}>Student Jobs</Text>
        <Text style={STYLES.subtitle}>Welcome Back!</Text>
      </View>

      <View style={STYLES.formContainer}>
        <TextInputButton placeholder = "Email Address" />
        <TextInputButton 
        placeholder = "Password"
        secureTextEntry = {true} 
        />
      
        <NavigationButton
              title="Continue"
              destination="Splash"
        />     
      </View>

      <View style={STYLES.footerContainer}>
        <Text style={[STYLES.footerText, {marginBottom:10}]}> Forgot your password? </Text>
        <Text style={STYLES.subtitle}> New user? Create an Account </Text>
        <Text style={STYLES.label}> Enter your email to sign up for this app </Text>
      </View>

      <View style={[STYLES.formContainer, { marginBottom: 20 }]}>
        <TextInputButton placeholder = "email@domain.com" />
        <NavigationButton
              title="Continue"
              destination="Splash"
        />
      </View>

      <View style={STYLES.footerContainer}>
        <Image
          source={require('../../assets/images/google&apple.png')}
          style={{
            width: 420,
            height: 140,
          }}
        />     
      </View>

      <View style={STYLES.footerContainer}>
        <Text style={STYLES.footerText}>By clicking continue, you agree to our Terms of Service and Privacy Policy</Text>
      </View>

    </View>
  );
}
