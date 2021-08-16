

import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics'
import FriendListItem from './components/friendList/FriendListItem';
import TransactionHistory from './components/transactionHistory/TransactionHistory';

import user from './data/user.json'
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json'
import transactions from './data/transactions.json'

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        
      />
      <Statistics 
      title="Upload stats" 
      stats={statisticalData} 
      />

      <FriendListItem 
      friends={friends} 
      />

      <TransactionHistory 
      items={transactions} 
      />;

    </div>
  );
}


