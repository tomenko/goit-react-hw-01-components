import ProfileItem from '../Profile/Profile';
import css from './App.module.css';
import user from '../../data/user.json';
import Statistics from '../Statistics/Statistics';
import statisticalData from '../../data/statisticalData.json';
import FriendList from '../FriendList/FriendList';
import friends from '../../data/friends.json';
import TransactionHistory from '../TransactionHistory/TransactionHistory';
import transactionData from '../../data/transactionData.json';

const App = () => {
  return (
    <div className = {css.App}>
      <ProfileItem
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistics title="Upload stats" stats={statisticalData} />
      
      <Statistics stats={statisticalData} />

      <FriendList friends={friends} />

      <TransactionHistory  items={transactionData}/>
      
    </div>
  );
};

export default App;
