import React from 'react';
import {
  Alert,
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  ScrollView,
  Pressable,
  View,
  Text,
} from 'react-native';
import locale from '../locales';
import theme from '../theme';

import IconMore from '../../assets/icons/iconMore.svg';
import IconStar from '../../assets/icons/iconStar.svg';
import IconPreferences from '../../assets/icons/iconPreferences.svg';
import IconBirthday from '../../assets/icons/iconBirthday.svg';
import IconHometown from '../../assets/icons/iconHometown.svg';
import IconJob from '../../assets/icons/iconJob.svg';
import IconLocation from '../../assets/icons/iconLocation.svg';
import IconHeight from '../../assets/icons/iconHeight.svg';
import IconReligion from '../../assets/icons/iconReligion.svg';
import IconSmoking from '../../assets/icons/iconSmoking.svg';
import IconPrays from '../../assets/icons/Prays.svg';
import IconHaveKids from '../../assets/icons/iconHaveKids.svg';
import IconHeart from '../../assets/icons/iconHeart.svg';

const {width, height} = Dimensions.get('window');
const imageSize = width - 32;
const {colors, fonts} = theme;

const InfoRow = ({IconComponent, label, containerStyle, textStyle}) => (
  <View style={[styles.infoRow, containerStyle]}>
    <IconComponent fill={colors.primaryDark} />
    <Text style={[styles.infoText, fonts.fontStyles.caption, textStyle]}>
      {label}
    </Text>
  </View>
);

const onPressLike = () => {
  Alert.alert('You pressed like!');
};

const Profile = ({profile}) => {
  return (
    <SafeAreaView
      style={[
        theme.appStyles.mainContainer,
        {backgroundColor: colors.lightGray},
      ]}>
      <StatusBar barStyle="dark-content" backgroundColor={colors.lightGray} />
      <Pressable onPress={onPressLike} style={styles.heartButton}>
        <IconHeart fill={colors.pink} />
      </Pressable>
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.topBar}>
          <IconPreferences />
          <IconMore />
        </View>
        <Image
          style={styles.profileImage}
          source={require('../../assets/images/profile.jpg')}
        />
        <View style={styles.paddedContainer}>
          <View style={styles.nameContainer}>
            <Text style={[fonts.fontStyles.title]}>{profile.name}</Text>
            <IconStar />
          </View>
          <InfoRow
            IconComponent={IconBirthday}
            label={`${profile.age} ${locale('yearsOld')}`}
          />
          <InfoRow IconComponent={IconJob} label={profile.jobType} />
          <InfoRow
            IconComponent={IconLocation}
            label={`${locale('livesIn')} ${profile.city}`}
          />
          <InfoRow
            IconComponent={IconHometown}
            label={`${locale('from')} ${profile.from}`}
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={[fonts.fontStyles.caption, styles.description]}>
            {profile.about}
          </Text>
        </View>
        <View style={styles.aboutContainer}>
          <Text style={[fonts.fontStyles.button, styles.aboutMe]}>
            {locale('aboutMe')}
          </Text>
          <View style={styles.wrapper}>
            <InfoRow
              containerStyle={styles.labelContainer}
              IconComponent={IconHeart}
              label={'Never Married'}
            />
            <InfoRow
              containerStyle={styles.labelContainer}
              IconComponent={IconReligion}
              label={'Muslim Sunni'}
            />
            <InfoRow
              containerStyle={styles.labelContainer}
              IconComponent={IconPrays}
              label={'Prays Occasionally'}
            />
            <InfoRow
              containerStyle={styles.labelContainer}
              IconComponent={IconHeight}
              label={'176 cm'}
            />
            <InfoRow
              containerStyle={styles.labelContainer}
              IconComponent={IconSmoking}
              label={"Doesn't smoke"}
            />
            <InfoRow
              containerStyle={styles.labelContainer}
              textStyle={[fonts.fontStyles.smallCaption]}
              IconComponent={IconHaveKids}
              label={"Doesn't have kids"}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  infoText: {
    marginLeft: 8,
  },
  labelContainer: {
    borderWidth: 2,
    marginRight: 10,
    marginTop: 10,
    height: 36,
    borderColor: colors.darkGray,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 14,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 34,
    marginTop: 12,
    marginBottom: 22,
  },
  profileImage: {
    width: imageSize,
    height: imageSize,
    borderRadius: 16,
  },
  nameContainer: {
    flexDirection: 'row',
    marginTop: 21,
    marginBottom: 3,
    alignItems: 'center',
  },
  description: {
    textAlign: 'center',
    lineHeight: 24,
  },
  descriptionContainer: {
    backgroundColor: 'white',
    padding: 24,
    borderRadius: 16,
    marginTop: 18,
  },
  aboutContainer: {
    backgroundColor: 'white',
    padding: 24,
    paddingBottom: 47,
    borderRadius: 16,
    marginVertical: 16,
  },
  paddedContainer: {
    paddingHorizontal: 9,
  },
  wrapper: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  aboutMe: {
    alignSelf: 'center',
  },
  heartButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    elevation: 4,
    shadowOffset: {height: 3},
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 7,
    backgroundColor: 'white',
    position: 'absolute',
    top: height * 0.49,
    right: 23,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

Profile.defaultProps = {
  profile: {
    name: 'Name',
    age: 26,
    jobType: 'Visual Artist',
    city: 'Garden City, Cairo',
    from: 'Paris, France',
    about:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
      'eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum' +
      ' dolor sit amet. 🙂\n',
  },
};

export default Profile;
