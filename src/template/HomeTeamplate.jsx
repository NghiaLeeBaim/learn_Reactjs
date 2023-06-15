import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../Components/Header/Header'

export default class HomeTeamplate extends Component {
  render() {
    return (
      <>
        <Header/>
        <main id='body' style={{minHeight:'650px'}}>
            <Outlet/>
        </main>

        <footer className='bg-dark text-white text-center p-5'> 
            footer Cybersoft
        </footer>

      </>
    )
  }
}
