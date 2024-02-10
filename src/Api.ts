import { ReactNode } from "react"

export const API_URL = 'http://localhost:3000'

type User = {
    email: string,
    password: string
}

type Mail = {
    emailFrom:string,
    emailTo:string,
    subject:string,
    html:string,
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

export function SEND_MAIl(mailParams:Mail){
    return {
        url: `${API_URL}/mail/send`,
        options: {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(mailParams)
        }
    }
}