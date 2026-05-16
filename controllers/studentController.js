const Student = require('../models/Student');

const createStudent = async (req,res) =>{
    try{
        const student = await Student.create(req.body);
        res.send(student);
    }catch(err){
        res.status(500).send(err);
    }
}

const getStudents = async (req,res) =>{
    try{
        const students = await Student.find();
        res.send(students);
    }catch(err){
        res.status(500).send(err);
    }
}

const updateStudent = async (req,res) =>{
    try{
        const updated_student = await Student.findByIdAndUpdate(req.params.id,
            req.body,
            {new : true}
        );
        res.send(updated_student);
    }catch(err){
        res.status(500).send(err);
    }
}


const deleteStudent = async (req,res) =>{
    try{
        const deleted_student = await Student.findByIdAndDelete(req.params.id);
        res.send(deleted_student);
    }catch(err){
        res.status(500).send(err);
        
    }
}

module.exports = {
    createStudent,
    getStudents,
    updateStudent,
    deleteStudent
}