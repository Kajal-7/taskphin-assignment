import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

const DisplayCandidates = () => {

  const [contactedCandidates, setcontactedCandidates] = useState([])
  const [interviewScheduled, setinterviewScheduled] = useState([])
  const [offerExtended, setofferExtended] = useState([])
  const [hired, sethired] = useState([])
  const [rejected, setrejected] = useState([])
  const status = [
    {
      statusName: 'Contacted',
      state: contactedCandidates,
    }, {
      statusName: 'Interview Scheduled',
      state: interviewScheduled
    }, {
      statusName: 'Offer Extended',
      state: offerExtended,
    }, {
      statusName: 'Hired',
      state: hired,
    }, {
      statusName: 'Rejected',
      state: rejected,
    }]

  const fetchData = async () => {
    try {
      const res = await fetch('https://taskphin-assignment.onrender.com/api/candidate/all')
      if (!res.ok) {
        throw new Error('Network response was not ok');
      }
      let data = await res.json()
      data = data.candidates
      setcontactedCandidates(data[0])
      setinterviewScheduled(data[1])
      setofferExtended(data[2])
      sethired(data[3])
      setrejected(data[4])
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="flex-1 w-full py-2 px-6 grid sm:grid-cols-5 grid-cols-1 gap-4">
      {
        status.map((currentStatus) => 
        <div className="">
          <div className='flex justify-between items-center text-white mb-3 font-medium px-2 border-b pb-1 border-[#9e9e9e]'>
          <h1 className="text-xl py-1">{currentStatus.statusName}</h1>
          <span className='rounded-full h-7 w-7 bg-[#8c6dfd] text-center pt-[1.8px]'>{currentStatus.state.length}</span>
          </div>
          {
            currentStatus.state.map((candidateInfo) =>
              <Card candidateInfo={candidateInfo} resetCandidates={fetchData} />
            )
          }
        </div>)
      }
    </div>
  )
}

export default DisplayCandidates