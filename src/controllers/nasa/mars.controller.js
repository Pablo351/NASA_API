const axios = require('axios').default;
const API_KEY = process.env.NASA_API_KEY;
const {basepath,mars} = require('../../../config/default').services.nasa;

async function getMars(req,res){
    const {earth_date,camera,page,sol} = req.query;
    const {rover} = req.params;

    axios.get(`${basepath}${mars}${rover}/photos`,{
        params:{
            api_key: API_KEY,
            earth_date : earth_date,
            camera: camera,
            page: page,
            sol : sol
        }
    })
    .then((response)=>{
        res.json(response.data);
    })
    .catch(err =>{
        const {status} = err.response;
        res.status(status);
        res.json(err);
    })

}

module.exports = {getMars}