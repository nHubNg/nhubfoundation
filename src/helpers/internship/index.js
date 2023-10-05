import axios from 'axios';

const url = import.meta.env.VITE_BASE_URL


async function Internship (
    email,
    phone,
    first_name,
    last_name,
    institution,
    department,
    course_of_study,
    reg_number,
    start_date,
    end_date,
    experience,
    track,
    gender,
    interview_location,
    internship_duration,
    it_letter,
    cover_letter
    ){
    const header = {
        "Content-Type": "application/json",
      };
      const payload = {
          email: email,
          phone: phone,
          first_name :first_name,
          last_name :last_name,
          institution :institution ,
          department  :department   ,
          course_of_study :course_of_study,
          reg_number :reg_number,
          start_date :start_date,
          end_date    :end_date,
          experience :experience,
          track :track,
          gender :gender,
          interview_location  :interview_location      ,
          internship_duration :internship_duration        ,
          it_letter :it_letter          ,
          cover_letter :cover_letter
          
      };
      const result = await axios.post(`${url}/internhsip/create`, JSON.stringify(payload),{ headers: header})
      if (result.statusCode === 400 || result.statusCode === 401){
        return result
      }else {
        console.log(result)
      }

}

async function getAllIntern(){
    const result = await axios.get(`${url}/admin/internship/get-applications`)
}