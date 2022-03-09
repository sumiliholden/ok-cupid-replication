export const state = () => ({
  modal: false,
  email: true,
  password: false,
  status: 0
})

export const mutations = {
  openModal(state) {
    state.modal = true
  },
  closeModal(state){
    state.modal = false
  },
  signupDone(state){
    state.status = 1 
  },
  back(state){
    state.status--
  }
}