import { projectFirestore } from 'firebase/config';

// Create Post
export function createBike(data) {
  return projectFirestore.collection('posts').add(data);
}

// Get Post by Query
export async function getBikesByQuery(query) {
  const queryObj = query
    .slice(1)
    .split('&')
    .map((queryParam) => {
      let kvp = queryParam.split('=');
      return { key: kvp[0], value: kvp[1] };
    })
    .reduce((acc, kvp) => {
      acc[kvp.key] = kvp.value;
      return acc;
    }, {});

  const queryArr = Object.entries(queryObj).reduce((acc, val) => {
    if (val[1] !== '' && val[1] !== 'all') {
      acc.push(val);
    }
    return acc;
  }, []);

  let posts = await projectFirestore.collection('posts').get();

  let allPosts = [];

  posts.forEach((post) => {
    const data = post.data();
    allPosts.push({ ...data, id: post.id });
  });

  const conditions = [];

  queryArr.forEach(([name, value]) => {
    switch (name) {
      case 'type':
        allPosts = allPosts.filter((post) => post.type === value);
        break;

      case 'brand':
        allPosts = allPosts.filter((post) => post.brand === value);
        break;

      case 'model':
        allPosts = allPosts.filter((post) => post.model.includes(value));
        break;

      case 'yearFrom':
        allPosts = allPosts.filter(
          (post) => Number(post.year) >= Number(value)
        );
        break;

      case 'yearTo':
        allPosts = allPosts.filter(
          (post) => Number(post.year) <= Number(value)
        );
        break;

      case 'priceFrom':
        allPosts = allPosts.filter(
          (post) => Number(post.price) >= Number(value)
        );
        break;

      case 'priceTo':
        allPosts = allPosts.filter(
          (post) => Number(post.price) <= Number(value)
        );
        break;

      case 'capacityFrom':
        allPosts = allPosts.filter(
          (post) => Number(post.capacity) >= Number(value)
        );
        break;

      case 'capacityTo':
        allPosts = allPosts.filter(
          (post) => Number(post.capacity) <= Number(value)
        );
        break;

      case 'powerFrom':
        allPosts = allPosts.filter(
          (post) => Number(post.power) >= Number(value)
        );
        break;

      case 'powerTo':
        allPosts = allPosts.filter(
          (post) => Number(post.power) <= Number(value)
        );
        break;

      case 'isUsed':
        conditions.push('isUsed');
        break;

      case 'isNew':
        conditions.push('isNew');
        break;

      default:
        break;
    }
  });

  conditions.forEach((condition) => {
    if (conditions.length < 2) {
      if (condition === 'isUsed') {
        allPosts = allPosts.filter((post) => post.condition === 'used');
      } else if (condition === 'isNew') {
        allPosts = allPosts.filter((post) => post.condition === 'new');
      }
    }
  });

  console.log(allPosts);
  return allPosts;
}

// Get personal posts
export async function getUserBikes(id) {
  let posts = await projectFirestore
    .collection('posts')
    .where('creator', '==', id)
    .get();

  let personalPosts = [];

  posts.forEach((post) => {
    const data = post.data();
    personalPosts.push({ ...data, id: post.id });
  });

  return personalPosts;
}

// Get current post
export async function getBike(id) {
  let post = await projectFirestore.collection('posts').doc(id).get();
  return post.data();
}

// Delete Post
export async function deleteBike(postId) {
  const deletedPost = await projectFirestore
    .collection('posts')
    .doc(postId)
    .delete();
  return deletedPost;
}
