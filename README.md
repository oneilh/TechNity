- > UseEffect: a hook used to perform side effects: fetching, subscribing to an event, getting accessing to the Data
-   2 params
  (callback function, optional dependency array);
  - callback func must contain any promise
- dependency array:

- default setup -> runs every time
- [] -> runs only on initial render
- [args...] -> runs based on the dependency
  