import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import store from './store';
import { Provider } from "react-redux";
import { Helmet, HelmetProvider} from 'react-helmet-async';

import Error404 from "containers/errors/Error404";
import Home from "containers/pages/Home";
import Censo from "containers/pages/Censo";
import Instructivo from "containers/pages/Instructivo";
import Ayuda from "containers/pages/Ayuda";
import Formulario from "containers/pages/Home";




export default function App() {
  return (
    
      <Provider store={store}>
      <Router>
        <Routes>
          {/*Error Display */}
          <Route path="*" element={<Error404 />} />

          {/*home Display */}
          <Route path="/" element={<Home />} />
          <Route path="/censo" element={<Censo />} />
          <Route path="/instructivo" element={<Instructivo />} />
          <Route path="/ayuda" element={<Ayuda />} />


        </Routes>
      </Router>
    </Provider>
    
    
    
  );
}


