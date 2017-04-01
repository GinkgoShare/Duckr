/*

Keep data normalized

__Redux Schema__

{
  users: {
    isAuthed,
    isFetching,
    error,
    authedId,
    [uid]: {
      lastUpdated,
      info: {
        uid,
        name,
        avatar,
      }
    }
  },
  modal: {
    duck,
    isOpen,
  }
  ducks: {
    [duckId]: {
      lastUpdated,
      info: {
        avatar,
        name,
        text,
        timestamp,
        likeCount,
        uid,
        duckId,
      }
    }
  },
  userDucks: {
    isFetching,
    error,
    [uid]: [
      duckIds: [duckId, duckId]
    ]
  },
  likeCount: {
    [duckId]: 0
  },
  usersLikes: {
    [duckId]: true
  },
  replies: {
    isFetching,
    error,
    [duckId]: {
      replies: {
        lastUpdated,
        [replyId]: {
          name,
          comment,
          uid,
          timestamp,
          avatar,
        }
      }
    }
  },
  listeners: {
    [listenersId]: true
  },
  feed: {
    isFetching,
    error,
    newDucksAvailable,
    duckIdsToAdd: [duckId, duckId]
  }
}
*/
