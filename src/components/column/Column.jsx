import React, { Component } from 'react';
import styled from 'styled-components';
import ListItem from '../list-item/ListItem';

export default class Column extends Component {
  render() {
    return (
      <Container>
        <Title>{this.props.column.title}</Title>
        <List>
          {this.props.recipes.map(recipe => (
            <ListItem key={recipe.id} recipe={recipe} />
          ))}
        </List>
      </Container>
    );
  }
}

const Container = styled.div`
  margin: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const List = styled.div`
  padding: 8px;
`;
