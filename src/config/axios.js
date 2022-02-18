import axios from 'axios'

let instance=axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    responseType: 'json',
    headers: {'X-Requested-Width': 'XMLHttpRequest'}
})

export default instance;