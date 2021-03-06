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
  autoSignIn({ commit }) {
    this.$axios({
      method: 'get',
      url: '/user',
      withCredentials: true,
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  callSignIn({ commit }, credentials) {
    this.$axios({
      method: 'post',
      url: `/signin`,
      data: credentials,
    })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err.response.data)
      })
  },
  callSignOut({ commit }) {
    this.$axios({
      method: 'post',
      url: `${process.env.API_BASEURL}/signout`,
      withCredentials: true,
    })
      .then((res) => {
        commit('updateUserInfo', '')
        this.$router.push('/')
      })
      .catch((err) => {
        console.log(err)
      })
  },
}
