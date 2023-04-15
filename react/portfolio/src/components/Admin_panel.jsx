import React from 'react'
import Navigation from './Navigation'
import projectImg from '../img/projects/02-big.jpg';
import styles from '../styles/admin.module.css'

const Admin_panel = () => {
  return (
    <div>
      <Navigation/>
      <main className="section">
      <div className="container">
        <form className="project-details">

            <input type="text" placeholder='Write a title' className="title-1"/>

          <img src={projectImg} alt="" className="project-details__cover" />


            <input type="text" placeholder='Write a skils' className={styles.desk}/>


          <input type="text" placeholder='Write a link' className={styles.desk}/>

        </form>
      </div>
    </main>
    </div>
  )
}

export default Admin_panel