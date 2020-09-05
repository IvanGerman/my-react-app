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
        return instance.get(`profile/` + userId)
    }
};

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}

