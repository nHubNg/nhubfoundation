import axios from 'axios';

const url = import.meta.env.VITE_BASE_URL

async function signIn (email, password) {
    const header = {
        "Content-Type": "application/json",
      };
      const payload = {
          email: email,
          password: password,
      };
      const result = await axios.post(`${url}/auth/sign-in`, JSON.stringify(payload),{ headers: header})
      if (result.statusCode === 200 || result.statusCode === 201){
        return result
      }else {
        console.log(result)
      }
}
