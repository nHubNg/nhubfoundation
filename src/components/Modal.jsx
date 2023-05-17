const Modal = ({ handleDesktopDonate }) => {
  return (
    <div className="bg-overlay h-[100vh]  w-[100%] top-0 fixed z-50 flex items-center justify-center">
      <div className="bg-white w-[90%] max-w-[400px] rounded-lg px-3 py-5">
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
              <span className="font-semibold text-base">Account Number:</span>
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
          <p className="text-sm text-lightgrey">Fill your card details.</p>
          <div>
            <form action="">
              <div>
                <label htmlFor="Name">Name on card</label>
                <input type="text" name="" id="" />
              </div>
              <div>
                <label htmlFor="">Expiry</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Card number</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">CVV</label>
                <input type="text" />
              </div>
              <div>
                <button>Cancel</button>
                <button>Confirm</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
