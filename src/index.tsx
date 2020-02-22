import { app, Component } from 'apprun';

class App extends Component {
  view = () => <div>Hello World - AppRun!</div>
}

app.render(document.body, <App />);
