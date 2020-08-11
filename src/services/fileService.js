// import { projectStorage } from 'firebase/config';

// export function uploadFile(file) {
//   let percents;
//   let error;
//   let url;

//   const storageRef = projectStorage.ref(file.name);

//   storageRef.put(file).on(
//     'state_changed',
//     (bytes) => {
//       const percentsUploaded =
//         (bytes.totalBytes / bytes.bytesTransferred) * 100;
//       percents = percentsUploaded;
//     },
//     (err) => {
//       error = err;
//     },
//     async () => {
//       const imageUrl = await storageRef.getDownloadURL();
//       url = imageUrl;
//     }
//   );

//   return { percents, error, url };
// }
