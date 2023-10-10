import { Link } from 'react-router-dom';
import success from '../assets/success.png';

const Modal = () => {
    return (
        <div className="bg-overlayy h-[100vh]  w-[100%] top-0 fixed z-50 flex items-center justify-center font-poppins">
            <div className="bg-white w-[80%] lg:w-[90%] max-w-[500px] rounded-[28px] px-3 lg:py-5 flex flex-col justify-center items-center">

                <div className="my-4 lg:my-6">
                    <img src={success} alt="" className='h-[100px]' />
                </div>
                <div className=" lg:my-3">
                    <h3 className="text-[25px] lg:text-[30px] font-[500] text-gray text-center">
                        Submission Successful
                    </h3>
                    <div className="text-gray text-[12px] my-1 text-center px-[30px] lg:px-[60px]">
                        <p>
                           Please check your mail for when your interview will be scheduled.
                        </p>
                        <div className='w-full my-7'>
                            <button className='bg-orange text-white w-full rounded-[10px] h-[30px] lg:h-[40px] text-[13px] lg:text-[15px]'><Link to='/'>Go to Home</Link></button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Modal;