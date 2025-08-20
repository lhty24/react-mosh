import axios, {CanceledError} from 'axios';

export default axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
})

// export it as a named object
export {CanceledError};