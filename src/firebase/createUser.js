import firebase from 'firebase';
import 'firebase/firestore';
import { getFirestore } from './config';

const createUser = (email, name, phone) => {
    return new Promise (async (resolve, reject) => {

        const user = {
            email: email.toLowerCase(),
            displayName: name,
            phoneNumber: phone,
            date: firebase.firestore.Timestamp.fromDate(new Date())
        }

        const db = getFirestore();
        const users = db.collection('users');

        
                     users.add(user)
                        .then((response)=>{
                            console.log('usuario añadido con exito')
                            resolve(response.id)
                        })
                        .catch((err)=> console.log(err))
    })
}

export default createUser
