import * as React from 'react';
import {useState, useRef} from 'react';
import {GHCorner} from 'react-gh-corner';
import {AppWrapper, Parent} from './styled';
import useResizeObserver from '../src';

const repoUrl = 'https://github.com/zzarcon/react-resize-observer-hook';

export default () => {
  const [dimensions, setDimensions] = useState({width: 200, height: 100})
  const parentElement = useRef(null);

  useResizeObserver(parentElement, (entry) => {
    const {width, height} = entry;

    setDimensions({
      width,
      height,
    });
  });

  return (
    <AppWrapper>
      <GHCorner openInNewTab href={repoUrl} />
      <h1>Resize me 👇</h1>
      <Parent innerRef={parentElement}>
        {dimensions.width} x {dimensions.height}
      </Parent>
    </AppWrapper>
  )
}