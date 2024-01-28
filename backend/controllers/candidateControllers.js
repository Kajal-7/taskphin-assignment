import { response } from "express"
import connectDb from "../db/index.js"
import { computeScore } from "../utils/index.js"

const client = connectDb()
const possibleCandidateStatus = ['Contacted', 'Interview Scheduled', 'Offer Extended', 'Hired', 'Rejected']

export const getAllCandidates = async (req, response) => {
    let result = []

    let isError = false
    for (let status of possibleCandidateStatus) {
        try {
            const res = await client.query(`Select * from candidates where current_status =$1;`, [status])
            result = [...result, res.rows]
        } catch (err) {
            isError = true
            console.error(err);
            break;
        }
    }

    if (isError) {
        response.status(500).json({ "Error": "Can not get candidates" })
    } else {
        // console.log(result)
        response.status(200).json({ "candidates": result })
    }
}

export const createCandidate = (req, response) => {
    const data = req.body
    const score = computeScore(data.nodeExperience, data.reactExperience)
    const values = [data.firstName, data.lastName, data.email, data.phone, data.skills, data.college, data.course, data.cgpa, score, data.expectedSalary, data.currentStatus]
    console.log(values);

    client.query(`INSERT INTO candidates (first_name, last_name, email, phone, skills, college, course, cgpa, score, expected_salary, current_status) 
        VALUES 
        ($1, $2, $3,$4,$5,$6,$7,$8,$9,$10, $11);`, values, (err, res) => {
        response.status(err ? 500 : 200).json(err ? { "error": "Can not get candidates" } : { "msg": "Candidate Inserted" })
        // console.log(err ? err.stack : res)
    })

}

export const updateCandidate = (req, response) => {
    //update candidate
    const candidateId = req.params.id
    const newCurrentStatus = req.body.status

    // validate 
    if (possibleCandidateStatus.includes(newCurrentStatus)) {
        client.query(`UPDATE candidates
            SET current_status = $1
            WHERE id=$2;`, [newCurrentStatus, candidateId], (err, res) => {
            response.status(err ? 500 : 200).json(err ? { "error": "Can not update candidate" } : { "msg": "Candidate Updated" })
            // console.log(err ? err.stack : res)
        })

    } else {
        response.status(400).json({ "error": "Wrong Status" })
    }
}