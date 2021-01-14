import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Alert,
} from 'react-native';
import {StackActions} from '@react-navigation/native';
import {SCREEN_NAMES} from '../utils';
import theme from '../theme';
import locale from '../locales';
import {ProgressBar, Button} from '../components';
import SmoothPinCodeInput from 'react-native-smooth-pincode-input';

const {fonts, appStyles, colors} = theme;

const EnterCode = ({
  navigation,
  route: {
    params: {phoneNumber},
  },
}) => {
  const [code, setCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const onChangeCode = (value) => {
    setCode(value);
  };

  const onPressResendCode = () => {
    Alert.alert('You pressed resend code!');
  };

  const onCompleteCode = () => {
    setIsLoading(true);
    //To mimic waiting for a response from a sever
    setTimeout(() => {
      setIsLoading(false);
      const pushAction = StackActions.push(SCREEN_NAMES.PROFILE);
      navigation.dispatch(pushAction);
    }, 3000);
  };

  return (
    <SafeAreaView style={theme.appStyles.mainContainer}>
      <ProgressBar />
      <KeyboardAvoidingView
        enabled
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={[appStyles.mainContainer, styles.container]}>
        <View>
          <Text
            style={[fonts.fontStyles.headline, {color: colors.primaryDark}]}>
            {locale('onboarding2')}
          </Text>
          <Text style={[fonts.fontStyles.caption, styles.phoneNumberText]}>
            {locale('codeSentTo')}
            {phoneNumber}
          </Text>
          <Button
            onPress={onPressResendCode}
            title={locale('resendCode')}
            textStyle={[fonts.fontStyles.button, styles.resendCode]}
            style={[styles.resendCodeContainer]}
          />
          <View style={[styles.inputContainer]}>
            {isLoading ? (
              <ActivityIndicator />
            ) : (
              <SmoothPinCodeInput
                cellStyle={styles.cellStyle}
                value={code}
                autoFocus
                caretHidden={false}
                cellStyleFocused={[]}
                textStyle={[
                  fonts.fontStyles.input,
                  {color: colors.primaryDark},
                ]}
                cellStyleFilled={styles.cellStyleFilled}
                animationFocused={null}
                onTextChange={onChangeCode}
                onFulfill={onCompleteCode}
              />
            )}
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 81,
    paddingBottom: 15.5,
    justifyContent: 'space-between',
    paddingHorizontal: theme.metrics.onboardingHorizontalPadding,
  },
  phoneNumberText: {
    marginTop: 8,
    color: colors.primaryDark,
    opacity: 0.4,
  },
  resendCodeContainer: {
    height: 30,
    width: '100%',
  },
  resendCode: {
    marginTop: 8,
    color: colors.lightBlue,
  },
  cellStyle: {
    width: 45.5,
    height: 38,
    borderBottomColor: colors.primaryGray,
    borderBottomWidth: 1,
  },
  cellStyleFilled: {
    justifyContent: 'flex-start', //I've left this to the start as in design
  },
  inputContainer: {
    marginTop: 100,
    alignSelf: 'center',
  },
});

export default EnterCode;
