
import axios from 'axios'
import {Mutations} from './mutations'

export const Actions = {
  GET_DASHBOARD_ITEMS: 'GET_DASHBOARD_ITEMS',
  ADD_DASHBOARD_ITEM: 'ADD_DASHBOARD_ITEM',
  REMOVE_ITEM_DASHBOARD: 'REMOVE_ITEM_DASHBOARD',
  SET_FRIENDS: 'SET_FRIENDS',
  SEND_FRIEND_REQUEST: 'SEND_FRIEND_REQUEST',
  SET_FRIEND_REQUEST: 'SET_FRIEND_REQUEST',
  REMOVE_FRIEND_REQUEST: 'REMOVE_FRIEND_REQUEST',
  ADD_FRIEND_REQUEST: 'ADD_FRIEND_REQUEST',
}


export default {
  [Actions.GET_DASHBOARD_ITEMS]({commit}) {
    axios.get('/dashboard').then((response) => {
      commit(Mutations.SET_DASHBOARD, response.data);
    }).catch((error) => {
      console.log(error)
    })
  },
  [Actions.REMOVE_ITEM_DASHBOARD]({commit}, payload) {
    axios.delete('/dashboard/' + payload.id).then((response) => {
      commit(Mutations.REMOVE_DASHBOARD, payload.index)
    }).catch((error) => {
      console.log(error);
    })
  },
  [Actions.ADD_DASHBOARD_ITEM]({commit}, data) {
    axios.put('/dashboard', data).then((response) => {
      commit(Mutations.ADD_DASHBOARD, response.data);
    }).catch((error) => {
      console.log(error)
    });
  },
  [Actions.SET_FRIENDS]({commit}) {
    axios.get('/friends').then((response) => {
      commit(Mutations.SET_FRIENDS, response.data);
    });
  },
  [Actions.SEND_FRIEND_REQUEST]({commit}, payload) {
    axios.put('/friends', {user_id: payload.user_id}).then((response) => {
      commit(Mutations.ADD_FRIEND, response.data);
    })
  },

  [Actions.SET_FRIEND_REQUEST]({commit}) {
    axios.get('friendsPending').then((response) => {
      commit(Mutations.SET_FRIEND_REQUEST, response.data)
    })
  },
  [Actions.ADD_FRIEND_REQUEST]({commit}, payload) {
    commit(Mutations.ADD_FRIEND_REQUEST, payload);
  },
  [Actions.REMOVE_FRIEND_REQUEST]({commit}, payload) {
    commit(Mutations.REMOVE_FRIEND_REQUEST, payload.index)
    axios.post('/friendConfirm', {id: payload.id, user_id: payload.user_id, confrim: payload.confrim }).then((response) => {
      if(response.data.accepted === 1) {
        commit(Mutations.ADD_FRIEND, response.data.newFriend)
      }
    });
  },
}