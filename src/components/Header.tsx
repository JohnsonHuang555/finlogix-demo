import CoronaFlex, {
  FlexAlignItems,
  FlexJustifyContent,
} from './corona/CoronaFlex';
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
    <HeaderWrap className="">
      <CoronaFlex
        flexJustifyContent={FlexJustifyContent.Between}
        flexAlignItems={FlexAlignItems.Center}
      >
        <img src="/logo.png" alt="logo" height="80" />
        <CoronaFlex>
          {isLogin ? (
            <>
              <CoronaButton
                text="My Webinar"
                customStyles={{ marginRight: '30px' }}
              />
              <CoronaButton text="login" variant="outline" />
            </>
          ) : (
            <CoronaButton text="login" variant="outline" />
          )}
        </CoronaFlex>
      </CoronaFlex>
    </HeaderWrap>
  );
};

export default Header;
