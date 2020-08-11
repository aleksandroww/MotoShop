import { useState, useEffect } from 'react';
import { projectStorage } from 'firebase/config';

function useStorage(file) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storage = projectStorage.ref(file.name);

    storage.put(file).on(
      'state_changed',
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const url = await storage.getDownloadURL();
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, url, error };
}

export default useStorage;
