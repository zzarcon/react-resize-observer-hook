# react-resize-observer-hook
> ResizeObserver + React hooks

## Install

```
yarn add react-resize-observer-hook
```

## Usage

```js
import {useState, useRef} from 'react';
import useResize from 'react-resize-observer-hook';

export default () => {
  const [dimensions, setDimensions] = useState({width: 100, height: 50})
  const parentRef = useRef(null);
  
  useResizeObserver(parentRef, (entry) => setDimensions({
    width: entry.width,
    height: entry.height,
  }));

  return (
    <div ref={parentRef}>
      {dimensions.width} x {dimensions.height}
    </div>
  )
}

```

## API

```typescript
DOMRectReadOnly {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
  x: number;
  y: number;
  toJSON(): any;
}
ObserverCallback = (entry: DOMRectReadOnly) => void;
useResizeObserver = (ref: RefObject<HTMLElement>, callback: ObserverCallback) => {
```

## Author

[@zzarcon](https://twitter.com/zzarcon)