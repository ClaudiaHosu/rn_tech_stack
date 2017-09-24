import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';
import PropTypes from 'prop-types';

class ListItem extends Component {
  render() {

    const { titleStyle } = styles;

    return (
      <CardSection>
        <Text style={titleStyle}>{this.props.library.title}</Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
}

ListItem.propTypes = {
  library: PropTypes.object
}

export default ListItem;