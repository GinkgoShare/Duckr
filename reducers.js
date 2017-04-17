/* 

These two are equivalent with object spreading syntax currently in Stage 2

return Object.assign({}, state, {
  isAuthed: true,
  authedId: action.uid
})

return {
  ...state,
  isAuthed: true,
  authedId: action.uid
}

I've decided not to use this syntax and I will continue using Object.assign()

*/

// Users
const initialState = {
  isFetching: false,
  error: "",
  isAuthed: false,
  authedId: ""
}

export default function users(state = initialState, action) {
  switch(action.type) {
    case AUTH_USER:
      return Object.assign({}, state, {
        isAuthed: true,
        authedId: action.uid
      })
    case UNAUTH_USER:
      return Object.assign({}, state, {
        isAuthed: false,
        authedId: ""
      })
    case FETCHING_USER:
      return Object.assign({}, state, {
        isFetching: true
      })
    case FETCHING_USER_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      })
    case FETCHING_USER_SUCCESS:
      if (action.user) {
        return Object.assign({}, state, {
          isFetching: false,
          error: "",
          [action.uid]: user(state, action)
        })
      } else { 
        return Object.assign({}, state, {
          isFetching: false,
          error: ""
        })
      }
    default:
      return state
  }
}

const initialUserState = {
  lastUpdated: 0,
  info: {
    name: "",
    uid: "",
    avatar: ""
  }
}

function user(state = initialUserState, action) {
  switch(action.type) {
    case FETCHING_USER_SUCCESS:
      return Object.assign({}, state, {
        info: action.user,
        lastUpdated: action.timestamp
      })
    default:
      return state
  }
}

// Ducks
const initialState = {
  isFetching: true,
  error: '',
}

export default function ducks(state = initialState, action) {
  switch(action.type) {
    case FETCHING_DUCK:
      return Object.assign({}, state, {
        isFetching: true,
        error: ""
      })
    case FETCHING_DUCK_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      })
    case ADD_DUCK:
    case FETCHING_DUCK_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: "",
        [action.duck.duckId]: action.duck
      })
    case REMOVE_FETCHING:
      return Object.assign({}, state, {
        isFetching: false,
        error: ""
      })
    case ADD_MULTIPLE_DUCKS:
      return Object.assign({}, state, action.ducks)
    default: 
      return state
  }
}

// Feed
const initialState = {
  newDucksAvailable: false,
  newDucksToAdd: [],
  isFetching: false,
  error: '',
  duckIds: []
}

export default function feed(state = initialState, action) {
  switch(action.type) {
    case SETTING_FEED_LISTENER:
      return Object.assign({}, state, { isFetching: true })
    case SETTING_FEED_LISTENER_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      })
    case SETTING_FEED_LISTENER_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: "",
        duckIds: action.duckIds,
        newDucksAvailable: false
      })
    case ADD_NEW_DUCK_ID_TO_FEED:
      return Object.assign({}, state, {
        newDucksToAdd: [action.duckId].concat(state.newDucksToAdd),
        newDucksAvailable: true
      })
    case RESET_NEW_DUCKS_AVAILABLE:
      return Object.assign({}, state, {
        duckIds: state.newDucksToAdd.concat(state.ducksIds),
        newDucksToAdd: [],
        newDucksAvailable: false
      })
    default: 
      return state
  }
}

// Listeners
export default function listeners(state = {}, action) {
  switch(acting.type) {
    case ADD_LISTENER:
      return Object.assign({}, state, { [action.listenerId]: true })
    default:
      return state
  }
}

// Modal
const initialState = {
  duckText: '',
  isOpen: false,
}

export default function modal(state = initialState, action) {
  switch(action.type) {
    case OPEN_MODAL:
      return Object.assign({}, state, { isOpen: true })
    case CLOSE_MODAL:
      return Object.assign({}, state, {
        duckText: "",
        isOpen: false
      })
    case UPDATE_DUCK_TEXT:
      return Object.assign({}, state, { duckText: action.newDuckText })
    default:
      return state
  }
}

// Replies
const initialState = {
  isFetching: true,
  error: '',
}

