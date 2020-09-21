import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL : `https://social-network.samuraijs.com/api/1.0/`,
    headers: { "API-KEY": "1371f8f6-2f45-496f-8d3b-e435c469f3e2"}
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5)  { 
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
                    .then(response => {
                        return response.data;
                    });
        
        },
    follow(id) {
        return instance.post(`follow/${id}`)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`)
    },
    getProfile(userId) {
        console.warn("Obsolete method.Please, use profileAPI object");
        return profileAPI.getProfile(userId);//peredelegiruem na profileAPI
    }
};

export const profileAPI = {
    getProfile(userId) {
        return instance.get(`profile/` + userId);
    },
    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe=false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}

