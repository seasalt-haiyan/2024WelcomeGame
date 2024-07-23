import axios from 'axios';

//创建axios实例
const instance = axios.create({
    baseURL: 'http://game.sipc115.com',
    timeout: 5000,
    // headers: {
    //     'Content-Type': 'application/json',
    // },
});

//请求拦截器
instance.interceptors.request.use(
    config => {
        // console.log(config);
        //在请求发送之前做什么
        //比如添加token
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

//响应拦截器
instance.interceptors.response.use(
    response => {
        //对相应数据做什么
        return response.data;
    },
    error => {
        if(error.response){
            switch (error.response.status) {
                case 400:
                    console.log('请求错误');
                    break; 
        }
    }
    return Promise.reject(error);
}
);

export default instance;