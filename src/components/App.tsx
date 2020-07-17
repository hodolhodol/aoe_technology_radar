import React  from 'react';
import classNames from 'classnames';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Router from './Router';
import {BrowserRouter, Switch, Route, Redirect, useParams, useLocation} from 'react-router-dom';
import radardata from '../rd.json';
import { Item } from '../model';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const RouterWithPageParam = () => {
  const { page } = useParams();
  const query = useQuery();

  return <Router pageName={page} search={query.get('search') || ''} items={radardata.items as Item[]} releases={radardata.releases as string[]}/>;
};

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <div className='page'>
          <div className='page__header'>
            <Header pageName='a' />
          </div>
          <div className={classNames('page__content')}>
            <Switch>
              <Route path={'/techradar/:page(.+).html'}>
                <RouterWithPageParam />
              </Route>
              <Route path={'/'}>
                <Redirect to={'/techradar/index.html'} />
              </Route>
            </Switch>
          </div>
          <div className='page__footer'>
            <Footer items={radardata.items as Item[]} pageName='a' />
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}