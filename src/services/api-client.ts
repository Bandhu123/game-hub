import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api/',
    params:{
        key:'52d9338ac1f442e59e25234a4106ae1c'
    }
})