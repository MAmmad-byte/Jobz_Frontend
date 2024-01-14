import {jwtDecode}  from "jwt-decode";


export function loginWithJwt(token){
    localStorage.setItem("auth-token", token);
}

export function getToken(){
    return localStorage.getItem("auth");
}

export function getUserInfo (){
    try {
        const jwt = localStorage.getItem("auth");
        return jwtDecode(jwt);
    } catch (ex) {
        return null
    }
}

export function logout(){
    localStorage.removeItem('auth')
}
export function checkUser(){
    if(!localStorage.getItem('auth')){
        return true;
    }else{
        return false
    }
}
export function checkIsEmployee(){
    if(localStorage.getItem('auth')){
        let user =  getUserInfo()
        if(user.role.isEmployee)
            return true
    }else{
         false
    }
}
