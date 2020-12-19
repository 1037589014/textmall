import axios from 'axios'

export function request(config) {
    const instance = axios.create({
            baseURL: 'http://152.136.185.210:7878/api/m5',
            timeout: 5000
        })
        // 响应拦截  拦截响应res
    instance.interceptors.response.use(res => {
        // console.log(res);
        // 拦截后处理完返回数据  res.data才是需要的数据
        return res.data
    }, err => {
        console.log(err);
    })

    return instance(config)
}