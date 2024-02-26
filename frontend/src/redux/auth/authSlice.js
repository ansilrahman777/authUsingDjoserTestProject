import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import authService from './authService';



const initialState = {
    user:null,
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
        })

    }
}
)
export default authSlice.reducer


