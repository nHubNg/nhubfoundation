const Footer = () => {
  return (
    <>
      <footer className="bg-black text-textAsh">
        <div className="p-4  flex flex-col gap-4  ">
          <div className=" flex flex-col gap-4">
            <h3 className="text-[1.5rem] leading-7">Company</h3>
            <ul className="text-[1rem] leading-6 flex flex-col gap-2">
              <li className="hover:text-orange">
                <a href="">About us</a>
              </li>
              <li className="hover:text-orange">
                <a href="">Contact us</a>
              </li>
              <li className="hover:text-orange">
                <a href="">Privacy policy</a>
              </li>
              <li className="hover:text-orange">
                <a href="">Terms & Conditions</a>
              </li>
              <li className="hover:text-orange">
                <a href="">Support Center</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-[1.5rem] leading-7">Question ?</h3>
            <ul className="text-[1rem] leading-6  flex flex-col gap-2 ">
              <li className="hover:text-orange">
                <a href="">About us</a>
              </li>
              <li className="hover:text-orange">
                <a href="">Why choose us</a>
              </li>
              <li className="hover:text-orange">
                <a href="">Career</a>
              </li>
              <li className="hover:text-orange">
                <a href="">Team</a>
              </li>
              <li className="hover:text-orange">
                <a href="">FAQs</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-[1.5rem] leading-7">Contact us</h3>
            <ul className="text-[1rem] leading-6  flex flex-col gap-2">
              <li className="hover:text-orange">
                <a href="">
                  <img
                    src="/src/assets/Vector3.png"
                    alt=""
                    className="inline mr-2"
                  />
                  nhub Foundation
                </a>
              </li>
              <li className="hover:text-orange">
                <a href="">
                  <img
                    src="/src/assets/Vector2.png"
                    alt=""
                    className="inline mr-2"
                  />
                  info@gmail.com
                </a>
              </li>
              <li className="hover:text-orange">
                <img
                  src="/src/assets/call.png"
                  alt=""
                  className="inline mr-2"
                />
                <a href="">1234568890</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-[1.5rem] leading-7">Useful Links</h3>
            <ul className="text-[1rem] leading-6  flex flex-col gap-2">
              <li className="hover:text-orange">
                <a href="">
                  <img
                    src="/src/assets/Vector (3).png"
                    alt=""
                    className="inline mr-2"
                  />
                  Facebook
                </a>
              </li>
              <li className="hover:text-orange">
                <a href="">
                  <img
                    src="/src/assets/Vector (4).png"
                    alt=""
                    className="inline mr-2"
                  />
                  Twitter
                </a>
              </li>
              <li className="hover:text-orange">
                <a href="">
                  <img
                    src="/src/assets/Vector (5).png"
                    alt=""
                    className="inline mr-2"
                  />
                  Instagram
                </a>
              </li>
              <li className="hover:text-orange">
                <a href="">
                  <img
                    src="/src/assets/Vector (6).png"
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
          <p className="text-[0.8rem] leading-5 text-center">
            @2022 <span className="text-orange">www.nhubfoundation.org</span>
            all right reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
