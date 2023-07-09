import { getStorage, ref, uploadBytes, getDownloadURL,uploadBytesResumable } from 'firebase/storage';

import app from './firebase';
const storage = getStorage(app);

export const uploadImageToFirebaseStorage = (imageFile) => {
    return new Promise((resolve, reject) => {
      const storageRef = ref(storage, `images/${Date.now()}_${imageFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);
  
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // Handle progress, if needed
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload progress: ${progress}%`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };