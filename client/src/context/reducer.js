import { DISPLAY_ALERT, CLEAR_ALERT, REGISTER_USER_BEGIN, REGISTER_USER_SUCCESS, REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,LOGIN_USER_SUCCESS,LOGIN_USER_ERROR
 } from './actions'

const reducer = (state, action) => {
  if(action.type===DISPLAY_ALERT){
    return {
      ...state,
      showAlert:true,
      alertType:'false',
      alertText:'Please provide all values!',
    }
  }
  else if(action.type===CLEAR_ALERT){
    return {
      ...state,
      showAlert:false,
      alertType:'',
      alertText:'',
    }
  }else if(action.type===REGISTER_USER_BEGIN){
    return {
      ...state,
      isLoading:true
    }
  }else if(action.type===REGISTER_USER_SUCCESS){
    return {
      ...state,
      isLoading:false, 
      token:action.payload.token, 
      user:action.payload.user, 
      showAlert:true,
      alertType: 'success',
      alertText: 'User Crated',
    }
  }else if(action.type===REGISTER_USER_ERROR){
    return {
      ...state,
      isLoading:false,
      showAlert:true,
      alertText:action.payload.msg,
      alertType: 'false',
    }
  }else if(action.type===LOGIN_USER_BEGIN){
    return {
      ...state,
      isLoading:true
    }
  }else if(action.type===LOGIN_USER_SUCCESS){
    return {
      ...state,
      isLoading:false, 
      token:action.payload.token, 
      user:action.payload.user, 
      showAlert:true,
      alertType: 'success',
      alertText: 'Login successful',
    }
  }else if(action.type===LOGIN_USER_ERROR){
    return {
      ...state,
      isLoading:false,
      showAlert:true,
      alertText:action.payload.msg,
      alertType: 'false',
    }
  }       

  throw new Error(`no such action: ${action.type}`)

}

export default reducer