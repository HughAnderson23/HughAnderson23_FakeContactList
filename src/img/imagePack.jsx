import IconKid_1 from '/workspaces/HughAnderson23_FakeContactList/src/img/Icon Kid_1.jpg'
import IconKid_2 from '/workspaces/HughAnderson23_FakeContactList/src/img/Icon Kid_2.jpg'
import IconKid_3 from '/workspaces/HughAnderson23_FakeContactList/src/img/Icon Kid_3.jpg'
import IconKid_4 from '/workspaces/HughAnderson23_FakeContactList/src/img/Icon Kid_4.jpg'
import IconKid_5 from '/workspaces/HughAnderson23_FakeContactList/src/img/Icon Kid_5.jpg'

import IconKid_8 from '/workspaces/HughAnderson23_FakeContactList/src/img/Icon Kid_8.jpg'

const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * imageArray.length);
    return imageArray[randomIndex];
  };

//   const getRandomImage = (contactId) => {
//     const randomIndex = contactId % imageArray.length;
//     return imageArray[randomIndex];
//   };

const imageArray = [
    IconKid_1,
    IconKid_2,
    IconKid_3,
    IconKid_4,
    IconKid_5,

    IconKid_8,

    // Add more image URLs or file paths as needed
  ];
  
export default getRandomImage

// 'src/img/Icon Kid_2.jpg',
//     'src/img/Icon Kid_3.jpg',
//     'src/img/Icon Kid_4.jpg',
//     '/workspaces/HughAnderson23_FakeContactList/src/img/Icon Kid_5.jpg',
//     '/workspaces/HughAnderson23_FakeContactList/src/img/Icon Kid_6.jpg',
//     '/workspaces/HughAnderson23_FakeContactList/src/img/Icon Kid_7.jpg',
//     '/workspaces/HughAnderson23_FakeContactList/src/img/Icon Kid_8.jpg',
//     '/workspaces/HughAnderson23_FakeContactList/src/img/Icon Kid_9.jpg',
//     '/workspaces/HughAnderson23_FakeContactList/src/img/Icon Kid_10.jpg',
//     '/workspaces/HughAnderson23_FakeContactList/src/img/Icon%20Kid_11.jpg',
//     '/workspaces/HughAnderson23_FakeContactList/src/img/Icon Kid_12.jpg',
//     '/workspaces/HughAnderson23_FakeContactList/src/img/Icon Kid_13.jpg',