// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

window.addEventListener('DOMContentLoaded', () => {
  console.log('👋 This message is being logged by "preload.ts", included via webpack');
});
