import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { LeaderBoard } from './components/LeaderBoard';
// import registerServiceWorker from './registerServiceWorker';


// export default {
  
//   DEConfig: null,
  
//   config: (config) => {
//     this.DEConfig = config;
//   },

//   components: {

//     leaderboard: {

//       new: (config) => {

//         return {
//           render: (args) => {
//             ReactDOM.render(
//               <LeaderBoard 
//                 selector={config.selector || this.DEConfig.selector}
//               />, document.querySelector(config.selector)
//             )
//           }
//         }
//       }
//     }
//   }
// }

ReactDOM.render(<LeaderBoard />, document.getElementById('root'));

// registerServiceWorker();