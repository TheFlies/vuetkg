import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/firestore'

import secretKeys from './secrets.json'

// Initialize Firebase
let app = firebase.initializeApp(secretKeys)
let db = app.database()
let dbFirestore = app.firestore()
dbFirestore.settings({})
// Get a reference to the storage service, which is used to create references in your storage bucket
let storage = app.storage()
export default { db, dbFirestore, storage }
