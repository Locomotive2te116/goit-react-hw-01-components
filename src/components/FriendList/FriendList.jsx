import s from './friend.module.css';

export const FriendsList = ({ friends }) => {
  return (
    <div className={s.wrapper}>
      <section className={s.sectionListFriends}>
        <ul className={s.friendList}>
          {friends.map(({ avatar, name, isOnline, id }) => {
            return (
              <li key={id} className={s.friendItem}>
                <span
                  className={
                    isOnline === true ? s.friendStatus : s.friendStatus2
                  }
                >
                  {isOnline}
                </span>
                <img
                  src={avatar}
                  alt="friend avatar"
                  className={s.friendAvatar}
                />
                <p className={s.friendName}>{name}</p>
              </li>
            );
          })}
        </ul>
      </section>
    </div>
  );
};
