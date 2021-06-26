import { useEffect } from 'react';

export default function useDynamicScript(script: string, id?: string): void {
  useEffect(() => {
    let _script: HTMLScriptElement;
    const _load = (_id: string, _url: string) => {
      if (!document.getElementById(_id)) {
        _script = document.createElement('script');
        _script.type = 'text/javascript';
        _script.src = _url;
        _script.id = _id;
        document.body.appendChild(_script);
      }
    };

    _load(
      id || script,
      script,
    );

    return () => {
      _script.parentElement?.removeChild(_script);
    };
  }, []);
}
