import { createStore, Store, useStore as baseUseStore } from 'vuex'
import { InjectionKey } from 'vue'

export interface RootState {
  empty: unknown
}

export interface TypeModule extends RootState {

}

interface TypeStore extends Store<RootState> {
  state: TypeModule
}

export const key: InjectionKey<Store<TypeModule>> = Symbol('InjectionKey')

export const store = createStore<RootState>({
  strict: process.env.NODE_ENV !== 'production',
  modules: {

  },
  mutations: {
    CLEAR_STATE (state: object) {
      Object.keys(state).forEach(storeKey => {
        Object.keys(state[storeKey]).forEach(stateKey => {
          if (Array.isArray(state[storeKey][stateKey])) {
            state[storeKey][stateKey] = []
          } else if (typeof state[storeKey][stateKey] === 'boolean') {
            state[storeKey][stateKey] = false
          } else {
            state[storeKey][stateKey] = ''
          }
        })
      })
    }
  }
}) as unknown as TypeStore

export function useStore<T = TypeModule> () {
  return baseUseStore<T>(key)
}
