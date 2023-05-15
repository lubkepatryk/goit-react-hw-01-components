import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import PropTypes from 'prop-types';
import { Profile } from 'components/profile/profile.js';
import { Statistics } from 'components/statistics/statistics.js';
import { FriendList } from 'components/friendList/friendList.js';
import { TransactionHistory } from 'components/transactionHistory/transactionHistory.js';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Profile />
    <Statistics />
    <FriendList />
    <TransactionHistory />
  </React.StrictMode>
);
