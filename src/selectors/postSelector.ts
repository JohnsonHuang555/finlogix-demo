import { StoreState } from '../reducers/combinedReducer';

export const postsSelector = (store: StoreState) => store.post.posts;
