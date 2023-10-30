import axios from 'axios';
import Cookies from "js-cookie";

// const cookie = Cookies.get('status')
// console.log(cookie)
const url = import.meta.env.VITE_BASE_URL

export async function signIn (email, password) {
    const header = {
        "Content-Type": "application/json",
      };
      const payload = {
          email: email,
          password: password,
      };
      const result = await axios.post(`${url}/auth/sign-in`, JSON.stringify(payload),{ headers: header})
      if (result.data.statusCode === 200 || result.data.statusCode === 201){
        return result
      } else {
        return result
      }
}

export async function getAllIntern(item, value) {
      const header = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Cookies.get("status")}`,
      };
      const payload = {
        filters: { [item] : value.toString() },
      };
  const result = await axios.post(
    `${url}/admin/internship/get-applications`,
    JSON.stringify(payload),
    {
      headers: header,
    }
  );
   if (result.error !== null) {
     return result;
   } else {
     console.log(result);
   }
}

export async function getAnalytics() {
  const header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${Cookies.get("status")}`,
  };
  const result = await axios.get(
    `${url}/admin/internship/count-docs`,
    {
      headers: header,
    }
  );
  if (result.error !== null) {
    return result;
  } else {
    console.log(result);
  }
}

export async function editRequest(id, item) {
  const header = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${Cookies.get("status")}`,
  };
  const payload = item;
  const result = await axios.patch(
    `${url}/admin/internship/update/${id}`,
    JSON.stringify(payload),
    {
      headers: header,
    }
  );
  if (result.error !== null) {
    return result;
  } else {
    console.log(result);
  }
}