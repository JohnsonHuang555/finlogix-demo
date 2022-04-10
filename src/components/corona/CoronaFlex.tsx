import styled from 'styled-components';

type CoronaFlexProps = {
  children: React.ReactNode;
  flexJustifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
  flexDirection?: 'column' | 'row';
  flexAlignItems?: 'flex-start' | 'center' | 'flex-end';
};

const FlexWrap = styled.div<CoronaFlexProps>`
  display: flex;
  justify-content: ${(props) => props.flexJustifyContent};
  align-items: ${(props) => props.flexAlignItems};
  flex-direction: ${(props) => props.flexDirection};
`;

const CoronaFlex = (props: CoronaFlexProps) => {
  const {
    children,
    flexJustifyContent = 'flex-start',
    flexAlignItems = 'flex-start',
    flexDirection = 'row',
  } = props;

  return (
    <FlexWrap
      flexJustifyContent={flexJustifyContent}
      flexAlignItems={flexAlignItems}
      flexDirection={flexDirection}
    >
      {children}
    </FlexWrap>
  );
};

export default CoronaFlex;
