

import Profile from './Profile';
import Statistics from './Statistics'
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';

import user from './user.json'
import statisticalData from './statistical-data.json';
import friends from './friends.json'
import transactions from './transactions.json'

export default function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        statsFollowers={user.stats.followers}
        statsViews={user.stats.views}
        statsLikes={user.stats.likes}
      />
      <Statistics 
      title="Upload stats" 
      stats={statisticalData} 
      />

      <FriendList 
      friends={friends} 
      />

      <TransactionHistory 
      items={transactions} 
      />;

    </div>
  );
}


