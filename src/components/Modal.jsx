import { useState } from "react";
import PaystackPop from '@paystack/inline-js'

const Modal = ({ handleDesktopDonate }) => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
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
      firstname: firstName,
      lastname: lastName,
      currency: 'NGN',
      onSuccess: (transaction) => {
        let message = `Payment Complete! Reference: ${transaction.reference}`
        alert(message)
        setFirstName('')
        setLastName('')
        setEmail('')
        setAmount('')
      },
      onCancel: () => {
        alert('You have canceled the transaction')
      }
    })
  }

  return (
    <div className="bg-overlay h-[100vh]  w-[100%] top-0 fixed z-50 flex items-center justify-center">
      <div className="bg-white w-[90%] max-w-[450px] rounded-lg px-3 py-5">
        <div className="flex justify-center items-center">
          <button onClick={handleDesktopDonate}>
            <img
              src="https://res.cloudinary.com/nhubnacademy/image/upload/v1682899396/nHubFoundation/Vector_8_p2ivyo.png"
              alt=""
            />
          </button>
        </div>
        <div className="my-3">
          <h3 className="font-semibold text-lg pt-1 text-gray">
            Partner with us
          </h3>
          <p className="text-sm text-lightgrey">
            You can partner with us to help realize our mission and commitment
            to the African dream. Together, we can beam the spotlight on Africa
            and beyond.
          </p>
        </div>
        <div className="my-3">
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
        </div>
        <div>
          <h4 className="text-gray font-semibold">
            You can also make online payment
          </h4>
          <p className="text-sm text-lightgrey">Fill your details.</p>
          <div className='mt-3 mr-8'>
            <form action="">
              <div className='flex items-center justify-between gap-5 mb-3'>
                <label htmlFor="firstName">First Name:</label>
                <input type="text" name="" id="firstName" className='border-[2px] border-lightgrey rounded-md w-[60%] px-3' value={firstName} onChange={e => setFirstName(e.target.value)} placeholder='Enter First Name
                ' />
              </div>
              <div className='flex items-center justify-between gap-5 mb-3'>
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" id='lastName' className='border-[2px] border-lightgrey rounded-md w-[60%] px-3' value={lastName} onChange={e => setLastName(e.target.value)} placeholder='Enter Last Name' />
              </div>
              <div className='flex items-center justify-between gap-5 mb-3'>
                <label htmlFor="email">Email:</label>
                <input type="text" id='email' className='border-[2px] border-lightgrey rounded-md w-[60%] px-3' value={email} onChange={e => setEmail(e.target.value)} placeholder='Enter Email' />
              </div>
              <div className='flex items-center justify-between gap-5 mb-3'>
                <label htmlFor="amount">Amount:</label>
                <input type="number" id='amount' className='border-[2px] border-lightgrey rounded-md w-[60%] px-3' value={amount} onChange={e => setAmount(e.target.value)} placeholder='Enter Amount' />
              </div>
              <div className='flex justify-center items-center mt-8 mb-5'>
                <input type='submit' className="bg-orange py-2 px-3 text-white text-center rounded-md" onClick={payWithPaystack} placeholder='Make Payment' />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
