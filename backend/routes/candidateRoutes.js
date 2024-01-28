import {getAllCandidates, createCandidate, updateCandidate} from '../controllers/candidateControllers.js'
import express from 'express'
const router = express.Router()

router.route('/all').get(getAllCandidates)

router.route('/new').post(createCandidate)

router.route('/edit/:id').put(updateCandidate)

export default router;