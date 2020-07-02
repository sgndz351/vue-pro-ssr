import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export function createStore () {
  return new Vuex.Store({
    state: () => ({
        $precept: {
            title: "",
            metas: ""
        }
    }),

    actions: {
        fetchPrecept ({ commit }, { title, metas } ) {
            let payload = new Promise((resolve) => {
                resolve({ title, metas })
            })

            return payload.then(({ title, metas }) => {
                commit('setPrecept', { title, metas })
            })
        }
    },

    mutations: {
        setPrecept (state, { title, metas }) {
            let str = "";
            metas.forEach(meta => {
                str += `<meta ${ Object.keys(meta).map(key => `${key}="${meta[key]}"`).join(" ") } />`;
            })

            Vue.set(state.$precept, 'title', title)
            Vue.set(state.$precept, 'metas', str)
        }
    }
  })
}