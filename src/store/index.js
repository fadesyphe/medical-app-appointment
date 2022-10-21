import { createStore } from 'vuex'

export default createStore({
  state: {
    personal: 'Yury',
    newNotifications: false,
    doctorsList: [
      {
        photo: 'wilson',
        bgColor: '#FFF2E4',
        bgBlur: 'pink-bg',
        name: 'Dr. Jenny Wilson',
        spezialization: 'dental surgeon',
        rating: '4.8'
      },

      {
        photo: 'watson',
        bgColor: '#D0F8EC',
        bgBlur: 'blue-bg',
        name: 'Dr. Kristin Watson',
        spezialization: 'general dentist',
        rating: '4.9'
      },
      {
        photo: 'wilson',
        bgColor: '#FFF2E4',
        bgBlur: 'pink-bg',
        name: 'Dr. Jenny Wilson',
        spezialization: 'dental surgeon',
        rating: '4.8'
      },
      {
        photo: 'watson',
        bgColor: '#D0F8EC',
        bgBlur: 'blue-bg',
        name: 'Dr. Kristin Watson',
        spezialization: 'general dentist',
        rating: '4.9'
      },
      {
        photo: 'wilson',
        bgColor: '#FFF2E4',
        bgBlur: 'pink-bg',
        name: 'Dr. Jenny Wilson',
        spezialization: 'dental surgeon',
        rating: '4.8'
      },
      {
        photo: 'watson',
        bgColor: '#D0F8EC',
        bgBlur: 'blue-bg',
        name: 'Dr. Kristin Watson',
        spezialization: 'general dentist',
        rating: '4.9'
      }
    ]
  },
  getters: {},
  mutations: {},
  actions: {}
})
