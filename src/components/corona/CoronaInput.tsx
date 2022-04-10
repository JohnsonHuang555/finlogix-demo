import styled from 'styled-components';
import CoronaFlex from './CoronaFlex';

const CoronaInputWrap = styled(CoronaFlex)`
  width: 100%;
  label {
    font-size: 16px;
    color: #4a4a4a;
  }
  input {
    width: 98%;
  }
`;

type CoronaInputProps = {
  label?: string;
  value?: string;
  placeholder?: string;
  onChange: (v: string) => void;
};

const CoronaInput = (props: CoronaInputProps) => {
  const { label, value, placeholder, onChange } = props;

  return (
    <CoronaInputWrap flexDirection="column">
      {label && <div className="label">{label}</div>}
      <input
        type="text"
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </CoronaInputWrap>
  );
};

export default CoronaInput;
