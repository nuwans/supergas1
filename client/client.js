import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Redirect, hashHistory} from 'react-router';
import Homepage from '../pages/Home';
/*import Homepage1 from '../pages/Home1';*/
import Homepage2 from '../pages/Home2';
import Homepage3 from '../pages/Home3';
import Homepage3Pop from '../pages/Home3PopUP';
import App from '../pages/App';
import AppDefault from '../pages/AppOtp';
import AppDefault1 from '../pages/AppOtp1';
import BookingForm from '../pages/BookingForm';
import BookingForm1 from '../pages/BookingForm1';
import Complains from '../pages/Complains';
/*import App from '../components/App';*/
import configureStore from '../redux/store';
import { Provider } from 'react-redux';
require("../css/style.css");

let initialState = {
  todos: [{
    id: 0,
    completed: false,
    text: 'Initial todo for demo purposes'
  }],
  user: {
    username: 'Nuwan',
    id: 1,
    logged:true,
    selectedTab:'REFIL'
  }
}

let store = configureStore(initialState)
render(
  <Provider store={store}>
     <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Homepage}></IndexRoute>
            <Route path="page2" component={Homepage2}></Route>
            <Route path="complains" component={Complains}></Route>
            
        </Route>
        <Route path="/" component={AppDefault}>
            <Route path="page3" component={Homepage3}></Route>
            <Route path="page3popup" component={Homepage3Pop}></Route>
        </Route>
        <Route path="/" component={AppDefault1}>
            <Route path="bookingform" component={BookingForm}></Route>
            <Route path="bookingform1" component={BookingForm1}></Route>
        </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
