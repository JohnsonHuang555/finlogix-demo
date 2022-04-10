import styled from 'styled-components';

export enum FlexJustifyContent {
  Start = 'flex-start',
  Center = 'center',
  End = 'flex-end',
  Between = 'space-between',
}

export enum FlexAlignItems {
  Start = 'flex-start',
  Center = 'center',
  End = 'flex-end',
  Between = 'space-between',
}

export enum FlexDirection {
  Column = 'column',
  Row = 'row',
}

type CoronaFlexProps = {
  children: React.ReactNode;
  flexJustifyContent?: FlexJustifyContent;
  flexDirection?: FlexDirection;
  flexAlignItems?: FlexAlignItems;
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
    flexJustifyContent = FlexJustifyContent.Start,
    flexAlignItems = FlexAlignItems.Start,
    flexDirection = FlexDirection.Row,
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
