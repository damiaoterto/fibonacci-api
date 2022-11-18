const { app } =  require('./app');

const port = 3000;

async function bootstrap() {
  app.listen(port, () => console.log(`App listening on port ${port}`));
}
bootstrap();
