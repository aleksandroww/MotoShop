import { projectFirestore } from 'firebase/config';

export function createPost(data) {
  return projectFirestore.collection('posts').add(data);
}
 