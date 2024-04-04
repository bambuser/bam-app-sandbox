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
