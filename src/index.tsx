import app from 'apprun';

const model = 'Hello world - AppRun !';

const view = (state) => <div>{state}</div>;

const update = {

}

app.start(document.body, model, view, update);
