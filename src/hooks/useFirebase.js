import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import initializeAuthentication from "../Firebase/firebase.init";
import axios from "axios";

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const singInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    }
    const createEmailPasswordUser = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user);
                const newUser = { email, name };
                storeUser(newUser);
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                setError(error.message);
                // ..
            });
        //         .catch ((error) => {
        // // const errorCode = error.code;
        // // const errorMessage = error.message;
        // setError(error.message);
        // ..
    }
    const signInWithEmailPassword = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                // Signed in 
                const user = result.user;
                console.log(user);
                setError('');
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
    }, []);
    useEffect(() => {
        fetch(`http://localhost:5000/users/${user.email}`)
            .then(res => res.json())
            .then(res => setAdmin(res.admin));
    }, [user.email])
    const storeUser = (user) => {
        axios.post('http://localhost:5000/users/', user)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                }
            })
    }
    return {
        user,
        error,
        admin,
        createEmailPasswordUser,
        signInWithEmailPassword,
        singInUsingGoogle,
        logOut,
        loading
    }
}
export default useFirebase;