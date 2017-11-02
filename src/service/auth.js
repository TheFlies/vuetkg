import firebase from 'firebase'
import fb from '../firebase.js'
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
        reject()
      } else {
        firebase
          .auth()
          .signInWithEmailAndPassword(account.email, account.password)
          .then(
            user => {
              // getting user infor
              currentUser(user.email)
              resolve(user)
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
