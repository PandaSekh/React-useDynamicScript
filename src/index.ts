export default function useDynamicScript(src: string, id?: string): removeScript {
  let _script: HTMLScriptElement;

  if (!document.getElementById(id || src)) {
    _script = document.createElement('script');
    _script.type = 'text/javascript';
    _script.src = src;
    _script.id = id || src;
    document.body.appendChild(_script);
  }

  function _removeScript(): void {
    _script.parentElement?.removeChild(_script);
  };

  return _removeScript;
}

type removeScript = () => void