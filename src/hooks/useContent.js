import { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../context/Firebase';

export default function useContent(target) {
  const { firebase } = useContext(FirebaseContext);
  const [content, setContent] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection(target)
      .get()
      .then((snap) => {

        const allContent = snap.docs.map((doc) => {
          return {
            ...doc.data(),
            docId: doc.id,
          };
        });
        setContent(allContent);
      });
  }, []);
  return { [target]: content };
}
