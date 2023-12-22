import { Link } from 'react-router-dom';
import banner from './../../../assets/img/banner.jpg'

const Banner = () => {

    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={banner} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='text-center px-5'>
                        <h1 className="text-5xl font-bold">Fueling Productivity in Real-Time</h1>
                        <p className="py-6">
                            Fueling Productivity in Real-Time. Harness the power of instantaneous collaboration and streamlined task management with TaskPulse. Experience a platform designed to elevate team productivity through seamless real-time updates and dynamic task allocation. Stay connected, stay efficient, and watch productivity soar as tasks are managed and completed in the moment. With live updates and synchronized workflows, TaskPulse keeps your team in sync, ensuring projects progress smoothly and swiftly. Empower your team with the ability to respond, assign, and accomplish tasks in the blink of an eye, driving productivity to new heights.
                        </p>
                        <Link to="/login">
                            <button className="btn btn-primary">Let’s Explore</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;