export const state = () => ({
  modal: false,
  status: false
})

export const mutations = {
  openModal(state) {
    state.modal = true
  },
  closeModal(state){
    state.modal = false
  },
  signupDone(state){
    state.status = true 
  },
  back(state){
    state.status = false
  }
}