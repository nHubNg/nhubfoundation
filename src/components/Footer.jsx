import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <footer className="bg-black text-textAsh text-[1rem]   ">
        <div className=" my-container py-6 md:py-11 flex flex-col gap-4   md:flex-row  md:justify-between ">
          <div className=" flex flex-col gap-4 basis-1/4">
            <h3 className="text-[1.2rem] font-semibold leading-5">Company</h3>
            <ul className=" leading-6 flex flex-col gap-2">
              <li>
                <Link
                  className="active:text-orange hover:text-orange"
                  to="/about"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className="active:text-orange hover:text-orange"
                  to="/contact"
                >
                  Contact us
                </Link>
              </li>
              <li>
                <a className="active:text-orange hover:text-orange" href="">
                  Privacy policy
                </a>
              </li>
              <li>
                <a className="active:text-orange hover:text-orange" href="">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="flex flex-col gap-4">
            <h3 className="text-[1.2rem] leading-5">Question?</h3>
            <ul className=" leading-6  flex flex-col gap-2 ">
              <li>
                <Link
                  className="active:text-orange hover:text-orange"
                  to="/about"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  className="active:text-orange hover:text-orange"
                  to="/programs"
                >
                  Why choose us
                </Link>
              </li>
              <li>
                <a className="active:text-orange hover:text-orange" href="">
                  Career
                </a>
              </li>
              <li>
                <Link
                  className="active:text-orange hover:text-orange"
                  to="/courses"
                >
                  Team
                </Link>
              </li>
              <li>
                <a className="active:text-orange hover:text-orange" href="">
                  FAQs
                </a>
              </li>
            </ul>
          </div> */}
          <div className="flex flex-col gap-4 basis-1/3">
            <h3 className="text-[1.2rem] font-semibold leading-5">Find us</h3>
            <ul className=" leading-6  flex flex-col gap-2">
              <li className="">
                <img
                  src={
                    "https://res.cloudinary.com/ddgyd8szc/image/upload/v1682791103/vector3_wn5f1n.png"
                  }
                  alt=""
                  className="inline mr-2 h-4 w-4"
                />
                <a
                  className="active:text-orange hover:text-orange"
                  href="https://www.google.com/maps/place/nHub+Foundation/@9.8788245,8.8747457,15z/data=!4m6!3m5!1s0x10537387fc85cf8b:0xc3317526ad656388!8m2!3d9.8788245!4d8.8747457!16s%2Fg%2F11hzlzcy49"
                >
                  2nd Floor TAEN Business Complex Opposite former NITEL Office,
                  Old Airport Junction, Jos, Plateau State, Nigeria.
                </a>
              </li>
              <li>
                <a
                  className="active:text-orange hover:text-orange"
                  href="mailto:contact@nhubfoundation.org"
                >
                  <img
                    src={
                      "https://res.cloudinary.com/ddgyd8szc/image/upload/v1682791103/vector2_syc7vh.png"
                    }
                    alt=""
                    className="inline mr-2 h-4 w-4"
                  />
                  contact@nhubfoundation.org
                </a>
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/ddgyd8szc/image/upload/v1682791103/call_qlcbut.png"
                  }
                  alt=""
                  className="inline mr-2 h-4 w-4"
                />
                <a
                  className="active:text-orange hover:text-orange"
                  href="tel:0806 864 0710"
                >
                  0816 740 3660
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 ">
            <h3 className="text-[1.2rem] font-semibold leading-5">
              Social Media Links
            </h3>
            <ul className="text-[1rem] leading-6  flex flex-col gap-2">
              <li>
                <a
                  className="active:text-orange hover:text-orange"
                  href="https://web.facebook.com/nhubfoundation/?_rdc=1&_rdr"
                >
                  <img
                    src={
                      "https://res.cloudinary.com/ddgyd8szc/image/upload/v1682791103/Vector_3_liqlht.png"
                    }
                    alt=""
                    className="inline mr-2"
                  />
                  Facebook
                </a>
              </li>
              <li>
                <a
                  className="active:text-orange hover:text-orange"
                  href="https://twitter.com/nhubfoundation"
                >
                  <img
                    src={
                      "https://res.cloudinary.com/ddgyd8szc/image/upload/v1682791103/Vector_4_kiillf.png"
                    }
                    alt=""
                    className="inline mr-2"
                  />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  className="active:text-orange hover:text-orange"
                  href="https://www.instagram.com/nhub_ng/"
                >
                  <img
                    src={
                      "https://res.cloudinary.com/ddgyd8szc/image/upload/v1682791103/Vector_5_bvtror.png"
                    }
                    alt=""
                    className="inline mr-2"
                  />
                  Instagram
                </a>
              </li>
              <li>
                <a
                  className="active:text-orange hover:text-orange"
                  href="https://ng.linkedin.com/company/nhub-foundation-africa"
                >
                  <img
                    src={
                      "https://res.cloudinary.com/ddgyd8szc/image/upload/v1682791103/Vector_6_ftlpj1.png"
                    }
                    alt=""
                    className="inline mr-2"
                  />
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <p className="text-[0.8rem] leading-5 text-center py-4">
            @2022 <span className="text-orange">www.nhubfoundation.org </span>
            all right reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
