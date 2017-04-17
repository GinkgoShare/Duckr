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
    isFetching,
    error,
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
  usersDucks: {
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
      lastUpdated,
      replies: {
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
