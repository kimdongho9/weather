import React from 'react'
import { Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
const WeatherButton = () => {
  return (
    <div>
      <Button variant="info">현재 위치</Button>
      <Button variant="info">파리</Button>
      <Button variant="info">뉴욕</Button>
    </div>
  )
}

export default WeatherButton