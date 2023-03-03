import Axios from 'axios';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import { RegisterUser, LoginUser } from '../interfaces/interfaces';
import {Environment} from '../environment';
import { User } from '../classes/class';

const url = Environment.apiUrl;

const initialState = {value : {username:"", token:"", email:"", userId:0, role:0}}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers : {
        login : (state, action) => {
            state.value = action.payload;
        },
        logout : (state) => {
            state.value = initialState.value
        }
    }
});

export const {login, logout} = userSlice.actions;

export const config = configureStore({
    reducer:{
        user:userSlice.reducer
    }
});

export const userRegister = async (prop: RegisterUser) => {
    let item = {
        username : prop.username,
        email : prop.email,
        roleId : 2,
        password : prop.password
    }

    const response = await Axios.post(`${url}/Register`,item);

    if(response.data.success == true){
        toast.success("Registered Successfully", {position: toast.POSITION.TOP_RIGHT});
        return setData(response.data.success);
    }
    else{
        let user = new User();
        user.isLogedIn = false;
        user.message = response.data.data;
        return user;
    }
}

const setData = (prop:any)  : User => {
    let user = new User();
    user.isLogedIn = true;
    user.role = prop.roleId;
    user.email = prop.email;
    user.token = prop.token;
    user.userId = prop.userId;
    user.username = prop.username;
    return user;
}

export const userLogin = async (prop:LoginUser) => {
    const response = await Axios.post(`${url}/Login`,prop);

    if(response.data.success == true){
        toast.success("Welcome Back!", {position: toast.POSITION.TOP_RIGHT});
        return setData(response.data.data);
    }
    else{
        let user = new User();
        user.isLogedIn = false;
        user.message = response.data.data;
        return user;
    }
}

