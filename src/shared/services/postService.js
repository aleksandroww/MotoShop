import { projectFirestore } from 'firebase/config';

export function createPost(data) {
  return projectFirestore.collection('posts').add(data);
}
export async function deletePost(postId) {
  // Get posts from firebase
  await projectFirestore
    .collection('posts')
    .doc(postId)
    .delete()
    .then(function () {
      window.location.reload(false);
    })
    .catch(function (error) {
      console.error('Error removing document: ', error);
    });

  return deletePost;
}
export async function getPostsByQuery(query) {
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

  // Get posts from firebase
  let posts = await projectFirestore.collection('posts').get();

  // All Posts
  let allPosts = [];
  posts.forEach((post) => {
    allPosts.push(post.data());
  });

  // Conditions
  const conditions = [];

  // Filter by queries
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

  // Filter conditions
  conditions.forEach((condition) => {
    if (conditions.length < 2) {
      if (condition === 'isUsed') {
        allPosts = allPosts.filter((post) => post.condition === 'used');
      } else {
        allPosts = allPosts.filter((post) => post.condition === 'new');
      }
    }
  });

  return allPosts;
}

export async function getPersonalPosts(query) {
  // Get posts from firebase
  let posts = await projectFirestore.collection('posts').get();

  // All Posts
  let personalPosts = [];

  posts.forEach((post) => {
    personalPosts.push(post.data());
  });

  return personalPosts;
}
