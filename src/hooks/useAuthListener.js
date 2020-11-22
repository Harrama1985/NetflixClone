import { useContext, useState, useEffect } from 'react'
import {FirebaseContext} from '../context/Firebase'

export default function useAuthListener(){
    const [user, setuser] = useState(JSON.parse(localStorage.getItem('useAuth')))
    const {firebase} = useContext(FirebaseContext) 
    useEffect(() => {
        const listener = firebase.auth().onAuthStateChanged(function(userAuth) {
            if (userAuth) {
              localStorage.setItem('useAuth',JSON.stringify(userAuth))
              setuser(userAuth)
            } else {
              localStorage.removeItem('useAuth')
              setuser('')
            }
            
          });
          return ()=> listener() ;
    }, [])
    return {user}
}
