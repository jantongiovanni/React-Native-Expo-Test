import React from 'react';
import { View } from 'react-native';
import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  ShineOverlay,
} from 'rn-placeholder';
import { PlayfairText } from '../components/StyledText';

const RecipeListPlaceholderComponent = () => (
  <View>
    <PlayfairText style={{color:'black', fontSize: 46, paddingBottom:16, paddingLeft: 10, alignSelf:'flex-start'}}>Your Recipes</PlayfairText>

    <Placeholder
      style={{height: 100, margin:20, backgroundColor: 'white'}}
      Left={PlaceholderMedia}
      Animation={ShineOverlay}>
      <PlaceholderLine width={80} />
      <PlaceholderLine width={30} />
    </Placeholder>
    <Placeholder
      style={{height: 100, margin:20, backgroundColor: 'white'}}
      Left={PlaceholderMedia}
      Animation={ShineOverlay}>
      <PlaceholderLine width={80} />
      <PlaceholderLine />
      <PlaceholderLine width={30} />
    </Placeholder>
    <Placeholder
      style={{height: 100, margin:20, backgroundColor: 'white'}}
      Left={PlaceholderMedia}
      Animation={ShineOverlay}>
      <PlaceholderLine width={80} />
      <PlaceholderLine />
      <PlaceholderLine width={30} />
    </Placeholder>
    <Placeholder
      style={{height: 100, margin:20, backgroundColor: 'white'}}
      Left={PlaceholderMedia}
      Animation={ShineOverlay}>
      <PlaceholderLine width={80} />
      <PlaceholderLine />
      <PlaceholderLine width={30} />
    </Placeholder>
    <Placeholder
      style={{height: 100, margin:20, backgroundColor: 'white'}}
      Left={PlaceholderMedia}
      Animation={ShineOverlay}>
      <PlaceholderLine width={80} />
      <PlaceholderLine />
      <PlaceholderLine width={30} />
    </Placeholder>
  </View>
);

export default RecipeListPlaceholderComponent;
