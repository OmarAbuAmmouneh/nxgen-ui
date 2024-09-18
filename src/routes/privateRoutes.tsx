import {Route, Routes} from "react-router-dom";
import {PanelLayout} from "src/layouts";
import PrivateProtection from "./privateProtection";
import Jobs from "src/pages/jobs";
import Applications from "src/pages/applications";

const Component = () => {
    return (
        <Routes>
            <Route element={<PrivateProtection/>}>
                <Route element={<PanelLayout/>}>
                    <Route path={'/jobs'} element={<Jobs/>}/>
                    <Route path={'/applications'} element={<Applications/>}/>
                </Route>
            </Route>
        </Routes>
    );
};

export default Component;
