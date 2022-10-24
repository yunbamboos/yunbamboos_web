import {RouteList} from '@/model';
// state
const state = (): RouteList => ({
    list: []
});

// getters
const getters = {
    length(state){
        return state.list.length;
    },
    test:() => () => {
        return {a:1}
    }
};

export default {
    namespaced: true,
    state,
    getters,
};

