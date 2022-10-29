import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navigation.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import BackButton from '../backbutton/backbutton'
import { setSubscribersAC } from '../../store/subscribers/actionCreators'
import { becomeFollowerAC, setFollowersAC } from '../../store/followers/actionCreators'

import { addAuthSubscriberAC } from '../../store/subscribers/actionCreators'

const Navigation = () => {
        const dispatch = useDispatch()

const users= useSelector(store => store.users.value)

    


const authIndex = users.findIndex(({isAuth}) => isAuth === true)



    return (
       
    <header className={styles.header}>
  
            <NavLink className={styles.logo} to='/' ><h2 >Instagram</h2 ></NavLink><BackButton/>
      <div className={styles.auth_container}>

  {    users.map(({url,name,id,isAuth},index) => isAuth ?  <NavLink className={styles.cart_link} to ={`/${name.replace(/\s+/g, '')}`} ><img className={styles.auth_img} src={url} alt="img" /><h2 className={styles.auth_name}>{name}</h2></NavLink> : null)
               
        }  </div>
                      <div className={styles.container}>
                    
                              <h4>Suggestions for you</h4>
              {    users.map(({url,name,id,isAuth,isFollower},index) => isAuth || isFollower ? null :<div className={styles.user_container} ><NavLink className={styles.cart_link} to ={`/${name.replace(/\s+/g, '')}`} ><img className={styles.cart} src={url} alt="img" /><h2 className={styles.user_name}>{name}</h2></NavLink><button onClick={
                async() => {
                    
                  await dispatch(setSubscribersAC())   
                 await  dispatch(addAuthSubscriberAC({id:id,index:index,authIndex:authIndex}))  
                 await dispatch(setFollowersAC())
                await   dispatch(becomeFollowerAC({userIndex:index,id:id}))
                   }      
              }>Follow</button></div>)}

            </div>
            
              <h4>Followers</h4>
            { users.map(({url,name,id,isAuth,isFollower},index) =>  isFollower ? <div className={styles.follower_container} ><NavLink className={styles.cart_link} to ={`/${name.replace(/\s+/g, '')}`} ><img className={styles.cart} src={url} alt="img" /><h2 className={styles.user_name}>{name}</h2></NavLink></div> :null)
            }
            </header>

)


}
export default Navigation