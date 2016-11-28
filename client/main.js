import { Meteor } from 'meteor/meteor'
import React, { Component } from 'react'
import { render } from 'react-dom'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'
import RobotBox from '../imports/components/roboBox.jsx'
let client = new ApolloClient()
Meteor.startup(function () {
  render(
    <ApolloProvider client={client}>
      <RobotBox/>
    </ApolloProvider>,
     document.getElementById('root')
  )
})
