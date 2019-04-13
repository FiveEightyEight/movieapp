const {app,} = require('./app');
const port =  process.env.PORT || 8880;

app.listen(port, _=>{
    // console.log('Listening on port: ', port);
    console.log(`Listening on port: ${port}`);
});