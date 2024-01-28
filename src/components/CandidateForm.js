import React, { useState } from 'react'
import Button from '../ui/Button'
import SuccessAlert from '../ui/SuccessAlert'
import WarningAlert from '../ui/WarningAlert'

/*
@description
The component renders a form to add new candidate.
*/
const CandidateForm = () => {
  const [firstName, setfirstName] = useState('')
  const [lastName, setlastName] = useState('')
  const [college, setcollege] = useState('')
  const [course, setcourse] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [cgpa, setcgpa] = useState('')
  const [skills, setskills] = useState('')
  const [salary, setsalary] = useState('')
  const [nodeExperience, setnodeExperience] = useState('')
  const [reactExperience, setreactExperience] = useState('')
  const [successMsg, setsuccessMsg] = useState(false)
  const [errMsg, seterrMsg] = useState(false)

  function addCandidate(e) {
    e.preventDefault()
    fetch('https://taskphin-assignment.onrender.com/api/candidate/new', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        firstName, lastName, college, course, email, phone, cgpa, skills, nodeExperience, reactExperience, expectedSalary: salary, currentStatus: 'Contacted'
      })
    }).then((res) => {
      if (res.ok) {
        setsuccessMsg(true)
        seterrMsg(false)
      } else {
        setsuccessMsg(false)
        seterrMsg(true)
      }
      
      setcgpa('')
      setcollege('')
      setcourse('')
      setemail('')
      setfirstName('')
      setlastName('')
      setnodeExperience('')
      setreactExperience('')
      setsalary('')
      setskills('')
      setphone('')
    }).catch((err) => {
      setsuccessMsg(false)
      seterrMsg(true)
    })
  }

  return (
    <div className='flex justify-center items-center pt-2'>

      <form className="w-full max-w-lg" onSubmit={addCandidate}>
        {
          successMsg && <SuccessAlert message={'Candidate added successfully!'} setmessage={setsuccessMsg} />
        }
        {
          errMsg && <WarningAlert message={'Oops Error! Candidate not added successfully.'} setmessage={seterrMsg} />
        }
        <div className="flex flex-wrap -mx-3 my-6">

          <div className="w-full md:w-1/2 px-3 md:mb-0">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
              First Name
            </label>
            <input required className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" value={firstName} onChange={(e) => setfirstName(e.target.value)} />
          </div>
          <div className="w-full md:w-1/2 px-3 md:mb-0">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name" >
              Last Name
            </label>
            <input required className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" value={lastName} onChange={(e) => setlastName(e.target.value)} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 md:mb-0">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
              Email Id
            </label>
            <input required className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" value={email} onChange={(e) => setemail(e.target.value)} />
          </div>
          <div className="w-full md:w-1/2 px-3 md:mb-0">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
              Phone Number
            </label>
            <input required className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" value={phone} onChange={(e) => setphone(e.target.value)} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
              College Name
            </label>
            <input required className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="" value={college} onChange={(e) => setcollege(e.target.value)} />
          </div>
          <div className="w-full md:w-1/2 px-3 md:mb-0">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-first-name">
              Course
            </label>
            <input required className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="" value={course} onChange={(e) => setcourse(e.target.value)} />
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-last-name">
              CGPA out of 10
            </label>
            <input required className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder="" value={cgpa} onChange={(e) => setcgpa(e.target.value)} />
          </div>
          <p className="px-3 text-gray-400 text-xs italic">Add the most recent qualification</p>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-state">
              Node.js Experience
            </label>
            <div className="relative">
              <select required className="block appearance-none w-full bg-gray-200 border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" value={nodeExperience} onChange={(e) => setnodeExperience(e.target.value)} >
                <option selected>Select</option>
                <option>Less than 1 year</option>
                <option>1-2 years</option>
                <option>Over 2 years</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-state">
              React.js Experience
            </label>
            <div className="relative">
              <select required className="block appearance-none w-full bg-gray-200 border border-gray-200 text-black py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" value={reactExperience} onChange={(e) => setreactExperience(e.target.value)} >
                <option selected>Select</option>
                <option>Less than 1 year</option>
                <option>1-2 years</option>
                <option>Over 2 years</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-black">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
              Skills
            </label>
            <input required className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" value={skills} placeholder="" onChange={(e) => setskills(e.target.value)} />
            <p className="pt-2 text-gray-400 text-xs italic">Write skills space separated</p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" for="grid-password">
              Expected Salary
            </label>
            <input required className="appearance-none block w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="number" placeholder="" value={salary} onChange={(e) => setsalary(e.target.value)} />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <Button title="Add candidate" type="submit" />
          </div>
        </div>
      </form>
    </div>
  )
}

export default CandidateForm