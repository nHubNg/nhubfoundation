const Contact = () => {
  return (
    <section className="text-[1rem] bg-white max-w-[90%] mx-auto text-center">
      <div className="flex flex-col gap-4 py-4">
        <p>
          You can get to know us more by stopping by at our office, reaching out
          to us by mail or giving us a call.
        </p>
        <h3 className="font-bold text-[1.5rem] text-orange">Office Address:</h3>
        <p>
          2nd Floor TAEN Business Complex Opposite former NITEL Office, Old
          Airport Junction, Jos, Plateau State, Nigeria.
        </p>
      </div>

      <div className="map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.660489372279!2d8.8747457!3d9.8788245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10537387fc85cf8b%3A0xc3317526ad656388!2snHub%20Foundation!5e0!3m2!1sen!2sng!4v1682789266126!5m2!1sen!2sng"
          width="100%"
          height="200"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="text-orange py-4">
        <h3 className="font-bold">Email Address:</h3>
        <p> contact@nhubfoundation.org</p>
        <h3 className="font-bold">Phone Lines:</h3>
        <p>+234 703 436 1648, +234 806 864 0710</p>
      </div>
      <h4 className="py-4">
        You can send us a message by filling the form below:
      </h4>
      <form action="" className="flex flex-col text-left">
        <label htmlFor="name">
          Name
          <span className="text-red-600 ">*</span>
        </label>
        <input
          name="name"
          id="name"
          className=" border border-black rounded indent-2 py-1"
          required
        />

        <label htmlFor="email">
          Email <span className="text-red-600">*</span>
        </label>
        <input
          name="email"
          id="email"
          className=" border border-black rounded indent-2 py-1"
          required
        />

        <label htmlFor="subject">Subject: </label>
        <input
          name="subject"
          id="subject"
          className=" border border-black rounded indent-2 py-1"
        />

        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          cols={40}
          className=" border border-black rounded indent-2 py-1"
        />

        <input
          type="submit"
          value="Send"
          className="bg-orange text-white py-2 w-24 ml-auto my-4 rounded font-semibold"
        />
      </form>
    </section>
  );
};

export default Contact;
