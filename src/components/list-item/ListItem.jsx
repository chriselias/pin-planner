import React, { Component } from 'react';
import styled from 'styled-components';

export default class ListItem extends Component {
  render() {
    return <Container>{this.props.recipe.note}</Container>;
  }
}

const Container = styled.div`
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 8px;
  border-radius: 5px;
  font-size: 14px;
`;
