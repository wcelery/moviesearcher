# TMDb Moviesearcher

Usage:

### 1. `git clone`
### 2. `cd %%repo_folder%%`
### 3. `npm config set '@bit:registry' https://node.bit.dev`
### 4. `npm i`
### 5. `npm start`

### Or just use [demo](https://moviesearcher.wcelery.vercel.app/)

Made with:
+ React
+ Redux
+ Framer Motion
+ Few small libraries to make things easier
+ Love

### Known issues
+ Actions should be:
```javascript
export const action = (arg1, arg2) => {
  type: SOME_TYPE,
  payload: {
    arg1,
    arg2 
    }
}
```
instead of:
```javascript
export const action = (arg1, arg2) => {
  type: SOME_TYPE,
  arg1,
  arg2 
}
```
+ Should separate redux state from UI views

Too lazy to refactor
