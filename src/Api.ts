export const API_URL = 'http://localhost:3000'

type User = {
    email: string,
    password: string
}

export function CREATE_USER(userParams:User){
    return {
        url: `${API_URL}/users`,
        options:{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userParams)
        }
    }
}

export function AUTHENTICATION_USER(userParams:User){
    return {
        url: `${API_URL}/users/login`,
        options:{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userParams)
        }
    }
}