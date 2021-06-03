import Type from './register.types'
import Service from '../../service'

const Register = {
   async SignUp(data, history, from){
       const res = await Service.register(data)
       localStorage.setItem("user", JSON.stringify(res.data))
        try {
            return{
                type: Type.REGISTER,
                createData: data
            }
            
        } catch (error) {
            return{
                type: Type.REGISTER,
                response: error.response
            }
        }
    }
}

export default Register