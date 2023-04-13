// import * as request from "~/utils/request";

const login = async (q, type = "less") => {
  //fetch api here
  // try {
  //     const res = request.get('login/search', {
  //         params: {
  //             q,
  //             type,
  //         },
  //     });
  //     return res;
  // } catch (err) {
  //     console.error('Loi fetchAPI', err);
  // }
  return new Promise((resolve) => {
    fetch('https://backendwebtrasualaravel-production-6fb6.up.railway.app/api/customer/otp-authentication', {
      method: 'POST', // *GET, POST, PUT, DELETE, etc.
      mode: 'cors', // no-cors, *cors, same-origin
      credentials: 'same-origin', // include, *same-origin, omit
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': '{{csrf_token()}}'
      },
      body: JSON.stringify(q) // body data type must match "Content-Type" header
    }).then(data=>resolve(data.json()))
  });
};
export default login;
