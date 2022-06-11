import { defineStore } from 'pinia'

export const useDataStore = defineStore({
  id: 'data-store',
  state: () => {
    return {
      dataList: ['twitch'],
    }
  },
  actions: {},
  getters: {
     dataList: state => state.dataList,
  },
})