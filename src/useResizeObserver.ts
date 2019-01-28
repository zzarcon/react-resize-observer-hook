import {RefObject, useEffect} from 'react';

export interface ResizeObserverEntry {
  target: HTMLElement;
  contentRect: DOMRectReadOnly;
}
export type ObserverCallback = (entry: DOMRectReadOnly) => void;

export const useResizeObserver = (ref: RefObject<HTMLElement>, callback: ObserverCallback) => {
  useEffect(() => {
    const resizeObserver = new (window as any).ResizeObserver((entries: ResizeObserverEntry[]) => {
      callback(entries[0].contentRect);
    });

    resizeObserver.observe(ref.current);
  }, [ref]);
}