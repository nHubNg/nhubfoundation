const Footer = () => {
  return (
    <>
      <footer className="bg-black text-textAsh">
        <div className="p-4  flex flex-col gap-4  ">
          <div className=" flex flex-col gap-4">
            <h3 className="text-[1.5rem] leading-7">Company</h3>
            <ul className="text-[1rem] leading-6 flex flex-col gap-2">
              <li>
                <a className="active:text-orange hover:text-orange" href="">
                  About us
                </a>
              </li>
              <li>
                <a className="active:text-orange hover:text-orange" href="">
                  Contact us
                </a>
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
              <li>
                <a className="active:text-orange hover:text-orange" href="">
                  Support Center
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-[1.5rem] leading-7">Question?</h3>
            <ul className="text-[1rem] leading-6  flex flex-col gap-2 ">
              <li>
                <a className="active:text-orange hover:text-orange" href="">
                  About us
                </a>
              </li>
              <li>
                <a className="active:text-orange hover:text-orange" href="">
                  Why choose us
                </a>
              </li>
              <li>
                <a className="active:text-orange hover:text-orange" href="">
                  Career
                </a>
              </li>
              <li>
                <a className="active:text-orange hover:text-orange" href="">
                  Team
                </a>
              </li>
              <li>
                <a className="active:text-orange hover:text-orange" href="">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-[1.5rem] leading-7">Contact us</h3>
            <ul className="text-[1rem] leading-6  flex flex-col gap-2">
              <li>
                <a className="active:text-orange hover:text-orange" href="">
                  <img
                    src={
                      "https://res.cloudinary.com/ddgyd8szc/image/upload/v1682791103/vector3_wn5f1n.png"
                    }
                    alt=""
                    className="inline mr-2"
                  />
                  nHub Foundation
                </a>
              </li>
              <li>
                <a className="active:text-orange hover:text-orange" href="">
                  <img
                    src={
                      "https://res.cloudinary.com/ddgyd8szc/image/upload/v1682791103/vector2_syc7vh.png"
                    }
                    alt=""
                    className="inline mr-2"
                  />
                  info@gmail.com
                </a>
              </li>
              <li>
                <img
                  src={
                    "https://res.cloudinary.com/ddgyd8szc/image/upload/v1682791103/call_qlcbut.png"
                  }
                  alt=""
                  className="inline mr-2"
                />
                <a className="active:text-orange hover:text-orange" href="">
                  1234568890
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-[1.5rem] leading-7">Useful Links</h3>
            <ul className="text-[1rem] leading-6  flex flex-col gap-2">
              <li>
                <a className="active:text-orange hover:text-orange" href="">
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
                <a className="active:text-orange hover:text-orange" href="">
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
                <a className="active:text-orange hover:text-orange" href="">
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
                <img
                  src={
                    "https://res.cloudinary.com/ddgyd8szc/image/upload/v1682791103/Vector_6_ftlpj1.png"
                  }
                  alt=""
                  className="inline mr-2"
                />
                <a className="active:text-orange hover:text-orange" href="">
                  <img alt="" className="inline mr-2" />
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div>
          <p className="text-[0.8rem] leading-5 text-center">
            @2022 <span className="text-orange">www.nhubfoundation.org </span>
            all right reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
