import React from "react";
import ReactDOM from "react-dom";

import { Home } from './pages/Home';

if (document.getElementById('app')) {
    ReactDOM.render(<Home />, document.getElementById('app'));
}