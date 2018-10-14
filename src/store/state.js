
let defCity = '南京'
let defBanner = '著名景点'
try {
  if (localStorage.city) {
    defCity = localStorage.city
  }
  if (localStorage.baner) {
    defBanner = localStorage.banner
  }
} catch (e) {
}
export default {
  city: defCity,
  banner: defBanner
}
