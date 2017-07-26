import React, { Component, PropTypes } from 'react';
import './Row.css';
// import halo from '../img/halo.png'

export class Row extends Component {
  static propTypes = {
    commits: PropTypes.string,
    style: PropTypes.object,
    index: PropTypes.number,
    users: PropTypes.array,
    points: PropTypes.string
  }

  render() {
    const { commits, index, points, users, style } = this.props;

    return (
      <div style={style}>
        <div className="de-leaderboard--row">
          <div className='de-leaderboard--user-info-container'>
            <p className='de-leaderboard--p'>{`${index + 1}.`}</p>
            <img src={users[index].avatar_url} alt={users[index].login} className="de-leaderboard--avatar" />
            <p className='de-leaderboard--p'>{users[index].login}</p>
          </div>
          <div className='de-leaderboard--commits-container'>
            <div>
              <p className='de-leaderboard--p-medium de-leaderboard--p'>{`Points: ${points}XP`}</p>
              <p className='de-leaderboard--p-small de-leaderboard--p'>{`Lines of code: ${commits}`}</p>
            </div>
            <img src="https://user-images.githubusercontent.com/10020218/28635322-0791ebe0-71ef-11e7-8aa3-85eadefdcfed.png" alt="Halo" className="de-leaderboard--halo" />
          </div>
        </div>
      </div>
    )
  }
}