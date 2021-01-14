import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  Pressable,
  Platform,
  TextInput,
  SafeAreaView,
  Alert,
} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {SCREEN_NAMES} from '../utils';
import theme from '../theme';
import locale from '../locales';
import IconDown from '../../assets/icons/iconDown.svg';
import {GradientButton, ProgressBar} from '../components';

const {fonts, appStyles, colors} = theme;

const EnterPhone = ({navigation}) => {
  const [country, setCountry] = useState({phonePrefix: '+20', flag: '🇪🇬'});
  const [isSendDisabled, setIsSendDisabled] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');

  const onPressCountry = () => {
    Alert.alert('You pressed country!');
    setCountry({phonePrefix: '+20', flag: '🇪🇬'});
  };

  const onPressSendCode = () => {
    if (!isSendDisabled) {
      const pushAction = StackActions.push(SCREEN_NAMES.ENTER_CODE, {
        phoneNumber: country.phonePrefix + phoneNumber,
      });
      navigation.dispatch(pushAction);
    }
  };

  const onChangePhoneNumber = (value) => {
    const phoneRe = new RegExp(
      '^[+]?\\d{2,}?[(]?\\d{2,}[)]?[-\\s.]?\\d{2,}?[-\\s.]?\\d{2,}[-\\s.]?\\d{0,9}$',
    );
    setIsSendDisabled(!phoneRe.test(value));
    setPhoneNumber(value);
  };

  return (
    <SafeAreaView style={theme.appStyles.mainContainer}>
      <ProgressBar />
      <KeyboardAvoidingView
        enabled
        keyboardVerticalOffset={20}
        style={[appStyles.mainContainer, styles.container]}
        behavior={Platform.OS === 'ios' ? 'padding' : null}>
        <View>
          <Text
            style={[fonts.fontStyles.headline, {color: colors.primaryDark}]}>
            {locale('onboarding1')}
          </Text>
          <View style={styles.secondaryContainer}>
            <Pressable onPress={onPressCountry}>
              <View style={styles.countryContainer}>
                <Text
                  style={[fonts.fontStyles.input, {color: colors.primaryDark}]}>
                  {`${country.flag} ${country.phonePrefix}`}
                </Text>
                <IconDown />
              </View>
            </Pressable>
            <View style={styles.inputContainer}>
              <TextInput
                value={phoneNumber}
                onChangeText={onChangePhoneNumber}
                keyboardType={'numeric'}
                selectionColor={colors.primaryDark}
                style={[fonts.fontStyles.input, styles.input]}
              />
            </View>
          </View>
        </View>
        <GradientButton
          isDisabled={isSendDisabled}
          title={locale('sendCode')}
          onPress={onPressSendCode}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 81,
    marginBottom: 15.5,
    justifyContent: 'space-between',
    paddingHorizontal: theme.metrics.onboardingHorizontalPadding,
  },
  secondaryContainer: {
    flexDirection: 'row',
    marginTop: 89.5,
    alignItems: 'center',
    paddingHorizontal: 23,
  },
  countryContainer: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderBottomColor: colors.primaryGray,
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    height: 40,
    flex: 1,
    marginLeft: 8,
    borderBottomWidth: 1,
    borderBottomColor: colors.primaryGray,
    alignItems: 'center',
  },
  input: {
    color: colors.primaryDark,
    flex: 1,
  },
});
export default EnterPhone;
