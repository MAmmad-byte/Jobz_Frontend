import axios from "axios";
import apiClient from "./api-client";

class UserService{
    createUser(data){
        const request = apiClient.post("/users", { 
            firstName:data.firstName,
            lastName:data.lastName,
            address:data.address,
            phone:data.phone,
            password:data.password,
            dob:data.dob,
            email:data.email,
           })
           return {request}
    }
    UserLogin(data){
        const request = apiClient.post("/auth",{
            email:data.email,
            password:data.password
        })
        return {request}
    }

    fetchUsers(){
       
            return apiClient.get("/users")
    }
    fetchUser(id){   
            return apiClient.get(`/users/${id}`)
    }
    searchUsers(query){
       
            return apiClient.get(`/users?search=${query}`)
    }
}

export default new UserService();