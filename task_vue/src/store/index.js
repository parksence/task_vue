import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        comments: {}, // 게시물 ID에 대한 댓글을 저장할 객체
    },
    actions: {
        addComment({ commit }, { postId, comment }) {
            console.log('addComment', postId, comment);
            commit('ADD_COMMENT', { postId, comment });
        }
    },
    getters: {
        getComments: (state) => (postId) => {
            // postId에 해당하는 댓글 반환, 없으면 빈 배열
            return state.comments[postId] || [];
        },
        getCommentCount: (state) => (postId) => {
            return (state.comments[postId] || []).length;
        }
    },
    mutations: {
        ADD_COMMENT(state, { postId, comment }) {
            if (!state.comments[postId]) {
                state.comments[postId] = [];
            }
            state.comments[postId].push(comment);
        }
    },
    plugins: [createPersistedState()] // 로컬 스토리지에 저장
});
