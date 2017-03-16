# next-thing

[![next-thing on NPM](https://img.shields.io/npm/v/next-thing.svg?style=flat-square)](https://www.npmjs.com/package/next-thing) [![Standard JavaScript Style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)

Frame and tick helpers for the browser.

## Install

```sh
$ npm i next-thing --save
```

## Use

```javascript
import * as next from 'next-thing'

// runs in the next frame
next.frame(() => console.log('Next frame.'))

// runs in the next tick
next.tick(() => console.log('Next tick.'))
```

## License

[MIT](https://opensource.org/licenses/MIT). © 2017 Michael Cavalea
