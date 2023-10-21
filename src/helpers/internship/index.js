import axios from "axios";

// const url = import.meta.env.VITE_BASE_URL;

export async function SubmitInternship(
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
) {
  const header = {
    "Content-Type": "multipart/form-data",
  };

  const formData = new FormData();

  formData.append("email", email);
  formData.append("phone", phone);
  formData.append("first_name", first_name);
  formData.append("last_name", last_name);
  formData.append("institution", institution);
  formData.append("department", department);
  formData.append("course_of_study", course_of_study);
  formData.append("reg_number", reg_number);
  formData.append("start_date", start_date);
  formData.append("end_date", end_date);
  formData.append("experience", experience);
  formData.append("track", track);
  formData.append("gender", gender);
  formData.append("interview_location", interview_location);
  formData.append("internship_duration", internship_duration);

  if (it_letter instanceof File) {
    formData.append("it_letter", it_letter);
  } else {
    throw new Error("it_letter must be a File object.");
  }

  if (cover_letter instanceof File) {
    formData.append("cover_letter", cover_letter);
  } else {
    throw new Error("cover_letter must be a File object.");
  }

  console.log(formData);

  const result = await axios.post(
    "https://nhubfoundation-v2.onrender.com/api/v1/internhsip/create",
    formData,
    {
      headers: header,
    }
  );
  console.log(result);
  if (result.status === 200 || result.status === 201) {
    console.log(result);
    return result;
  } else {
    console.log(result);
    throw new Error("Internship submission failed.");
  }
}
