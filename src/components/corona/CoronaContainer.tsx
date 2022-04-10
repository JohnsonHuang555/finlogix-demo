import styled from 'styled-components';

type CoronaContainerProps = {
  children: React.ReactNode;
  className?: string;
};

const Container = styled.div`
  padding: 0 90px;
`;

const CoronaContainer = (props: CoronaContainerProps) => {
  const { children, className } = props;
  return <Container className={className}>{children}</Container>;
};

export default CoronaContainer;
