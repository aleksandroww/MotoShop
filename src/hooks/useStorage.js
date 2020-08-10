import { useState, useEffect } from 'react';
import { projectStorage } from 'firebase/config';

export function useStorage(file) {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

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
      }
    );
  }, [file]);

  return { progress, error };
}
