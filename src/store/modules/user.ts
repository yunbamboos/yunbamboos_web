import {User} from '@/model';
import {Session} from "@/utils/storage";


const state = (): User => ({
    user_id: '',
    nick_name: '',
    image_id: 0
});

const getters = {
    getUser: (state) => () => {
        return state;
    }
};

const mutations = {
    setUser(state, user: User) {
        state.user_id = user.user_id;
        state.nick_name = user.nick_name;
        state.image_id = user.image_id;
        Session.set('user', state);
    }
}

const actions = {
    setUserFromSession({commit}) {
        let user = Session.get("user");
        if (user) {
            commit('setUser', user);
        }
    },
    setUser({commit}, user:User) {
        commit('setUser', user);
    }
}


export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};

