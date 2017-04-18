/**
 * Created by sofia on 2017/4/18.
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state  = {
  notes : [],
  activeNote : {}
};

const mutations = {
  ADD_NOTE(state){
    const newNote = {
      text : 'new note',
      favorite : false
    };
    state.notes.push(newNote);
    state.activeNote = newNote;
  },

  EDIT_NOTE(state, text){
    state.activeNote.text = text;
  },

  SET_ACTIVE_NOTE(state, note){
    state.activeNote = note;
  },

  TOGGLE_FAVORITE(state){
    state.activeNote.favorite = !state.activeNote.favorite;
  },

  DELETE_NOTE(state){
    state.notes.splice(state.notes.indexOf(state.activeNote), 1);
    state.activeNote = state.notes[0];
  }
};

const actions = {
  addNote({commit}){
    commit('ADD_NOTE');
  },

  editNote({commit}, text){
    commit('EDIT_NOTE', text);
  },

  updateActiveNote({commit}, note){
    commit('SET_ACTIVE_NOTE', note);
  },

  toggleFavorite({commit}){
    commit('TOGGLE_FAVORITE');
  },

  deleteNote({commit}){
    commit('DELETE_NOTE')
  }
};

const getters = {
  notes : state => state.notes,
  activeNote : state => state.activeNote
};

export default new Vuex.Store({
  state, mutations, actions, getters
})
