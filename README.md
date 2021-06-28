<h1 align="center">
  useDynamicScript
</h1>
<p align="center">
  <!-- <img src="https://travis-ci.com/PandaSekh/lepre.svg?token=9UEvCKGSQs8hrivJiSpX&branch=master" alt="Travis CI"> -->
  <!-- <a href="https://www.npmjs.org/package/lepre"><img src="https://img.shields.io/npm/v/lepre.svg" alt="npm"></a> -->
  <img src="https://img.badgesize.io/https:/unpkg.com/usedynamicscript@latest/dist/index.js?compression=brotli&label=size" alt="Size">
  <!-- <img src="https://codecov.io/gh/PandaSekh/usedynamicscript/branch/master/graph/badge.svg?token=16CDE37WS5" alt="Code Coverage"> -->
  <img alt="Dependencies" src="https://img.shields.io/badge/dependencies-none-brightgreene">
</p>
<p align="center">⚡ Dynamically import and remove script files in your React components.</p>

useDynamicScript is a *lightweight* (**<1Kb**) custom React Hook that can be used to dynamically import (and remove) JavaScript files.

* * *

## Install

npm: 
```bash
npm install --save usedynamicscript
```

Yarn:
```bash
yarn add usedynamicscript
```

## Example
```jsx
import useDynamicScript from "usedynamicscript";
import {useEffect} from "react";

function MyComponent(){
  const [insert, remove] = useDynamicScript("https://localhost/myscript.js", "scriptId");

  useEffect(() => {
    insert();

    return(() => remove());
  }, [])

  return <p>Hello World :)</p>
}
```

## License

MIT © [PandaSekh](https://github.com/PandaSekh)