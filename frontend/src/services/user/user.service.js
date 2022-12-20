import http from '../../common/common'

const register = (data) => {
    return http.post('/user/create', data)
}

const login = (data) => {
    return http.post('/user/login', data)
}

const getAllUsers = () => {
    return http.get('/user/getAllUsers')
}

export const UserService = {
    register,
    login,
    getAllUsers
}