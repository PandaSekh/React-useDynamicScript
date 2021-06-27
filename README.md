react-useDynamicScript

```jsx
import useDynamicScript from "useDynamicScript";
import {useEffect} from "react";

function MyComponent(){

  useEffect(() => {
    const removeScript = useDynamicScript("https://localhost/myscript.js");

    return(() => removeScript());
  }, [])

  return <p>Hello World :)</p>
}
```