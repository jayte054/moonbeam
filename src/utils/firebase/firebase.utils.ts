import {initializeApp} from "firebase/app";
import { getAuth, 
  signInWithPopup, 
  signInWithRedirect, 
  GoogleAuthProvider, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  NextOrObserver,
  User
  // FacebookAuthProvider 
} 
  from "firebase/auth"
import {getFirestore, 
        doc, 
        setDoc, 
        getDoc,
        collection,
        writeBatch,
        query,
        getDocs
      } from "firebase/firestore"
import { unstable_batchedUpdates } from "react-dom";

const firebaseConfig = {
    apiKey: "AIzaSyBjMZbzJ2n4r2FNwXrB4_ZaUjQO10ZSLX8",
    authDomain: "moonbeam-cakes-db.firebaseapp.com",
    // authDomain1: "https://moonbeam-cakes-db.firebaseapp.com/__/auth/handler",
    projectId: "moonbeam-cakes-db",
    storageBucket: "moonbeam-cakes-db.appspot.com",
    messagingSenderId: "694127343981",
    appId: "1:694127343981:web:9e01ce205dd332e88b0264"
  };
  
  // Initialize Firebase
   const firebaseApp = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider()
  // const facebookProvider = new FacebookAuthProvider()

  googleProvider.setCustomParameters({
    prompt: "select_account"
  })

  export const auth = getAuth()
  export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider)
  export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider)
  // export const signInWithFacebookProvider = () => signInWithRedirect(auth, facebookProvider)

  export const db = getFirestore()

  export const addCollectionAndDocuments = async (collectionKey: any, objectToAdd: any) => {
      const collectionRef = collection(db, collectionKey)
      const batch = writeBatch(db)

      objectToAdd.forEach((object: any) => {
        const docRef = doc(collectionRef, object.title.toLowerCase())
        batch.set(docRef, object)
      })

      await batch.commit()
      console.log("done")

  }

  export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, "categories")
    const q = query(collectionRef)

    const querySnapShot = await getDocs(q)
    const categoryMap = querySnapShot.docs.reduce((acc: any, docSnapShot: any) => {
      const {title, items} = docSnapShot.data()
      acc[title.toLowerCase()] = items
      return acc
    }, {})
    return categoryMap
  }

  export const createUserDocFromAuth = async(userAuth: any, additionalInformation: any = {}) => {
    if(!userAuth) return;
    const userDocRef =  doc(db, "users", userAuth.uid)
    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef)
    console.log(userSnapshot)
    console.log(userSnapshot.exists())

    if(!userSnapshot.exists()) {
      const {displayName, email} = userAuth
      const createdAt = new Date()

      try{
        await setDoc(userDocRef, {
          displayName,
          email,
          createdAt,
          ...additionalInformation
        })
      }catch(error: any) {
        console.log("error creating user", error.message)
      }
    }
  }

  export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password)
  }

  export const signInAuthWithEmailAndPassword = async (email: string, password: string) => {
    if(!email || !password) return;

    return await signInWithEmailAndPassword(auth, email, password)
  }

  export const signOutUser = async() => await signOut(auth)

  export const onAuthStateChangedListener = (callback: any) => onAuthStateChanged(auth, callback)