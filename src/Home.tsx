import Layout from './components/Layout';
import styled from 'styled-components';
import CoronaContainer from './components/corona/CoronaContainer';
import CoronaFlex from './components/corona/CoronaFlex';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPosts } from './actions/fetchActions';
import { unregisteredPostsSelector } from './selectors/postSelector';
import PostCard from './components/PostCard';

const Banner = styled(CoronaContainer)`
  margin: 87px 0;
  .title {
    margin-bottom: 30px;
    font-size: 28px;
    color: #01254f;
  }
  .brief {
    max-width: 900px;
    text-align: center;
  }
`;

const PostList = styled(CoronaContainer)`
  padding-top: 80px;
  padding-bottom: 80px;
  background: #f2f2f2;
`;

const Home = () => {
  const dispatch = useDispatch();
  const posts = useSelector(unregisteredPostsSelector);

  useEffect(() => {
    dispatch(getPosts);
  }, []);

  return (
    <Layout>
      <Banner>
        <CoronaFlex
          flexAlignItems="center"
          flexJustifyContent="center"
          flexDirection="column"
        >
          <div className="title">Forex Webinars</div>
          <div className="brief">
            Whether you are new to foreign exchange trading or already have some
            market experience, we believe that a solid FX trading education is
            vital to your success as a trader.
          </div>
        </CoronaFlex>
      </Banner>
      <PostList>
        <CoronaFlex flexWrap="wrap" flexAlignItems="initial" gap="20px">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </CoronaFlex>
      </PostList>
    </Layout>
  );
};

export default Home;
