import firebase from 'firebase'

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
export default db
