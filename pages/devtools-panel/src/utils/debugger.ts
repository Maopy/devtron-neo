// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const evaluate = (fn: (...args: any[]) => any, ...args: any[]) => {
  const fnArgs = args.map(arg => JSON.stringify(arg)).join(', ')
  const expression = `(${fn.toString()})(${fnArgs})`
  return new Promise((resolve, reject) => {
    chrome.devtools.inspectedWindow.eval(expression, (result, error) => {
      if (error) {
        // if (error.isException && error.value) {
        //   const stack = error.value
        //   error = new Error(stack.split('\n')[0])
        //   error.stack = stack
        // }
        reject(error)
      } else {
        resolve(result)
      }
    })
  })
}

// export const openExternal = (urlToOpen: string) => {
//   return execute((urlToOpen: string) => {
//     // eslint-disable-next-line @typescript-eslint/no-require-imports
//     return require('electron').shell.openExternal(urlToOpen)
//   }, urlToOpen)
// }
