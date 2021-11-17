import firebase from 'firebase';
import { useState, useEffect } from 'react';
// import "firebase/storage"

const config = {
    apiKey: "AIzaSyBjkcUazf5gY8LzzLOhODI1mg61cMikJOY",
    authDomain: "homework-freelancer.firebaseapp.com",
    projectId: "homework-freelancer",
    storageBucket: "homework-freelancer.appspot.com",
    messagingSenderId: "993255476216",
    appId: "1:993255476216:web:b0d432a4f016d59f98a40d",
    measurementId: "G-NXM0P0HE92"
};

export const useFirebase = () => {
    const [state, setState] = useState({ firebase });

    useEffect(() => {
        let app;
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
        let auth = firebase.auth(app);
        let firestore = firebase.firestore(app);
        let storage = firebase.storage(app);
        let database = firebase.database(app)

        setState({firebase, firestore, app, auth, storage, database})

    }, []);

    return state;
}

export const useDoc = (path) => {
    const { firestore } = useFirebase();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(!firestore) {
            return ;
        }

        firestore.doc(path).onSnapshot((doc) => {
            setData({ id: doc.id, ...doc.data() });
            setLoading(false);
        })
    
    }, [firestore, path])

    const updateRecord = (data) => {
        return firestore.doc(path).set(
            { ...data }, { merge: true }
        )
    }

    const deleteRecord = (path) => {
        return firestore.doc(path).delete();
    }

    const readAgain = () => {
        firestore.doc(path).get().then(function (doc) {
            setData(doc.data())
        }).catch(function (error) {
            console.log("Error getting cached document:", error);
        });
    }

    return { data, loading, updateRecord, deleteRecord, readAgain }
}

export const useCol = (path, sort = false) => {

    const { firestore } = useFirebase();
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (firestore && path) {
            let query = firestore.collection(path);
            let order = sort ? query.orderBy('createdAt', 'asc') : query;

            const unsubscribe = order.onSnapshot((querySnapshot) => {
                    setData(querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
                    setLoading(false);
                })

            return () => unsubscribe();
        }
    }, [firestore, path, sort])

    const updateRecord = (id, data) => {
        if (firestore)
            return firestore.collection(path).doc(id).set(
                {
                    ...data,
                    updatedAt: firebase.firestore.FieldValue.serverTimestamp(),
                },
                {
                    merge: true
                },
            )
        else
            return null
    }


    const createRecord = (id, data) => {
        if (id === '') {
            return firestore.collection(path).doc().set(
                {
                    ...data,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(), 
                },
                {
                    merge: true
                },
            )

        }
        return firestore.collection(path).doc(id).set(
            {
                ...data,
                createdAt: firebase.firestore.FieldValue.serverTimestamp(), 
            },
            {
                merge: true
            },
        )
    }

    const deleteRecord = (id) => {
        return firestore.collection(path).doc(id).delete();
    }


    return { data, loading, updateRecord, deleteRecord, createRecord }
}
