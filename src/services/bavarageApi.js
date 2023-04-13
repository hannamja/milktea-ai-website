import * as request from "~/utils/request";
import images from "~/assets/images/bavarage";
const getSugges = async (q, type = "less") => {
  // fetch api here
  // try {
  //     const res = request.get('bavarage/search', {
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
    setTimeout(() => {
      resolve([
        {
          id: 1,
          image: images.trasua,
          name: "Tra sua",
          price: "45.000",
        },
        {
          id: 2,
          image: images.trasua,
          name: "Tra sua",
          price: "45.000",
        },
        {
          id: 3,
          image: images.trasua,
          name: "Tra sua",
          price: "45.000",
        },
        {
          id: 4,
          image: images.trasua,
          name: "Tra sua",
          price: "45.000",
        },
        {
          id: 5,
          image: images.trasua,
          name: "Tra sua",
          price: "45.000",
        },
      ]);
    }, 1000);
  });
};

const getDrinkByType = async () => {
  // fetch api here
  try {
    const res = request.get("drinks", {});
    return res;
  } catch (err) {
    console.error("Loi fetchAPI", err);
  }
};
const bavarageApi = {
  getSugges,
  getDrinkByType,
};

export default bavarageApi;
