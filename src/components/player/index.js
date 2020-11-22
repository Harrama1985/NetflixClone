import React, { createContext, useContext, useState } from 'react';
import ReactDOM from 'react-dom'
import {Container,Button,Overlay,Inner,Close} from './styles/player'
const PlayerContext = createContext();
export default function Player({ children, ...restProps }) {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <PlayerContext.Provider value={{ showVideo, setShowVideo }}>
      <Container {...restProps}>{children}</Container>
    </PlayerContext.Provider>
  );
}
Player.Button = function PlayerButton({ children, ...restProps }) {
  const { setShowVideo } = useContext(PlayerContext);
  return (
    <Button
      {...restProps}
      onClick={() => setShowVideo((showVideo) => !showVideo)}
    >
      {children}
    </Button>
  );
};
Player.Video = function PlayerVideo({ src, ...restProps }) {
  const { showVideo, setShowVideo } = useContext(PlayerContext);

  return showVideo ? ReactDOM.createPortal(
    <Overlay onClick={() => setShowVideo(false)}>
        <Inner>
            <video id='netflix-player' controls>
                <source src={src} type='video/mp4'/>
            </video>
            <Close />
        </Inner>
    </Overlay>, document.body 
  ) : null;
};


