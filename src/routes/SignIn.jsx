import React from 'react'
import { createUserDocumentFromAuth, signInWithGooglePopup } from '../utils/firebase/firebase'

const SignIn = () => {

    const logGoogleUser =  async()=>{
        const {user} = await signInWithGooglePopup();
        
        const userDocRef = await createUserDocumentFromAuth(user);
    }

  return (
    <div>
      i'm  a sign in page
      <button 
      onClick={logGoogleUser}
      className='border-2 p-2'
      >Sign In with Google Popup</button>
    </div>
  )
}

export default SignIn
