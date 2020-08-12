import { projectStorage } from 'firebase/config';

export function uploadFile(file) {
  const storageRef = projectStorage.ref(file.name);
  return storageRef.put(file);
}
