import styled from 'styled-components';

const CoronaGroupWrap = styled.div`
  margin-bottom: 20px;
  width: 100%;
`;

type CoronaGroupProps = {
  children: React.ReactNode;
};

const CoronaGroup = (props: CoronaGroupProps) => {
  const { children } = props;
  return <CoronaGroupWrap>{children}</CoronaGroupWrap>;
};

export default CoronaGroup;
