import styled, { CSSProperties } from 'styled-components';

type ButtonProps = Pick<CoronaButtonProps, 'variant'>;

// FIXME: 變數? 判斷顏色
const Button = styled.div<ButtonProps>`
  border-radius: 2px;
  padding: 10px 40px;
  border: 1.5px solid;
  border-color: ${(props) =>
    props.variant === 'default' ? 'white' : '#013b81'};
  color: ${(props) => (props.variant === 'default' ? 'white' : '#013b81')};
  transition: 0.3s all;
  background: ${(props) => (props.variant === 'default' ? '#013b81' : 'white')};
  cursor: pointer;
  &:hover {
    color: ${(props) => (props.variant === 'default' ? '#013b81' : 'white')};
    background: ${(props) =>
      props.variant === 'default' ? 'white' : '#013b81'};
    border-color: ${(props) =>
      props.variant === 'default' ? '#013b81' : 'white'};
  }
`;

type CoronaButtonProps = {
  text: string;
  variant?: 'default' | 'outline';
  customStyles?: React.CSSProperties;
};

const CoronaButton = (props: CoronaButtonProps) => {
  const { text, variant = 'default', customStyles } = props;

  return (
    <Button variant={variant} style={customStyles}>
      <div>{text}</div>
    </Button>
  );
};

export default CoronaButton;
