import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Headers/Header.component';
import { Home } from './page';

function App() {
    return (
        <>
            <HashRouter>
                <Header />
                <Home />
                <Routes>
                    <Route path="/prod" element={''} />
                </Routes>
            </HashRouter>
        </>
    );
}

export default App;
