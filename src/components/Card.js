import React, { useState } from 'react'
import email from '../assets/email.svg'
import phoneNumber from '../assets/phoneNumber.svg'
import college from "../assets/college.svg"
import downwardArrow from "../assets/downwardArrow.svg"
import upwardArrow from "../assets/upwardArrow.svg"
import edit from '../assets/edit.svg'
import Example from './EditModal'
import money from '../assets/money.svg'

const Card = ({ candidateInfo, resetCandidates }) => {
    const [isOpen, setisOpen] = useState(false);
    const [showEditModal, setshowEditModal] = useState(false)

    let skills = candidateInfo.skills.split(" ")

    return (
        <div className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-gray-100 my-2">
            <Example open={showEditModal} setOpen={setshowEditModal} id={candidateInfo.id} resetCandidates={resetCandidates} />
            <div className="gap-2 px-4 py-2" onClick={() => setisOpen(!isOpen)}>
                <div className="flex justify-between items-center">
                    <div className='flex flex-row gap-2 items-center'>
                        <div className="font-bold text-lg" >{candidateInfo.first_name} {candidateInfo.last_name} </div>
                        <img
                            src={edit}
                            alt='edit'
                            className={`h-5 w-5 mr-3`}
                            onClick={() => setshowEditModal(true)}
                        />
                    </div>
                    <span >{isOpen ? <img
                        src={upwardArrow}
                        alt='expand'
                        className={`h-6 w-6`}
                    /> : <img
                        src={downwardArrow}
                        alt='collapse'
                        className={`h-6 w-6`}
                    />}</span>
                </div>

                <span className="inline-block rounded-lg px-3 py-1 text-sm font-semibold text-white mt-2 mb-3" style={{ backgroundColor: candidateInfo.score > 4.5 ? '#4ACD8D' : (candidateInfo.score >= 3 ? '#FAAA1E' : '#FF4C60') }}>Score: {candidateInfo.score}</span>
                <div className="flex justify start items-center mb-1">
                    <img
                        src={email}
                        alt='email-id'
                        className={`h-5 w-5 mr-3`}
                    />
                    <p className="text-gray-700 text-base">
                        {candidateInfo.email}
                    </p>
                </div>
                <div className="flex justify start items-center">
                    <img
                        src={phoneNumber}
                        alt='phone-number'
                        className={`h-5 w-5 mr-3`}
                    />
                    <p className="text-gray-700 text-base">
                        {candidateInfo.phone}
                    </p>
                </div>
            </div>

            {isOpen &&
                <div className="px-4 pb-2">
                    <div className="flex justify-start mb-3">
                        <img
                            src={money}
                            alt='money'
                            className={`h-6 w-6 mr-3`}
                        />
                        <p className="text-gray-700 text-base">
                            {candidateInfo.expected_salary} - Expected Salary
                        </p>
                    </div>
                    <div className="flex justify-start mb-3">
                        <img
                            src={college}
                            alt='college-info'
                            className={`h-6 w-6 mr-3`}
                        />
                        <div>
                            <p className="text-gray-700 text-base">
                                {candidateInfo.college}
                            </p>
                            <p className="text-gray-700 text-base">
                                {candidateInfo.course}, {candidateInfo.cgpa}
                            </p>
                        </div>
                    </div>
                    {skills.map((skill) =>
                        <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 bg-gray-600">{skill}</span>
                    )}
                </div>}

        </div>
    )
}

export default Card