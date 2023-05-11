import React from 'react'
import ReactDOM from 'react-dom'
import App from './example/App'
import { OrderingProvider } from './src/contexts/OrderingContext'

const configFile = {
  app_id: 'nosh-react',
  project: 'reactdemo',
  api: {
    url: 'https://apiv0.nosh.co',
    language: 'en',
    version: 'v000'
  },
  socket: {
    url: 'https://socket.nosh.co'
  }
}

const wrapper = document.getElementById('app')
ReactDOM.render(
  <OrderingProvider settings={configFile}>
    <App />
  </OrderingProvider>, wrapper)
