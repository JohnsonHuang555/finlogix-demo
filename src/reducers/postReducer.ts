import { Post } from '../domain/models/Post';

export enum ActionType {
  LoadedPosts = 'post/loaded',
}

export type State = {
  posts: Post[];
};

const initialState: State = {
  posts: [],
};

export type LoadedClientAction = {
  type: ActionType.LoadedPosts;
  posts: Post[];
};

type Action = LoadedClientAction;

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.LoadedPosts: {
      console.log(action.posts, '???');
      return {
        ...state,
        posts: action.posts,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
