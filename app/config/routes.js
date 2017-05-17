import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { MainContainer, HomeContainer, AuthenticateContainer } from '../containers'

const routes = (
  <BrowserRouter>
    <MainContainer>
      <Route exact path="/" component={HomeContainer} />
      <Route path="/auth" component={AuthenticateContainer} />
    </MainContainer>
  </BrowserRouter>
)

export default routes
