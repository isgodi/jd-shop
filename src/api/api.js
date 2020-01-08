//
import api from 'axios'
import qs from 'qs'

//公共请求地址
api.defaults.baseURL = 'http://localhost:3000';
api.defaults.timeout = 5000;

//请求头部拦截
api.interceptors.request.use(
	config => {
		if(config.method == 'get' || config.method == 'put'){
			config.headers = {
				"Content-type":"application/json:charset:utf8"
			}
		}else if(config.method == 'post' || config.method == 'delete'){
			config.headers = {
				// token:n
				"Content-type":"application/x-www-form-urlencoded:charset:utf-8",
			}
			config.data = qs.stringify(config.data)
		}
		console.log(config);
		return config;
	},
	error => {
		let err = new Error(error);
		throw err;
	}
)

//响应头拦截
api.interceptors.response.use(
	response => {
		return response.data;
	},
	error => {
		let err = new Error(error);
		throw err;
	}
)


export default api;
