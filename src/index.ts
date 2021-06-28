export default function useDynamicScript(src: string, id?: string): [insert, removeScript] {
  let _script: HTMLScriptElement;

  function _insert(): void {
    if (!document.getElementById(id || src)) {
      _script = document.createElement('script');
      _script.type = 'text/javascript';
      _script.src = src;
      _script.id = id || src;
      document.body.appendChild(_script);
    }
  }

  function _removeScript(): void {
    _script.parentElement?.removeChild(_script);
  };

  return [_insert, _removeScript];
}

type removeScript = () => void
type insert = () => void