const appContext = await bambuserAppFramework.getContext();

const { screenApi } = appContext;
if (screenApi) {
  screenApi.on('provide-instance', async ({ id }) => {
    if (id === 'start') {
      return await screenApi.createScreen({
        id,
        viewUrl: new URL('./view/startScreen/startScreen.html', new URL(import.meta.url)).href,
      });
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
