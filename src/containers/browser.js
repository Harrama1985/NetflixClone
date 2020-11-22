import React, { useContext, useEffect, useState } from 'react';
import ProfileSelectContainer from './profiles';
import { FirebaseContext } from '../context/Firebase';
import Loading from '../components/loading';
import Header from '../components/header';
import logo from '../logo.svg';
import Card from '../components/card';
import Player from '../components/player';
import Fuse from 'fuse.js'
function BrowserContainer({ slides }) {
  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};
  const [profile, setprofile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('series');
  const [slideRows, setSlideRows] = useState([]);

  useEffect(() => {
    return setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows,{keys:['data.description','data.title','data.genre']})
    const result = fuse.search(searchTerm).map(({item})=>item)
    console.log(result);
    if(searchTerm.length > 3 && result.length>0 && slideRows.length>0){
     
      setSlideRows(result)
    }else{
      console.log('result');
      setSlideRows(slides[category])
    }
  }, [searchTerm])

  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}

      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo to="/" src={logo} alt="Netflix" />
            <Header.TextLink
              active={category === 'series' ? 'true' : 'false'}
              onClick={() => setCategory('series')}
            >
              Series
            </Header.TextLink>
            <Header.TextLink
              active={category === 'films' ? 'true' : 'false'}
              onClick={() => setCategory('films')}
            >
              Films
            </Header.TextLink>
          </Header.Group>
          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            />
            <Header.Profile>
              <Header.Picture src={user.photoURL} />
              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.TextLink>{user.displayName}</Header.TextLink>
                </Header.Group>
                <Header.TextLink onClick={() => firebase.auth().signOut()}>
                  Sign out
                </Header.TextLink>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>
        <Header.Feature>
          <Header.FeatureCallOut>Watch jocker now</Header.FeatureCallOut>
          <Header.Text>
            Lorem Ipsum è un testo segnaposto utilizzato nel settore della
            tipografia e della stampa. Lorem Ipsum è considerato il testo
            segnaposto standard sin dal sedicesimo secolo, quando un anonimo
            tipografo prese una cassetta di caratteri e li assemblò per
            preparare un testo campione.
          </Header.Text>
          <Header.Play>Play</Header.Play>
        </Header.Feature>
      </Header>
      <Card.Group>
        {slideRows.map((slidItem) => {
          return (
            <Card key={`${category}-${slidItem.title}`}>
              <Card.Title>{slidItem.title}</Card.Title>
              <Card.Entities>
                {slidItem.data.map((item) => (
                  <Card.Item key={item.docId} item={item}>
                    <Card.Image
                      src={`images/${category}/${item.genre}/${item.slug}/small.jpg`}
                    />
                    <Card.Meta>
                      <Card.SubTitle>{item.title}</Card.SubTitle>
                      <Card.Text>{item.description}</Card.Text>
                    </Card.Meta>
                  </Card.Item>
                ))}
              </Card.Entities>
              <Card.Feature category={category}>
                <Player >
                  <Player.Button>Play</Player.Button>
                  <Player.Video src='/videos/bunny.mp4'/>
                </Player>
              </Card.Feature>
            </Card>
          );
        })}
      </Card.Group>
    </>
  ) : (
    <ProfileSelectContainer user={user} setProfile={setprofile} />
  );
}

export default BrowserContainer;
