import firebase from "firebase";

var config = {
  apiKey: "AIzaSyAlyCscrXdnJ90ismTBPHNrdOFqqA_fmtM",
  authDomain: "reactanimate.firebaseapp.com",
  databaseURL: "https://reactanimate.firebaseio.com",
  projectId: "reactanimate",
  storageBucket: "",
  messagingSenderId: "669313841908"
};
firebase.initializeApp(config);
export default firebase;
