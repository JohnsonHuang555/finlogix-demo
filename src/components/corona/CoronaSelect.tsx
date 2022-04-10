import styled from 'styled-components';
import CoronaFlex from './CoronaFlex';

const CoronaSelectWrap = styled(CoronaFlex)`
  width: 100%;
  label {
    font-size: 16px;
    color: #4a4a4a;
  }
  select {
    width: 100%;
  }
`;

export type OptionType = {
  label: string;
  value: string;
};

type CoronaSelectProps = {
  label?: string;
  options: OptionType[];
  onChange: (value: string) => void;
};

const CoronaSelect = (props: CoronaSelectProps) => {
  const { label, options, onChange } = props;
  return (
    <CoronaSelectWrap flexDirection="column">
      {label && <div className="label">{label}</div>}
      <select onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </CoronaSelectWrap>
  );
};

export default CoronaSelect;
