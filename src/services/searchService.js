// import * as request from "~/utils/request";
import images from "~/assets/images/bavarage";
import axios from "axios";
const search = async (q, signal) => {
  //fetch api here
  // try {
  //     const res = request.get('bavarage/search', {
  //         params: {
  //             q,
  //             type,
  //         },
  //          signal:signal
  //     });
  //     return res;
  // } catch (err) {
  //     console.error('Loi fetchAPI', err);
  // }
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve(
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((v, i) => {
            return {
              data: {
                id: i,
                image: images.trasua,
                name: "Trà sữa phúc long",
                price: "45.000đ",
              },
            };
          })
        ),
      1500
    );
  });
};




const searchSmart = (mood) => {
  var bodyFormData = new FormData();
  bodyFormData.append('answer_mood', mood)
  return new Promise(async (resolve) => {
    let data = await fetch('http://127.0.0.1:5000', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: bodyFormData,
    })
    data = await data.json()
    let list = await fetch('https://backendwebtrasualaravel-production-6fb6.up.railway.app/api/orders/get-list-predict', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        "category_id": data.name,
      }),
    })
    list = await list.json()
    data = { ...data, list: list }
    resolve(data)
  });

}
export const searchMood = searchSmart;
export default search;
