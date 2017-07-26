import React, { Component, PropTypes } from 'react';
import { Row } from './Row';
import { List, AutoSizer } from 'react-virtualized';
import axios from 'axios';
import 'react-virtualized/styles.css';

export class LeaderBoard extends Component {

  constructor() {
    super();
    this.state = { users: [], fakeCommits: [] }
  }

  style = {
    border: "1px solid #c1c1c1",
    borderRadius: '4px',
    padding: '10px',
    margin: '0 auto'
  }

  componentDidMount() {
    // Set fake number of commits
    this.setState({ fakeCommits: this.renderFakeCommits() })
    // Get random users from GitHub
    axios.get('https://api.github.com/users')
      .then(({data}) => {
        let dataWithCommits = [];
        data.forEach((user, i) => {
          dataWithCommits.push(Object.assign({}, user, {commits: this.state.fakeCommits[i]}));
        })
        dataWithCommits.sort((a, b) => {
          if (a.commits > b.commits) {
            return -1;
          } 
          if (a.commits < b.commits) {
            return 1;
          }
          return 0;
        })
        this.setState({ users: dataWithCommits });
      })
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
  }) => <Row key={key} index={index} style={style} users={this.state.users} commits={this.state.users[index].commits} />

  render() {
    return (
      <div>
        <h2>Leaderboard</h2>
        <AutoSizer disableHeight>
          {({ width }) => (
            <List
              width={width}
              height={500}
              rowCount={this.state.users.length}
              rowHeight={100}
              rowRenderer={this.rowRenderer}
              style={this.style}
            />
          )}
        </AutoSizer>
      </div>
    );
  }
}