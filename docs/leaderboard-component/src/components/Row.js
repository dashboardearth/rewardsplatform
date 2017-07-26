import React, { Component, PropTypes } from 'react';
import './Row.css';
import halo from '../img/halo.png'

export class Row extends Component {
  propTypes = {
    commits: PropTypes.string,
    key: PropTypes.string,
    style: PropTypes.style,
    index: PropTypes.number,
    users: PropTypes.object
  }

  style = {
    ...this.props.style,
    border: '.5px solid #c1c1c1', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }

  render() {
    const { commits, key, index, users } = this.props;

    return (
      <div key={key} style={this.style}>
        <div className='user-info-container'>
          <p>{`${index + 1}.`}</p>
          <img src={users[index].avatar_url} alt={users[index].login} className="avatar" />
          <p>{users[index].login}</p>
        </div>
        <div className='commits-container'>
          <p>{`Commits: ${commits}`}</p>
          <img src={halo} alt="" className="halo" />
        </div>
      </div>
    )
  }
}