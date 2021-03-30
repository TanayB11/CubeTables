export const state = () => ({
  email: '',
  firstName: '',
  lastName: '',
})

export const mutations = {
  updateUserInfo(state, userInfo) {
    state.email = userInfo.email
    state.firstName = userInfo.firstName
    state.lastName = userInfo.lastName
  },
}

export const actions = {
  callSignIn({ commit }, credentials) {
    this.$axios({
      method: 'post',
      url: `${process.env.APIBASEURL}/signin`,
      data: credentials,
    })
      .then((res) => {
        commit('updateUserInfo', res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  autoSignIn({ commit }) {
    this.$axios({
      method: 'post',
      url: `${process.env.APIBASEURL}/user`,
      withCredentials: true,
    })
      .then((res) => {
        // commit('updateUserInfo', res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
