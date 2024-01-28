import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import SuccessAlert from '../ui/SuccessAlert'
import WarningAlert from "../ui/WarningAlert"
import Button from '../ui/Button'

/*
@description
The component renders a edit modal to update candidate application status.
*/
export default function Example({ open, setOpen, id, resetCandidates }) {
    const possibleCandidateStatus = ['Contacted', 'Interview Scheduled', 'Offer Extended', 'Hired', 'Rejected']
    const [success, setsuccess] = useState(false)
    const [error, seterror] = useState(false)
    const [status, setstatus] = useState('')

    const editCandidate = () => {
        fetch(`https://taskphin-assignment.onrender.com/api/candidate/edit/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                status
            })
        }).then((res) => {
            if (res.ok) {
                resetCandidates()
                setsuccess(true)
                seterror(false)
            } else {
                setsuccess(false)
                seterror(true)
            }
            setstatus('')
        }).catch((err) => {
            setsuccess(false)
            seterror(true)
            setstatus('')
        })
    }
    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={setOpen}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            enterTo="opacity-100 translate-y-0 sm:scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                        >
                            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">

                                <div className="flex flex-wrap -mx-3 mb-2">
                                    {success&& <SuccessAlert message={'Candidate updated successfully!'} setmessage={setsuccess} />}
                                    {error && <WarningAlert message={'Oops Error! Candidate not updated successfully.'} setmessage={seterror} />}
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-state">
                                            Candidate Current Status
                                        </label>
                                        <div className="relative">
                                            <select required className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state" value={status} onChange={(e) => setstatus(e.target.value)} >
                                                <option selected>Select</option>
                                                {possibleCandidateStatus.map((current_status)=><option>{current_status}</option>)}
                                            </select>
                                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="">
                                    <div className='grid grid-cols-2 gap-2'>
                                    <Button title='Edit' onClick={editCandidate} />
                                    <Button title='Close' onClick={() => setOpen(false)} />
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}