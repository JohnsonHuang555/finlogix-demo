import styled from 'styled-components';

type ButtonProps = Pick<CoronaButtonProps, 'variant'>;

// FIXME: 變數? 判斷顏色
const Button = styled.div<ButtonProps>`
  text-align: center;
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
  onClick: () => void;
};

const CoronaButton = (props: CoronaButtonProps) => {
  const { text, variant = 'default', customStyles, onClick } = props;

  return (
    <Button variant={variant} style={customStyles} onClick={() => onClick()}>
      {text}
    </Button>
  );
};

export default CoronaButton;
