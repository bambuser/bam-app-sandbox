const appContext = await bambuserAppFramework.getContext();

const { screenApi } = appContext;
if (screenApi) {
  screenApi.on('provide-instance', async ({ id }) => {
    if (id === 'start') {
      return await screenApi.createScreen({
        id,
        viewUrl: new URL('./view/startScreen/startScreen.html', new URL(import.meta.url)).href,
      });
    } else if (id === 'another') {
      return await screenApi.createScreen({
        id,
        viewUrl: new URL('./view/anotherScreen/anotherScreen.html', new URL(import.meta.url)).href,
      });
    } else {
      console.warn(`An unhandled screen "${id}" was requested, endless spinner will be shown...`);
    }
  });
}

const { toolApi } = appContext;
const tool = await toolApi.createTool({
  label: 'My tool',
  viewUrl: new URL('./view/myTool/myTool.html', new URL(import.meta.url)).href,
});
tool.on('open', () => {
  console.log('My tool opened');
});
tool.on('close', () => {
  console.log('My tool was closed');
});
