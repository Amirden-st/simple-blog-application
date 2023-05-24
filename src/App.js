import {Provider} from "react-redux";
import {store} from "store";
import Container from "UI/Container";
import Posts from "modules/Posts";

function App() {
    return (
        <Provider store={store}>
            <Container>
                <Posts />
            </Container>
        </Provider>
    );
}

export default App;
