import * as api from '../api/index.js'
export const getWorks=()=>async(dispatch)=>{
    try {
        const data=api.getWorks();
        dispatch({type:'FETCH_ALL',payload:data});
    } catch (error) {
        console.log(error.message);
    }

}
export const postWork=(work)=>async(dispatch)=>{
    try {
        const data=await api.createWork(work);
        dispatch({type:'CREATE',payload:data});
    } catch (error) {
        console.log(error.message);
    }
}