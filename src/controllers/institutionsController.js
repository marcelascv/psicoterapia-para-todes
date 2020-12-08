const institutions = require('../models/institutions')

const getAll = (req, res) => {
    institutions.find(function (err, institutions) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(institutions)
        }
    })
}

const getByState = (req, res) => {
    const state = req.params.state
    institutions.find({ state }, function (err, institutions) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(institutions)
        }
    })
}

const getForActiveService = (req, res) => {
    const state = req.params.state
    institutions.find({ state, activeService : true }, function (err, institutions) {
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send(institutions)
        }
    })
}

const postInstitution = (req, res) => {
    console.log(req.institution);
    institutions.countDocuments((err, count) => {
        if (err) {
            res.status(500).send({message: err.message});
        } else {
            const institution = new institutions(req.body);
            institution.id = count +1;
            institution.save(function (err) {
                if (err) {
                    res.status(500).send({ message: err.message })
                } else {
                    res.status(200).send({
                        message: 'Institution successfully registered!'                    
                    })
                }
            })
        }
    })
}

const putInstitution = (req, res) => {
    const id = req.params.id
    institutions.updateMany({ id }, { $set : req.body }, { upsert : true }, function(err){
        if (err) {
            res.status(500).send({ message: err.message })
        } else {
            res.status(200).send({ message : "Institution successfully updated!"})
        }
    })
}

const deleteInstitution = (req, res) => {
    const id = req.params.id;
    institutions.find({ id }, function(err, institution){
        if(institution.length > 0){
            institutions.deleteMany({ id }, function(err){
                if(err) {
                    res.status(500).send({ message: err.message })
                }
                res.status(200).send({ message: 'Institution sucessfully removed!'})
            })
        } else{
            res.status(200).send({ message: 'There is no task to be removed!'})
        }
    })
}

module.exports = {
    getAll,
    getByState,
    getForActiveService,
    postInstitution,
    putInstitution,
    deleteInstitution,
}