//import { FriendListItem } from './FriendLIstItem';

export const FriendsList = ({ friends }) => {
  return (
    <>
      <section className="section-list-friends">
        <ul className="friend-list">
          {friends.map(({ avatar, name, isOnline, id }) => {
            return (
              <li key={id} className="friend-item">
                <span className="friend-status">{isOnline}</span>
                <img
                  src={avatar}
                  alt="friend avatar"
                  className="friend-avatar"
                />
                <p className="friend-name">{name}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
