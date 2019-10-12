import React, {Component} from 'react';

import {View, Text, Button} from 'react-native';

// import { Container } from './styles';

export default class Home extends Component {
  handleDrawer = () => {
    const {navigation} = this.props;
    navigation.toggleDrawer();
  };
  render() {
    return (
      <View>
        <Button title="abrir drawer" onPress={this.handleDrawer} />
      </View>
    );
  }
}
