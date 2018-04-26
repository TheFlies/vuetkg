import firebase from 'firebase'
require('firebase/firestore')

// Initialize Firebase
let config = {
  apiKey: 'AIzaSyA_HE_wTvXEr3YojYi8DbzVP4pVsez2L_o',
  authDomain: 'tkg-vue.firebaseapp.com',
  databaseURL: 'https://tkg-vue.firebaseio.com',
  projectId: 'tkg-vue',
  storageBucket: 'tkg-vue.appspot.com',
  messagingSenderId: '645087845803'
}
let app = firebase.initializeApp(config)
let db = app.database()
let dbFirestore = app.firestore()
dbFirestore.settings({timestampsInSnapshots: true})
// Get a reference to the storage service, which is used to create references in your storage bucket
let storage = app.storage()
export default { db, dbFirestore, storage }
