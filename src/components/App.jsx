import { Profile } from './Profile/Profile';
import user from '../assets/user.json';
import { Statistics } from './statistics/Statistics';
import data from '../assets/data.json';
import friends from '../assets/friends.json';
import { TransactionHistory } from './transaction/TransactionHistory';
import transactions from '../assets/transactions.json';
import { FriendsList } from './FriendList/FriendList';

export const App = () => {
  return (
    <div
    // style={{
    //   height: '100vh',
    //   display: 'flex',
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   fontSize: 40,
    //   color: '#010101',
    // }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
