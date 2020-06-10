import firebase from '../firebase/firebase';

export const uploadImageFirebase = async (props) => {
  try {
    const { lat, lng, userId, image } = props;
    const imageName = `${lat.toString().split(',').join()}${lng.toString().split(',').join()}${userId}`;
    const fileRef = firebase.storage().ref('images/maps/').child(imageName);
    const upLoadTaskSnapshot = await fileRef.putString(image, 'base64', { contentType: 'image/jpg' });
    const downloadUrl = await upLoadTaskSnapshot.ref.getDownloadURL();
    return downloadUrl;
  } catch (error) {
    console.log(error);
  }
}

export const uploadProfileImageFirebase = async (avatarImage, userId) => {
  try {
    const imageName = avatarImage.name.split('.')[0] + '_' + userId;
    const storageRef = firebase.storage().ref('images/profile/').child(imageName);
    const upLoadImage = await storageRef.put(avatarImage);
    const avatarUrl = await upLoadImage.ref.getDownloadURL();
    return avatarUrl;
  } catch (error) {
    console.log(error);
  }
}