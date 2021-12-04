import React, {Component} from 'react';

import {Button, View, Text} from 'native-base';

import Icon from 'react-native-vector-icons/FontAwesome';

const ButtonLayout = ({
  text,
  testID,
  onPress,
  type,
  icon,
  style,
  color = '#ffcd3a',
}) => {
  if (type == 1) {
    // primary button
    return (
      <Button
        testID={testID}
        accessibilityLabel={testID}
        iconLeft
        light
        style={[
          style,
          {
            backgroundColor: color,
            borderRadius: 50,
            width: 250,
            justifyContent: 'center',
          },
        ]}
        onPress={onPress}>
        <Icon name={icon} color="white" size={20} />
        <Text
          style={{fontWeight: 'bold', color: 'white', fontSize: 16}}
          uppercase={false}>
          {text}
        </Text>
      </Button>
    );
  } else if (type == 2) {
    // secondary button
    return (
      <Button
        testID={testID}
        accessibilityLabel={testID}
        iconLeft
        light
        style={[
          style,
          {
            backgroundColor: color,
            borderRadius: 50,
            width: 130,
            justifyContent: 'center',
          },
        ]}
        onPress={onPress}>
        <Icon name={icon} color="white" size={20} />
        <Text
          style={{fontWeight: 'bold', color: 'white', fontSize: 16}}
          uppercase={false}>
          {text}
        </Text>
      </Button>
    );
  } else {
    // retry button
    return (
      <Button
        testID={testID}
        accessibilityLabel={testID}
        block
        bordered
        style={[style, {borderColor: color}]}
        onPress={onPress}>
        <Icon name={icon} color={'#ffcd3a'} size={20} />
        <Text
          style={{fontWeight: 'bold', fontSize: 16, color: '#ffcd3a'}}
          uppercase={false}>
          {text}
        </Text>
      </Button>
    );
  }
};

export {ButtonLayout};
