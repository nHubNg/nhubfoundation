import { useState } from "react";
import PaystackPop from '@paystack/inline-js'

const Modal = ({ handleDesktopDonate }) => {

  const [name, setName] = useState('')
  // const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [amount, setAmount] = useState('')

  const payWithPaystack = (e) => {
    e.preventDefault()
    const publicKey = import.meta.env.VITE_TEST_PUBLIC_KEY
    const paystack = new PaystackPop()
    paystack.newTransaction({
      key: publicKey,
      amount: amount * 100,
      email,
      name: name,
      // lastname: lastName,
      currency: 'NGN',
      onSuccess: (transaction) => {
        let message = `Payment Complete! Reference: ${transaction.reference}`
        alert(message)
        setName('')
        setEmail('')
        setAmount('')
      },
      onCancel: () => {
        alert('You have canceled the transaction')
      }
    })
  }

  return (
    <div className="bg-overlay h-[100vh]  w-[100%] top-0 fixed z-50 flex items-center md:justify-end justify-center ">
      <div className="bg-white w-[90%] mx-auto max-w-[450px] rounded-lg px-5 py-4 md:mr-12 flex flex-col justify-center ">
        <div className="flex justify-center items-center">
          {/* <button onClick={handleDesktopDonate}>
            <img
              src="https://res.cloudinary.com/nhubnacademy/image/upload/v1682899396/nHubFoundation/Vector_8_p2ivyo.png"
              alt=""
            />
          </button> */}
        </div>
        <div className="my-3 ">
          <h3 className="font-semibold text-lg pt-1 text-gray">
            Partner with us
          </h3>
          <p className="text-sm text-lightgrey">
            You can partner with us to help realize our mission and commitment
            to the African dream. Together, we can beam the spotlight on Africa
            and beyond.
          </p>
        </div>
        {/* <div className="my-3  px-5">
          <h3 className="font-semibold text-gray">
            You can send your donations to the account details below:
          </h3>
          <div className="text-lightgrey my-1">
            <p>
              <span className="font-semibold">Account Name: </span>nHub
              Incubator Comm. Dev. Foundation
            </p>
            <p className="text-sm">
              <span className="font-semibold text-base">Account Number: </span>
              1016197919
            </p>
            <p className="text-sm">
              <span className="font-semibold text-base">Bank Name: </span>Zenith
              Bank
            </p>
          </div>
        </div> */}
        <div className="">
          <h4 className="text-gray font-semibold">
            You can also make online payment
          </h4>
          <p className="text-sm text-lightgrey">Fill your details.</p>
          <div className='mt-3 '>
            <form action="">
              <div className='my-2'>
                <label htmlFor="name" className="my-2">Name</label>
                <input type="text" name="" id="name" className='border-[2px] border-grey outline-none rounded-md w-[100%] px-3 py-2 placeholder-darkBlue' value={name} onChange={e => setName(e.target.value)} placeholder='e.g John Doe' />
              </div>
              {/* <div className=''>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id='lastName' className='border-[2px] border-lightgrey outline-none rounded-md w-[100%] px-3' value={lastName} onChange={e => setLastName(e.target.value)} placeholder='Enter Last Name' />
              </div> */}
              <div className='my-2'>
                <label htmlFor="email" className="my-2">Email</label>
                <input type="text" id='email' className='border-[2px] border-grey  rounded-md w-[100%] px-3 py-2 placeholder-darkBlue' value={email} onChange={e => setEmail(e.target.value)} placeholder='Johndoe@example.com' />
              </div>
              <div className='my-2'>
                <label htmlFor="amount" className="my-2">Amount</label>
                <input type="number" id='amount' className='border-[2px] border-grey outline-none rounded-md w-[100%] px-3 py-2 placeholder-darkBlue' value={amount} onChange={e => setAmount(e.target.value)} placeholder='Enter Amount' />
              </div>
              <div className='flex justify-center flex-col md:flex-row items-center gap-3 md:gap-8 mt-8 mb-5'>
                {/* <input type='submit' className="bg-orange py-2 px-3 text-white text-center rounded-md"  placeholder='Make Payment' /> */}
                <button  onClick={handleDesktopDonate} className="w-full border-grey border-[2px] text-darkBlue px-12 py-2 rounded-lg">
                  Cancel
                </button>
                <button onClick={payWithPaystack} className="w-full bg-buttonPurple px-12 py-2 text-white rounded-lg">
                  Confirm
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
