import styled from 'styled-components';

type CoronaFlexProps = {
  className?: string;
  children: React.ReactNode;
  flexJustifyContent?: 'flex-start' | 'center' | 'flex-end' | 'space-between';
  flexDirection?: 'column' | 'row';
  flexAlignItems?: 'flex-start' | 'center' | 'flex-end' | 'initial';
  flexWrap?: 'wrap' | 'nowrap';
  gap?: string;
};

const FlexWrap = styled.div<CoronaFlexProps>`
  display: flex;
  justify-content: ${(props) => props.flexJustifyContent};
  align-items: ${(props) => props.flexAlignItems};
  flex-direction: ${(props) => props.flexDirection};
  flex-wrap: ${(props) => props.flexWrap};
  gap: ${(props) => props.gap};
`;

const CoronaFlex = (props: CoronaFlexProps) => {
  const {
    className,
    children,
    flexJustifyContent = 'flex-start',
    flexAlignItems = 'flex-start',
    flexDirection = 'row',
    flexWrap,
    gap,
  } = props;

  return (
    <FlexWrap
      className={className}
      flexJustifyContent={flexJustifyContent}
      flexAlignItems={flexAlignItems}
      flexDirection={flexDirection}
      flexWrap={flexWrap}
      gap={gap}
    >
      {children}
    </FlexWrap>
  );
};

export default CoronaFlex;
