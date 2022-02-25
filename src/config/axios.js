import axios from 'axios'

let instance=axios.create({
    baseURL: "http://localhost:3001/",
    responseType: 'json',
    headers: {'X-Requested-Width': 'XMLHttpRequest'}
})

export default instance;