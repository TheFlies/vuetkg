import firebase from 'firebase/app'
import 'firebase/auth'
import fb from '@/modules/firebase.js'
import store from '../store'

let usersRef = fb.dbFirestore.collection('users')

function currentUser(email) {
  usersRef.doc(email).get().then(user => {
    if (user.exists) {
      let u = user.data()
      u.email = email
      store.commit('loggedIn', u)
    }
  }).catch(() => {})
}

let auth = {
  login: (account) => {
    return new Promise((resolve, reject) => {
      if (!account.email || !account.password) {
        this.error = 'Missing email or password'
        reject(new Error(this.error))
      } else {
        firebase
          .auth()
          .signInWithEmailAndPassword(account.email, account.password)
          .then(
            data => {
              console.log(data.user)
              // getting user infor
              currentUser(data.user.email)
              resolve(data.user)
            },
            err => {
              reject(err)
            })
          .catch(err => reject(err))
      }
    })
  },
  logout: () => {
    return new Promise((resolve, reject) => {
      firebase.auth().signOut().then(() => {
        store.commit('loggedOut')
        resolve()
      }, (err) => reject(err)).catch(err => reject(err))
    })
  },
  currentUser: currentUser
}

export default auth
