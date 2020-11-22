import React from 'react';
import BrowserContainer from '../containers/browser';
import useContent from '../hooks/useContent';
import selectionMap from '../utils/selectionMap';

function Browser() {
  const { series } = useContent('series');
  const { films } = useContent('films');
  const slides = selectionMap({ series, films });
  
  return <BrowserContainer slides={slides}/>;
  
}

export default Browser;
