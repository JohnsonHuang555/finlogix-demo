import styled from 'styled-components';
import { Post } from '../domain/models/Post';
import CoronaFlex from './corona/CoronaFlex';

const PostCardWrap = styled(CoronaFlex)`
  background: white;
  width: calc(100% / 3 - 62px);
  padding: 20px;
  border: 1px solid #d6d6d6;
  border-radius: 4px;
  .created-at,
  .title {
    color: #01254f;
    font-size: 14px;
    font-weight: 900;
  }
  .created-at {
    margin-bottom: 20px;
  }
  .title {
    margin-bottom: 12px;
  }
  .start-date,
  .content {
    color: rgba(0, 0, 0, 0.65);
    font-weight: 400;
    font-size: 14px;
  }
  .start-date {
    flex: 1;
    margin-bottom: 20px;
  }
  .content {
    margin-bottom: 20px;
  }
  .register-now {
    color: #6bb718;
    width: 100%;
    cursor: pointer;
    &::after {
      content: '>';
      width: 30px;
      height: 30px;
      border: 1px solid #6bb718;
      border-radius: 50%;
      text-align: center;
      font-size: 20px;
    }
  }
`;

type PostCardProps = {
  post: Post;
};

const PostCard = (props: PostCardProps) => {
  const { post } = props;

  const getCreatedAt = () => {
    const date = new Date(post.createdAt);
    return date.toLocaleDateString('en-US');
  };

  const getStartDate = () => {
    const date = new Date(post.createdAt);
    date.setDate(date.getDate() + 10);
    return date.toLocaleDateString('en-US');
  };

  const getContent = () => {
    const content = JSON.parse(post.content);
    return content.blocks[0].text;
  };

  return (
    <PostCardWrap flexDirection="column">
      <div className="created-at">{getCreatedAt()}</div>
      <div className="title">{post.title}</div>
      <div className="content">{getContent()}</div>
      <div className="start-date">{getStartDate()}</div>
      <CoronaFlex className="register-now" flexJustifyContent="space-between">
        Register Now
      </CoronaFlex>
    </PostCardWrap>
  );
};

export default PostCard;
