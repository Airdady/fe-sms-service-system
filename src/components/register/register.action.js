import Type from './register.types'
import Service from '../../service'

const Register = {
   async SignUp(data, history, from){
       const res = await Service.register(data)
       console.log({'res': res})
       localStorage.setItem("user", JSON.stringify(res.data.data))
        try {
            return{
                type: Type.REGISTER,
                createData: res.data.data
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