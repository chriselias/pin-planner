import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import recipeData from '../../data/recipes';
import Column from '../column/Column';

export default class Columns extends Component {
  state = recipeData;

  onDragEnd = result => {
    //
  };
  render() {
    return this.state.columnOrder.map(columnId => {
      const column = this.state.columns[columnId];
      const recipes = column.recipeIds.map(
        recipeId => this.state.recipes[recipeId]
      );

      return <Column key={column.id} column={column} recipes={recipes} />;
    });
  }
}
