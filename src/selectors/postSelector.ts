import { StoreState } from '../reducers/combinedReducer';

export const unregisteredPostsSelector = (store: StoreState) => {
  return store.post.posts.filter((post) => !post.favourited);
};
