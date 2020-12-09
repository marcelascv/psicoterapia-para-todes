const app = require("./src/app");
const port = process.env.PORT;

app.listen(port, () => {
    console.log(`app.js está rodando na porta ${port}`);
});