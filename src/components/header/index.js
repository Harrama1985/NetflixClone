import React,{useState} from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Background, Container, Logo, Button,
  Profile,Link, Group,Dropdown,Picture,FeatureCallOut,
  SearchInput,SearchIcon,Search,Text, Feature,Play} from './styles/header';


export default function Header({ bg = true, children, ...restProps }) {
  return bg ? <Background {...restProps}>{children}</Background> : children ;
}

Header.Frame = function HeaderFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
      <Logo {...restProps} />
    </ReactRouterLink>
  );
};


Header.Button = function HeaderButton({ to, children, ...restProps }) {
  return (
    <Button to={to} >{children}</Button>
  );
};
Header.Group = function HeaderGroup({ children, ...restProps }) {
  return (
    <Group {...restProps}> {children} </Group>
  );
};
Header.Feature = function HeaderFeature({ children, ...restProps }) {
  return (
    <Feature {...restProps}> {children} </Feature>
  );
};

Header.TextLink = function HeaderTextLink({ children, ...restProps }) {
  return (
    <Link {...restProps}> {children} </Link>
  );
};
Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return (
    <Profile {...restProps}> {children} </Profile>
  );
};
Header.Dropdown = function HeaderDropdown({ children, ...restProps }) {
  return (
    <Dropdown {...restProps}> {children} </Dropdown>
  );
};
Header.FeatureCallOut = function HeaderFeatureCallOut({ children, ...restProps }) {
  return (
    <FeatureCallOut {...restProps}> {children} </FeatureCallOut>
  );
};
Header.Text = function HeaderText({ children, ...restProps }) {
  return (
    <Text {...restProps}> {children} </Text>
  );
};

Header.Picture = function HeaderPicture({ src , ...restProps }) {
  return (
    <Picture src={`/images/users/${src}.png`}/>
  );
};

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm , ...restProps }) {
  const [searchActive, setSearchActive] = useState(false)
  return (
    <Search>
      <SearchInput active= {searchActive} value={searchTerm} onChange={({target})=> setSearchTerm(target.value)}/>
      <SearchIcon onClick={()=>setSearchActive((searchActive)=>!searchActive)}>
        <img src='/images/icons/search.png' alt='search'/>
      </SearchIcon>
    </Search>
  );
};
Header.Play = function HeaderPlay({ children, ...restProps }) {
  return (
    <Play {...restProps}> {children} </Play>
  );
};