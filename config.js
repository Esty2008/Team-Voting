import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDOhTSknmSmTyeUN_Zw3FfBhJ6vPB30e6Y",
    authDomain: "hotairbaloon-4b196.firebaseapp.com",
    databaseURL: "https://hotairbaloon-4b196-default-rtdb.firebaseio.com",
    projectId: "hotairbaloon-4b196",
    storageBucket: "hotairbaloon-4b196.appspot.com",
    messagingSenderId: "200481678012",
    appId: "1:200481678012:web:b8fb48c361320ded1e26b9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();