const axios = require('axios').default;
const API_KEY = process.env.NASA_API_KEY;
const {basepath,apod} = require('../../../config/default').services.nasa;
const Apod = require('../../models/apod.model')
// const config = require('config');
// const basepath = config.get('services.nasa.basepath');
// const apod = config.get('services.nasa.apod');

async function getApod(req,res){

    const {date , start_date, end_date} = req.query;

    axios.get(`${basepath}${apod}`,{
        params:{
            api_key : API_KEY,
            date: date,
            start_date: start_date,
            end_date: end_date
        }
    })
    .then((response) =>{
        res.json(response.data);
        return response.data;
    })
    .catch(err =>{
        const {status}  = err.response;
        res.status(status);
        res.json(err);
    })

}

async function postApod(req,res){

    res.json({
        Status: "En Desarrollo"
    })
    // const data = await getApod

    // const apod = new Apod(data);

    // await apod.save().then((data =>{
    //     res.json(data);
    // })).catch((err=>{
    //     res.status(400);
    //     console.error(err)
    //     res.json(err);
    // }))


}

module.exports = {getApod,postApod}