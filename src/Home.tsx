import Layout from './components/Layout';
import styled from 'styled-components';
import CoronaContainer from './components/corona/CoronaContainer';
import CoronaFlex from './components/corona/CoronaFlex';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPosts } from './actions/fetchActions';
import { unregisteredPostsSelector } from './selectors/postSelector';
import PostCard from './components/PostCard';
import CoronaSelect from './components/corona/CoronaSelect';
import CoronaInput from './components/corona/CoronaInput';
import CoronaGroup from './components/corona/CoronaGroup';
import CoronaButton from './components/corona/CoronaButton';

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

const RegisterForm = styled(CoronaFlex)`
  padding: 40px;
  margin: 80px 0;
  background: #ffffff;
  border: 1px solid #dbdbdb;
  box-shadow: 0px 4px 14px rgba(132, 132, 132, 0.5);
  border-radius: 20px;
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    .title {
      color: #01254f;
      font-size: 22px;
      margin-bottom: 20px;
    }
    .hint {
      font-weight: 400;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.65);
      text-align: center;
      margin-bottom: 40px;
    }
  }
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
      <CoronaContainer>
        <RegisterForm
          flexDirection="column"
          flexJustifyContent="center"
          flexAlignItems="center"
        >
          <div className="form">
            <div className="title">Register for a Webinar now</div>
            <div className="hint">
              Please fill in the form below and you will be contacted by one of
              our professional business experts.
            </div>
            <CoronaGroup>
              <CoronaSelect
                label="Topic"
                options={[{ label: '123', value: '123' }]}
                onChange={() => {}}
              />
            </CoronaGroup>
            <CoronaGroup>
              <CoronaInput label="First name" onChange={() => {}} />
            </CoronaGroup>
            <CoronaGroup>
              <CoronaInput label="Last name" onChange={() => {}} />
            </CoronaGroup>
            <CoronaGroup>
              <CoronaInput label="Email" onChange={() => {}} />
            </CoronaGroup>
            <CoronaGroup>
              <CoronaButton text="Register" onClick={() => {}} />
            </CoronaGroup>
          </div>
        </RegisterForm>
      </CoronaContainer>
    </Layout>
  );
};

export default Home;
