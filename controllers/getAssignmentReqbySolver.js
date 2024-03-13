const Assignment=require("../Models/AssignmentModel");
const AssignAssignments=require("../Models/AssignAssignments");
const User=require("../Models/UserModel");
const multer = require('multer');
const jwt = require('jsonwebtoken');

module.exports=async(req,res)=>{
    
    try{
        const token = req.header('Authorization');
        const decoded = jwt.verify(token, 'assignment');
        const sid = decoded.userId;
        const assignId=req.params.aid;
        console.log(assignId);
        const assreq= await AssignAssignments.findByIdAndUpdate({_id:assignId});
       
        // const industry=user['industry'];
       
        // const showAssignments= await AssignAssignments.find({active:0,industry});
        if(assreq){
            assreq.solveid=sid
            assreq.accepted=1
            assreq.save();

            res.status(200).json({ "message": "Accepted Successfully", "status": 200 });
        }else{
            res.status(401).json({ "message": "Request not sent to Student Please try Again", "status": 401 });
        }
        
       
    }catch(error){
        console.log(error);
        res.status(500).json({"message":error,"status":500});
    }
}