// import PropTypes from 'prop-types';
import { Profile } from 'components/profile/Profile.jsx';
import { Statistics } from 'components/statistics/Statistics.jsx';
import { FriendList } from 'components/friendList/FriendList.jsx';
import { TransactionHistory } from 'components/transactionHistory/TransactionHistory.jsx';
import friends from '../data/friends.json';
import user from '../data/user.json';
import data from '../data/data.json';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      React homework template
    </div>
  );
};
