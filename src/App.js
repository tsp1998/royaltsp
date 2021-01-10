import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import logo from './logo.svg';

//components
import Loader from './components/utils/Loader'

//styles
import GlobalStyles from './global-styles'
import styled from 'styled-components'
const AppStyled = styled.div`
  
`

//pages
const IndexPage = lazy(() => import('./pages/IndexPage'));


function App() {
  return (
    <AppStyled className="App">
      <GlobalStyles />
      <Router>
        <Suspense fallback={<Loader />}>
          <IndexPage />
        </Suspense>
      </Router>
    </AppStyled>
  );
}

export default App;