export default function replies(state = initialState, action) {
  switch(action.type) {
    case FETCHING_REPLIES:
      return Object.assign({}, state, { isFetching : true })
    case ADD_REPLY_ERROR:
    case FETCHING_REPLIES_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      })
    case ADD_REPLY:
    case FETCHING_REPLIES_SUCCESS:
    case REMOVE_REPLY:
      return Object.assign({}, state, {
        isFetching: false,
        error: "",
        [action.duckId]: repliesAndLastUpdated(state[action.duckId], action)
      })
    default:
      return state
  }
}

const initialDuckState = {
  lastUpdated: Date.now(),
  replies: {},
}

function repliesAndLastUpdated(state = initialDuckState, action) {
  switch(action.type) {
    case FETCHING_REPLIES_SUCCESS:
      return Object.assign({}, state, {
        lastUpdated: action.lastUpdated,
        replies: action.replies
      })
    case ADD_REPLY:
    case REMOVE_REPLY:
      return Object.assign({}, state, {
        replies: duckReplies(state.replies, action)
      })
    default:
      return state
  }
}

const initialReply = {
  name: "",
  reply: "",
  uid: "",
  timestamp: 0,
  avatar: "",
  replyId: "",
}

function duckReplies(state = initialReply, action) {
  switch(action.type) {
    case ADD_REPLY:
      return Object.assign({}, state, {
        [action.reply.replyId]: action.reply
      })
    case REMOVE_REPLY:
      return Object.assign({}, state, {
        [action.reply.replyId]: undefined
      })
    default:
      return state
  }
}

// likeCount
const initialState = {
  isFetching: false,
  error: '',
}

export default function likeCount(state = initialState, action) {
  switch (action.type) {
    case FETCHING_COUNT:
      return Object.assign({}, state, { isFetching: true })
    case FETCHING_COUNT_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      })
    case FETCHING_COUNT_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: "",
        [action.duckId]: action.count
      })
    case ADD_LIKE:
    case REMOVE_LIKE:
      return typeof state[action.duckId] === undefined
        ? state
        : Object.assign({}, state, {
          [action.duckId]: count(state[action.duckId], action)
        })
    default:
      return state
  }
}

function count(state = 0, action) {
  switch(action.type) {
    case ADD_LIKE:
      return state + 1
    case REMOVE_LIKE:
      return state - 1
    default:
      return state
  }
}

// usersDucks
const initialState = {
  isFetching: false,
  error: '',
}

export default function usersDucks(state = initialState, action) {
  switch(action.type) {
    case FETCHING_USERS_DUCKS:
      return Object.assign({}, state, { isFetching : true })
    case FETCHING_USERS_DUCKS_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      })
    case FETCHING_USERS_DUCKS_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        error: "",
        [action.uid]: {
          lastUpdated: action.lastUpdated,
          duckIds: action.duckIds
        }
      })
    case ADD_SINGLE_USERS_DUCK:
      return typeof state[action.uid] === undefined
        ? state
        : Object.assign({}, state, {
          isFetching: false,
          error: "",
          [action.uid]: usersDuck(state[action.uid], action)
        })
    default:
      return state
  }
}

const initialUsersDuckState = {
  lastUpdated: 0,
  duckIds: [],
}

function usersDuck(state = initialUsersDuckState, action) {
  switch(action.type) {
    case ADD_SINGLE_USERS_DUCK:
      return Object.assign({}, state, {
        duckIds: state.duckIds.concat([action.duckId])
      })
    default:
      return state
  }
}

// usersLikes
const initialState = {
  isFetching: false,
  error: ""
}

export default function usersLikes(state = initialState, action) {
  switch(action.type) {
    case FETCHING_LIKES:
      return Object.assign({}, state, { isFetching: true })
    case FETCHING_LIKES_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.error
      })
    case FETCHING_LIKES_SUCCESS:
      return Object.assign({}, state, action.likes, initialState)
    case ADD_LIKE:
      return Object.assign({}, state, {
        [action.duckId]: true
      })
    case REMOVE_LIKE:
      return Object.keys(state)
        .filter((duckId) => action.duckId !== duckId)
        .reduce((prev, current) => {
          prev[current] = state[current]
          return prev
        }, {})
    default:
      return state
  }
}
