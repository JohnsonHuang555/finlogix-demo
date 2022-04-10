import { Post } from '../models/Post';
import { NetPost } from '../remote/NetPost';
import { toJsCaseObject } from '../../utils/AjaxDataCase';

// 轉換網路層資料讓他長成 domain 的形狀
class PostFactory {
  static createFromNet(netPost: NetPost): Post {
    return toJsCaseObject(netPost);
  }

  static createArrayFromNet(netPosts: NetPost[]): Post[] {
    return netPosts.map((netPost) => this.createFromNet(netPost));
  }
}

export default PostFactory;
