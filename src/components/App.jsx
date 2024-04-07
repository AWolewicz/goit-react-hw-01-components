import { Profile } from "./Profile/Profile";
import user from '../dataJSON/user.json'
import { Statistics } from "./Statistics/Statistics";
import data from '../dataJSON/data.json'
import { FriendList } from "./FriendList/FriendList";
import friends from '../dataJSON/friends.json'
import { TransactionHistory } from "./Transaction/TransactionHistory";
import items from '../dataJSON/transactions.json'

export const App = () => {
  return (
    <>
      <div style={{
          height: '100vh',
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#010101'
        }}>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats} />
        <Statistics title="Upload stats" data={data} />
        <Statistics data={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={items}/>
      </div>
  </>
  );
};
