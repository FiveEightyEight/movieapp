import axios from 'axios';
import x from './x';

export default title =>{
    return axios({
        method: 'get',
        url: `http://www.omdbapi.com/`,
        params:{
            apikey: x,
            t: title,
        },
    });
};