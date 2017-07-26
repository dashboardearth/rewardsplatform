import React, { Component, PropTypes } from 'react';
import { Row } from './Row';
import { List } from 'react-virtualized';
import axios from 'axios';
import 'react-virtualized/styles.css';

export class LeaderBoard extends Component {

  constructor() {
    super();
    this.state = { users: [], fakeCommits: [] }
  }

  style = {
    border: "2px solid #666666",
    margin: '20px',
  }

  componentDidMount() {
    // Get random users from GitHub
    axios.get('https://api.github.com/users')
      .then(({data}) => {
        this.setState({ users: data });
      })
    // Set fake number of commits
    this.setState({ fakeCommits: this.renderFakeCommits() })
  }

  renderFakeCommits = () => {
    let fakeCommits = [];
    for (let i = 0; i < 30; i++) {
      fakeCommits.push(Math.random().toString().split('').splice(2, 2).join(''));
    }
    return fakeCommits;
  }

  rowRenderer = ({
    key,
    index,
    style
  }) => <Row key={key} index={index} style={style} users={this.state.users} commits={this.state.fakeCommits[index]} />

  render() {
    return (
      <div className="leader-board-container">
        <List
          width={500}
          height={300}
          rowCount={this.state.users.length}
          rowHeight={50}
          rowRenderer={this.rowRenderer}
          style={this.style}
        />
      </div>
    );
  }
}