import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";
// import axios from "axios";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const singInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const createEmailPasswordUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                console.log(user);
                const newUser = { email };
                // storeUser(newUser);
                console.log(newUser);
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                setError(error.message);
                // ..
            });
    }
    const signInWithEmailPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                console.log(user);
                setError('');
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                setError(error.message);
            })
            .finally(() => setLoading(false));
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
            setLoading(false)
        })
    }, [])
    // const storeUser = (user) => {
    //     axios.post('http://localhost:5000/users/', user)
    //         .then(res => {
    //             if (res.data.insertedId) {
    //                 alert('Added successfully');
    //             }
    //         })
    // }
    return {
        user,
        error,
        createEmailPasswordUser,
        signInWithEmailPassword,
        singInUsingGoogle,
        logOut,
        loading
    }
}
export default useFirebase;