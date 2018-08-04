export const Mutations = {
  SET_USER: 'SET_USER',
  SET_DASHBOARD: 'SET_DASHBOARD',
  ADD_DASHBOARD: 'ADD_DASHBOARD',
  REMOVE_DASHBOARD: 'REMOVE_DASHBOARD',
  SET_FRIENDS: 'SET_FRIENDS',
  ADD_FRIEND: 'ADD_FRIEND',
  SET_FRIEND_REQUEST: 'SET_FRIEND_REQUEST',
  REMOVE_FRIEND_REQUEST: 'REMOVE_FRIEND_REQUEST',
  ADD_FRIEND_REQUEST: 'ADD_FRIEND_REQUEST',
}


export default {
  [Mutations.SET_USER](state, user) {
    state.user = user;
  },
  [Mutations.SET_DASHBOARD](state, dashboard) {
    state.dashboard = dashboard;
  },
  [Mutations.ADD_DASHBOARD](state, dashboard) {
    state.dashboard.push(dashboard);
  },
  [Mutations.REMOVE_DASHBOARD](state, index) {
    state.dashboard.splice(index, 1);
  },
  [Mutations.SET_FRIENDS](state, friends) {
    state.friends = friends;
  },
  [Mutations.ADD_FRIEND](state, friend) {
    state.friends.push(friend);
  },
  [Mutations.SET_FRIEND_REQUEST](state, friendRequest) {
    state.friendRequests = friendRequest;
  },
  [Mutations.ADD_FRIEND_REQUEST](state, friendRequest) {
    state.friendRequests.push(friendRequest);
  },
  [Mutations.REMOVE_FRIEND_REQUEST](state, index) {
    state.friendRequests.splice(index, 1);
  }
}