import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.scss'
import { useSelector } from 'react-redux'
import BackButton from '../backbutton/backbutton'


const Navigation = () => {

const users= useSelector(store => store.users.value)
    
const followers = useSelector(store =>store.followers.value)

console.log(followers)
    return (
       
    <header className={styles.header}>
  
            <NavLink className={styles.logo} to='/' ><h2 >Instagram</h2 ></NavLink><BackButton/>
      <div className={styles.auth_container}>

  {    users.map(({url,name,id,isAuth},index) => isAuth ?  <NavLink className={styles.cart_link} to ={`/${name.replace(/\s+/g, '')}`} ><img className={styles.auth_img} src={url} alt="img" /><h2 className={styles.auth_name}>{name}</h2></NavLink> : null)
               
        }  </div>
                      <div className={styles.container}>
                    
                              <h4>Suggestions for you</h4>
              {    users.map(({url,name,id,isAuth},index) => isAuth ? null : <NavLink className={styles.cart_link} to ={`/${name.replace(/\s+/g, '')}`} ><img className={styles.cart} src={url} alt="img" /><h2 className={styles.user_name}>{name}</h2></NavLink>)
               
}

            </div></header>

)


}
export default Navigation