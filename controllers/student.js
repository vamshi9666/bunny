const mongoose = require('mongoose');
const Student = require('./../models/student');

exports.get_all = (req,res,next)=>{
  Student.find({})
    .exec()
    .then(result=>{
      res.status(200).json({
        count:result.length,
        data:result
      })
    })
    .catch(err=>{
      console.log(err);
      res.status(404).json({
        message:"eror in fetching data from server !",
        error:err
      })
    })
}
exports.add_new = (req,res,next)=>{

  const student = new Student({
    name:req.body.name,
    email:req.body.email,
    mobile:req.body.mobile,
    h_no:req.body.hall_no
  })

  student.save()
    .then(result=>{
      res.status(200).json({
        message:"Student added successfully !",
        data:result
      })
    })
    .catch(err=>{
      console.log(err);
      res.status(401).json({
        message: " Error in adding new Student !",
        data:err
      })
    })
}

exports.update_id = (req,res,next)=>{
  const id = req.params.id;

    Student.findOneAndUpdate({_id: id}, req.body, {new: true},(err,result)=>{
      res.status(200).json(result)
    })
}

exports.delete_id = (req,res,next)=>{

  const id = req.params.id;
  Student.remove({_id:id})
    .exec()
    .then(result=>{
      res.status(200).json({
        message:"Student deleted successfully !",
        data:result
      })
    })
    .catch(err=>{
      res.status(404).json({
        message:" Error in deleting Student !",
        error:err
      })
    })
}
