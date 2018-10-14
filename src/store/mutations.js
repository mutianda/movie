export default {
  changecity (state, city) {
    state.city = city
    try {
      localStorage.city = city
    } catch (e) {}
  },
  changebanner (state, banner) {
    state.banner = banner
    try {
      localStorage.banner = banner
    } catch (e) {}
  }
}
