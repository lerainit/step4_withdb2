import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.scss'
import { useSelector } from 'react-redux'
import BackButton from '../backbutton/backbutton'


const Navigation = () => {

const users= useSelector(store => store.users.value)
    

    return (
       
    <header className={styles.header}>
       
            <NavLink className={styles.logo} to='/' ><h2 >Instagram</h2 ></NavLink><BackButton/>
                      <div className={styles.container}>
              {    users.map(({url,name,id},index) => <NavLink className={styles.cart_link} to ={`/user${id}`} ><img className={styles.cart} src={url} alt="img" /><h2 className={styles.user_name}>{name}</h2></NavLink>)
               
}

            </div></header>

)


}
export default Navigation