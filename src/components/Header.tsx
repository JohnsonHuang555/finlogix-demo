import CoronaFlex from './corona/CoronaFlex';
import styled from 'styled-components';
import CoronaContainer from './corona/CoronaContainer';
import CoronaButton from './corona/CoronaButton';
import { useState } from 'react';

const HeaderWrap = styled(CoronaContainer)`
  box-shadow: 0px 2px 4px rgb(0 0 0 / 10%);
  padding-top: 36px;
  padding-bottom: 36px;
`;

const Header = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <HeaderWrap>
      <CoronaFlex flexJustifyContent="space-between" flexAlignItems="center">
        <img src="/logo.png" alt="logo" height="80" />
        <CoronaFlex>
          {isLogin ? (
            <>
              <CoronaButton
                text="My Webinar"
                customStyles={{ marginRight: '30px' }}
                onClick={() => {}}
              />
              <CoronaButton text="login" variant="outline" onClick={() => {}} />
            </>
          ) : (
            <CoronaButton text="login" variant="outline" onClick={() => {}} />
          )}
        </CoronaFlex>
      </CoronaFlex>
    </HeaderWrap>
  );
};

export default Header;
