import React from "react";
import AdminHeader from "../layouts/AdminHeader";
import AppHeader from "../layouts/AppHeader";
import AdminNav from "../layouts/AdminNav";

const PlaceHer = () => {
  return (
    <div>
      <AdminNav heading="Placeher Applications"/>
      <div className="">
        <div className="hidden md:block">
          <AdminHeader heading="Placeher Applications" text="All applicants" />
        </div>
        <AppHeader total={4} />
      </div>
      <div className="mt-8  md:hidden flex flex-col gap-y-5">
          <div className="flex justify-between items-center w-[90%] mx-auto bg-white shadow-md py-4 px-5 rounded-lg">
            <div>
              <h5>Abdulmalik Ishaya</h5>
              <p>elmaleeq112@gmail.com</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/nhubnacademy/image/upload/v1692608267/nHubFoundation/ep_arrow-up_ykqgk7.svg"
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-between items-center w-[90%] mx-auto bg-white shadow-lg py-4 px-5 rounded-lg">
            <div>
              <h5>Abdulmalik Ishaya</h5>
              <p>elmaleeq112@gmail.com</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/nhubnacademy/image/upload/v1692608267/nHubFoundation/ep_arrow-up_ykqgk7.svg"
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-between items-center w-[90%] mx-auto bg-white shadow-lg py-4 px-5 rounded-lg">
            <div>
              <h5>Abdulmalik Ishaya</h5>
              <p>elmaleeq112@gmail.com</p>
            </div>
            <div>
              <img
                src="https://res.cloudinary.com/nhubnacademy/image/upload/v1692608267/nHubFoundation/ep_arrow-up_ykqgk7.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      <div className="hidden md:block">
        <table class="table-auto mx-auto mt-10 w-[90%] overflow-auto ">
          <thead>
            <tr>
              <th className="py-3 text-left">Name</th>
              <th className="py-3 text-center">Email</th>
              <th className="py-3 text-center">Phone</th>
              <th className="py-3 text-center">Available</th>
              <th className="py-3 text-center">Education</th>
              <th className="py-3 text-center">Track</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2">Ufoh Makwin</td>
              <td className="py-3 text-center text-orange">
                zultirilti@gufum.com
              </td>
              <td className="py-3 text-center">09087654323</td>
              <td className="py-3 text-center">Yes</td>
              <td className="py-3 text-center">Undergraduate</td>
              <td className="py-3 text-center">Entrepreneur</td>
            </tr>
            <tr>
              <td className="py-2">Ufoh Makwin</td>
              <td className="py-3 text-center text-orange">
                zultirilti@gufum.com
              </td>
              <td className="py-3 text-center">09087654323</td>
              <td className="py-3 text-center">Yes</td>
              <td className="py-3 text-center">Undergraduate</td>
              <td className="py-3 text-center">Entrepreneur</td>
            </tr>
            <tr>
              <td className="py-2">Ufoh Makwin</td>
              <td className="py-3 text-center text-orange">
                zultirilti@gufum.com
              </td>
              <td className="py-3 text-center">09087654323</td>
              <td className="py-3 text-center">Yes</td>
              <td className="py-3 text-center">Undergraduate</td>
              <td className="py-3 text-center">Entrepreneur</td>
            </tr>
            <tr>
              <td className="py-2">Ufoh Makwin</td>
              <td className="py-3 text-center text-orange">
                zultirilti@gufum.com
              </td>
              <td className="py-3 text-center">09087654323</td>
              <td className="py-3 text-center">Yes</td>
              <td className="py-3 text-center">Undergraduate</td>
              <td className="py-3 text-center">Entrepreneur</td>
            </tr>
            <tr>
              <td className="py-2">Ufoh Makwin</td>
              <td className="py-3 text-center text-orange">
                zultirilti@gufum.com
              </td>
              <td className="py-3 text-center">09087654323</td>
              <td className="py-3 text-center">Yes</td>
              <td className="py-3 text-center">Undergraduate</td>
              <td className="py-3 text-center">Entrepreneur</td>
            </tr>
            <tr>
              <td className="py-2">Ufoh Makwin</td>
              <td className="py-3 text-center text-orange">
                zultirilti@gufum.com
              </td>
              <td className="py-3 text-center">09087654323</td>
              <td className="py-3 text-center">Yes</td>
              <td className="py-3 text-center">Undergraduate</td>
              <td className="py-3 text-center">Entrepreneur</td>
            </tr>
            <tr>
              <td className="py-2">Ufoh Makwin</td>
              <td className="py-3 text-center text-orange">
                zultirilti@gufum.com
              </td>
              <td className="py-3 text-center">09087654323</td>
              <td className="py-3 text-center">Yes</td>
              <td className="py-3 text-center">Undergraduate</td>
              <td className="py-3 text-center">Entrepreneur</td>
            </tr>
            <tr>
              <td className="py-2">Ufoh Makwin</td>
              <td className="py-3 text-center text-orange">
                zultirilti@gufum.com
              </td>
              <td className="py-3 text-center">09087654323</td>
              <td className="py-3 text-center">Yes</td>
              <td className="py-3 text-center">Undergraduate</td>
              <td className="py-3 text-center">Entrepreneur</td>
            </tr>
            <tr>
              <td className="py-2">Ufoh Makwin</td>
              <td className="py-3 text-center text-orange">
                zultirilti@gufum.com
              </td>
              <td className="py-3 text-center">09087654323</td>
              <td className="py-3 text-center">Yes</td>
              <td className="py-3 text-center">Undergraduate</td>
              <td className="py-3 text-center">Entrepreneur</td>
            </tr>
            <tr>
              <td className="py-2">Ufoh Makwin</td>
              <td className="py-3 text-center text-orange">
                zultirilti@gufum.com
              </td>
              <td className="py-3 text-center">09087654323</td>
              <td className="py-3 text-center">Yes</td>
              <td className="py-3 text-center">Undergraduate</td>
              <td className="py-3 text-center">Entrepreneur</td>
            </tr>
            <tr>
              <td className="py-2">Ufoh Makwin</td>
              <td className="py-3 text-center text-orange">
                zultirilti@gufum.com
              </td>
              <td className="py-3 text-center">09087654323</td>
              <td className="py-3 text-center">Yes</td>
              <td className="py-3 text-center">Undergraduate</td>
              <td className="py-3 text-center">Entrepreneur</td>
            </tr>
            <tr>
              <td className="py-2">Ufoh Makwin</td>
              <td className="py-3 text-center text-orange">
                zultirilti@gufum.com
              </td>
              <td className="py-3 text-center">09087654323</td>
              <td className="py-3 text-center">Yes</td>
              <td className="py-3 text-center">Undergraduate</td>
              <td className="py-3 text-center">Entrepreneur</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PlaceHer;
