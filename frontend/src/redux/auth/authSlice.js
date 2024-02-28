import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService';



const initialState = {
    user:null,
    userInfo:{},
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:"",
}

export const register = createAsyncThunk(
    "auth/register",
    async(userData,tunkAPI)=>{
        try{
            return await authService.register(userData)
        } catch (error){
            const message = (error.response && error.response.data
                && error.response.data.message) || error.message || error.toString()
           return tunkAPI.rejectWithValue(message) 
        }   
    }
)

export const login = createAsyncThunk(
    "auth/login",
    async(userData,tunkAPI)=>{
        try{
            return await authService.login(userData)
        } catch (error){
            const message = (error.response && error.response.data
                && error.response.data.message) || error.message || error.toString()
           return tunkAPI.rejectWithValue(message) 
        }   
    }
)

export const logout = createAsyncThunk(
    "auth/logout",
    async()=>{
           authService.logout()
    }
)

export const activate = createAsyncThunk(
    "auth/activate",
    async(userData,tunkAPI)=>{
        try{
            return await authService.activate(userData)
        } catch (error){
            const message = (error.response && error.response.data
                && error.response.data.message) || error.message || error.toString()
           return tunkAPI.rejectWithValue(message) 
        }   
    }
)

export const getUserInfo = createAsyncThunk(
    "auth/gerUserInfo",
    async(_,thunkAPI)=>{
        try{
            const accessToken=thunkAPI.getState().auth.user.access
            return await authService.gerUserInfo(accessToken)
        } catch (error){
            const message = (error.response && error.response.data
                && error.response.data.message) || error.message || error.toString()
           return thunkAPI.rejectWithValue(message) 
        }   
    }
)

export  const authSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{
        reset:(state)=>{
            state.isLoading=false
            state.isError=false
            state.isSuccess=false
            state.message=false
        }

    
},
    extraReducers:(builder)=> {
        builder
        .addCase(register.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(register.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.user=action.payload
        })
        .addCase(register.rejected,(state,action)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=true
            state.message=action.payload
            state.user=null
        })
        .addCase(login.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(login.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.user=action.payload
        })
        .addCase(login.rejected,(state,action)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=true
            state.message=action.payload
            state.user=null
        })
        .addCase(logout.fulfilled,(state)=>{
            state.user=null
            state.userInfo = {}
        })
        .addCase(activate.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(activate.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.user=action.payload
        })
        .addCase(activate.rejected,(state,action)=>{
            state.isLoading=false
            state.isSuccess=false
            state.isError=true
            state.message=action.payload
            state.user=null
        })
        .addCase(getUserInfo.fulfilled,(state,action)=>{
            state.userInfo=action.payload
        })
        

    }
}
)
export const {reset} =authSlice.actions
export default authSlice.reducer


