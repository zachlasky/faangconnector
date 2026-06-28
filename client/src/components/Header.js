import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { RiMenuLine, RiMenuFoldLine } from 'react-icons/ri';
import { colors, layouts } from '../styles';
import walrusHead from '../assets/walrusHead.png';

export const Header = () => {
  const [menu, setMenu] = useState(true);
  const history = useHistory();

  const renderMainHeader = () => {
    return (
      <layouts.Nav className="header-menu">
        <TitleWrapper>
          <Logo src={walrusHead} alt="Walrus Head" />
          <Title className="app-title">FAANG Connector</Title>
        </TitleWrapper>
        <MenuIcon
          size="25px"
          className="menu-icon"
          title="Open menu"
          onClick={() => setMenu(false)}
        />
      </layouts.Nav>
    );
  };

  const renderSubheader = () => {
    return (
      <layouts.Nav className="heade-folded-menu">
        <TitleWrapper>
          <Logo src={walrusHead} alt="Walrus Head" />
          <layouts.NavButton onClick={() => history.push('/about')}>Learn more</layouts.NavButton>
          <layouts.NavButton
            onClick={() =>
              window.open('https://github.com/ZacharyLasky/faang-connector-server', '_blank')
            }>
            Source code
          </layouts.NavButton>
        </TitleWrapper>
        <FoldMenuIcon
          size="25px"
          className="folded-menu-icon"
          title="Close menu"
          onClick={() => setMenu(true)}
        />
      </layouts.Nav>
    );
  };

  return <>{menu ? renderMainHeader() : renderSubheader()}</>;
};

const TitleWrapper = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 15px;
`;

const Title = styled('h1')`
  margin-left: 5px;
  font-weight: 900;
  font-size: 30px;
  color: ${colors.lilac};

  @media (max-width: 320px) {
    font-size: 25px;
    margin-top: 0px;
  }

  @media (min-width: 800px) {
    font-size: 5rem;
  }
`;

const MenuIcon = styled(RiMenuLine)`
  cursor: pointer;
  margin: 0 15px;

  @media (min-width: 800px) {
    height: 5rem;
  }
`;

const FoldMenuIcon = styled(RiMenuFoldLine)`
  cursor: pointer;
  margin: 0 15px;
`;

const Logo = styled('img')`
  height: 40px;

  @media (min-width: 800px) {
    height: 5rem;
    margin-right: 2rem;
  }
`;
