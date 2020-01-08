import api from './api';
//接口
export function show() {
	return api.post("/show");
}
