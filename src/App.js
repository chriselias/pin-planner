import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import styled from 'styled-components';
import Navbar from './components/navbar/Navbar';
import Columns from './components/columns/Columns';
import './App.css';

class App extends Component {
  render() {
    return (
      <Container>
        <Navbar />
        <Columns />
      </Container>
    );
  }
}

export default App;

const Container = styled.div`
  display: flex;
`;
