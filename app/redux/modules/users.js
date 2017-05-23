const AUTH_USER = 'AUTH_USER'
const UNAUTH_USER = 'UNAUTH_USER'
const FETCHING_USER = 'FETCHING_USER'
const FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE'
const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS'

export function authUser (uid) {
  return {
    'type': AUTH_USER,
    uid,
  }
}

export function unauthUser () {
  return {
    'type': UNAUTH_USER,
  }
}

export function fetchingUser () {
  return {
    'type': FETCHING_USER,
  }
}

export function fetchingUserFailure (error) {
  console.warn(error)
  return {
    'type': FETCHING_USER_FAILURE,
    'error': 'Error fetching user',
  }
}

export function fetchingUserSuccess (uid, user, timestamp) {
  return {
    'type': FETCHING_USER_SUCCESS,
    uid,
    user,
    timestamp,
  }
}

const initialUserState = {
  'lastUpdated': 0,
  'info': {
    'name': '',
    'uid': '',
    'avatar': '',
  },
}

function user (state = initialUserState, action) {
  switch (action.type) {
    case FETCHING_USER_SUCCESS:
      return Object.assign({}, state, {
        'info': action.user,
        'lastUpdated': action.timestamp,
      })
    default:
      return state
  }
}

const initialState = {
  'isFetching': false,
  'error': '',
  'isAuthed': false,
  'authedId': '',
}

export default function users (state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return Object.assign({}, state, {
        'isAuthed': true,
        'authedId': action.uid,
      })
    case UNAUTH_USER:
      return Object.assign({}, state, {
        'isAuthed': false,
        'authedId': '',
      })
    case FETCHING_USER:
      return Object.assign({}, state, {
        'isFetching': true,
      })
    case FETCHING_USER_FAILURE:
      return Object.assign({}, state, {
        'isFetching': false,
        'error': action.error,
      })
    case FETCHING_USER_SUCCESS:
      if (action.user) {
        return Object.assign({}, state, {
          'isFetching': false,
          'error': '',
          [action.uid]: user(state, action),
        })
      } else {
        return Object.assign({}, state, {
          'isFetching': false,
          'error': '',
        })
      }
    default:
      return state
  }
}
