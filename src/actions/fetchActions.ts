import axios from 'axios';
import { Dispatch } from 'redux';
import PostFactory from '../domain/factories/PostFactory';
import { NetPost } from '../domain/remote/NetPost';
import { ActionType, LoadedClientAction } from '../reducers/postReducer';

const BASE_URL = 'https://g1api.finlogix.com/v1';

type GetPostsResponse = {
  data: NetPost[];
  links: any;
  meta: any;
};

export const getPosts = async (dispatch: Dispatch<LoadedClientAction>) => {
  try {
    const { data } = await axios.get<GetPostsResponse>(
      `${BASE_URL}/post/analysis?per_page=12&page=1`
    );
    const posts = PostFactory.createArrayFromNet(data.data);
    dispatch({ type: ActionType.LoadedPosts, posts });
  } catch (error) {
    throw new Error('Something wrong...');
  }
};
