import { useEffect } from "react";

function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return null;
}

const Contact = () => {
  return (
    <>
    <ScrollToTopOnMount/>
      <div className="h-40 bg-contact bg-no-repeat  bg-center bg-cover mb-10 lg:mb-20 sm:bg-desktopContact md:h-[60vh] lg:h-[80vh]"></div>
      <section className=" text-[1rem] bg-white max-w-[90%] mx-auto text-center lg:flex lg:flex-row-reverse lg:text-[0.8rem] lg:max-w-4xl lg:mx-auto lg:h-[40rem] xl:max-w-6xl    lg:mb-20 lg:border-2 lg:border-orange">
        <div className="max-w-xl mx-auto lg:max-w-[50%] lg:grid lg:place-items-center lg:max-h-full ">
          <div className="flex flex-col gap-6 py-6 lg:gap-2 lg:py-2 lg:max-w-[50%]">
            <p>
              You can get to know us more by stopping by at our office, reaching
              out to us by mail or giving us a call.
            </p>
            <h3 className="font-bold text-[1.5rem] text-orange">
              Office Address:
            </h3>
            <p>
              2nd Floor TAEN Business Complex Opposite former NITEL Office, Old
              Airport Junction, Jos, Plateau State, Nigeria.
            </p>
          </div>

          <div className="map flex  justify-center lg:max-w-[50%]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.660489372279!2d8.8747457!3d9.8788245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10537387fc85cf8b%3A0xc3317526ad656388!2snHub%20Foundation!5e0!3m2!1sen!2sng!4v1682789266126!5m2!1sen!2sng"
              width="100%"
              height="148"
              style={{ border: "0" }}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="text-orange py-6 lg:py-2 lg:max-w-[50%]">
            <h3 className="font-bold">Email Address:</h3>
            <p> contact@nhubfoundation.org</p>
            <h3 className="font-bold">Phone Lines:</h3>
            <p>+234 703 436 1648, +234 806 864 0710</p>
          </div>
          <h4 className="py-4 lg:py-2 lg:hidden">
            You can send us a message by filling the form below:
          </h4>
        </div>

        <div className="lg:grid lg:place-items-center  lg:bg-brown lg:w-[50%] h-full lg:text-white">
          <form
            action=""
            className="flex flex-col gap-2 max-w-xl mx-auto text-left lg:w-4/5"
          >
            <h1 className="text-3xl font-bold leading-10 py-5 hidden lg:block">
              Contact <span className="text-orange">Us</span>
            </h1>
            <label htmlFor="name" className="lg:text-white">
              Name
              <span className="text-red-600 ">*</span>
            </label>
            <input
              name="name"
              id="name"
              className=" border border-black rounded indent-2 py-1 lg:bg-brown lg:border-white"
              required
            />

            <label htmlFor="email">
              Email <span className="text-red-600">*</span>
            </label>
            <input
              name="email"
              id="email"
              className=" border border-black rounded indent-2 py-1 lg:bg-brown lg:border-white"
              required
            />

            <label htmlFor="subject">Subject: </label>
            <input
              name="subject"
              id="subject"
              className=" border border-black rounded indent-2 py-1 lg:bg-brown lg:border-white"
            />

            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              cols={40}
              className=" border border-black rounded indent-2 py-1 lg:bg-brown lg:border-white"
            />

            <input
              type="submit"
              value="Send"
              className="bg-orange text-white py-2 w-24 ml-auto my-4 rounded font-semibold"
            />
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
