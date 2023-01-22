
var express = require('express');
const router =express.Router()
router.get('/',(req,res)=>{
    obj={
        id:1,
        "name":"Roy Ali Hasan"
    }
    res.json(obj)
})


module.exports=router
