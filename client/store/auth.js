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
      url: `${process.env.API_BASEURL}/signin`,
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
      method: 'get',
      url: `${process.env.API_BASEURL}/user`,
      withCredentials: true,
    })
      .then((res) => {
        commit('updateUserInfo', res.data)
        this.$router.push('/dashboard')
      })
      .catch((err) => {
        console.log(err)
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
