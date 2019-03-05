//数据仓库
let state = {
  count: 0,
  footFlag: true,
  loadingFlag: true,
  user: getuser(),
  userlogin: getuserlogin(),
  shopcar: get()
}

function get(){
  return localStorage.getItem('cars')?JSON.parse(localStorage.getItem('cars')):[]
}

function getuser(){
  return localStorage.getItem('users')?JSON.parse(localStorage.getItem('users')):[]
}

function getuserlogin(){
  return localStorage.getItem('userlogin')?JSON.parse(localStorage.getItem('userlogin')):false
}
  
export default state