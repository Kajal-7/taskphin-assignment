import React from 'react'
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import styles from './Home.module.css'
import recruit from '../assets/recruit.svg'

const Home = () => {
    return (
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 px-10" >
            <div className='flex flex-col justify-center mr-10 px-14'>
                <h1 class="text-2xl font-bold mb-2 text-white">Empowering Recruiters, Simplifying Hiring</h1>
                <h1 class="text-2xl font-semibold mb-2 text-[#4ACD8D]">Made Effortless</h1>
                <p class="text-l my-4 text-gray-400">Discover a seamless way to add, track, and update candidate statuses with our user-friendly interface, tailored for recruiters' needs.</p>
                <Link to={"/view-candidates"} style={{ textDecoration: "none" }}>
                    <Button title="View Candidates" />
                </Link>
            </div>
            <div className='flex flex-col justify-center'>
            <img
                        src={recruit}
                        alt='recruit'
                        className='sm:pb-[70px]'
                    />
            </div>
        </div>
    )
}

export default Home