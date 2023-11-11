import Home from "./components/Home";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import DesktopFireFox from "./components/DesktopFireFox";
import { Route, Routes } from "react-router-dom";
const App = () => {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/DesktopFireFox' element={<DesktopFireFox />} />
            </Routes>
            <Footer />
        </div>
    );
};

export default App;
