import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import { PlayfairText } from '../components/StyledText';
import { RobotoText } from '../components/StyledText';


const { width: screenWidth } = Dimensions.get('window')

  export class Detail extends React.Component {


        render() {
          //const { navigation } = this.props;

          //const itemId = navigation.getParam('itemId', 'NO-ID');
          //const otherParam = navigation.getParam('otherParam', 'some default value');
          return (
            <ScrollView>
              <Image source={require('../assets/images/sesame.jpg')} style={styles.topImage} resizeMode="contain"/>
              <View style={styles.container}>
                <PlayfairText style={styles.titleTextLarge}>Shrimp Hot Pot with Tofu</PlayfairText>
                <RobotoText style={styles.contentText}>This is a classic, healthy Asian dish that is quick and easy to make! </RobotoText>
                <View style={{flexDirection:'row', alignItems: 'flex-start', paddingTop: 20}}>
                  <View style={{flexDirection:'column'}}>
                    <RobotoText style={styles.contentText}>Time:</RobotoText>
                    <PlayfairText stlye={styles.titleTextSmall}>45 min</PlayfairText>
                  </View>
                  <View style={{flexDirection:'column', paddingLeft: 20}}>
                    <RobotoText style={styles.contentText}>Makes:</RobotoText>
                    <PlayfairText stlye={styles.titleTextSmall}>4 servings</PlayfairText>
                  </View>
                </View>

              </View>
            </ScrollView>
          );

        }
      }
export default Detail


const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 20,

  },
  topImage:{
    flex:1,
    width: screenWidth,
    height: screenWidth,
    alignSelf: 'flex-start'
  },

  titleTextLarge:{
    fontSize: 46,
    color: 'black',
    paddingBottom: 14
  },
  titleTextSmall:{
    fontSize: 36,
    color: 'black',
    paddingBottom: 14
  },
  contentText:{
    fontSize: 16,
    color: 'black',
    fontWeight:'400',
  }
});
