import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import NoMatch from './components/NoMatch';
import ContactUs from './components/ContactUs';
import AboutUs from './components/AboutUs';
import Tweets from './components/Tweets';

export default (
  <Route>

    <Route path="/" component={App}>
      <IndexRoute component={Tweets} />
      <Route path='/tweets' component={Tweets} />
      <Route path='/about_us' component={AboutUs} />
      <Route path='/contact_us' component={ContactUs} />
    </Route>

    <Route path="*" status={404} component={NoMatch}/>
  </Route>
)

