import {Route, RouteList} from '@/model';

// state
const state = (): RouteList => ({
    list: []
});

// getters
const getters = {
    length(state) {
        return state.list.length;
    },
    getAll: (state) => () => {
        return state.list;
    }
};

const mutations = {
    add(state, route: Route) {
        state.list.push(route);
    },
    addAll(state, routes: Array<Route>) {
        if (routes) {
            for (let i = 0; i < routes.length; i++) {
                state.list.push(routes[i]);
            }
        }
    }
};

const actions = {
    add({commit}, route: Route) {
        commit('add', route);
    },
    addAll({commit}, routes: Array<Route>) {
        commit('addAll', routes);
    }
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
};

