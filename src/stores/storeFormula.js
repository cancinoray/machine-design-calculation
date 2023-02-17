import { defineStore, acceptHMRUpdate } from 'pinia';

export const useStoreFormula = defineStore({
  state: () => {
    return {
      formula
    }
  },

  actions: {

  },

  getters: {

  }
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStoreFormula, import.meta.hot));
}