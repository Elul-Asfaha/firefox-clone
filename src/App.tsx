import Home from "./Pages/Home";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "./components/Loading";
const DesktopFireFox = lazy(() => import("./Pages/DesktopFireFox"));
const App = () => {
    return (
        <div className='relative'>
            <Nav />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route
                    path='/DesktopFireFox'
                    element={
                        <Suspense fallback={<Loading />}>
                            <DesktopFireFox />
                        </Suspense>
                    }
                />
            </Routes>
        </div>
    );
};

export default App;
