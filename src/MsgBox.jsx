import React from 'react'

function MsgBox() {
  return (
    <div className='text-center mt-5'>
        <h1 className='text-3xl font-bold text-orange-400'>Welcome To The Game !</h1>
        <h2 className='text-red-700 text-xl mb-3 mt-3'>~~About The Game~~</h2>
        <ul className=' font-light text-orange-600'>
        <h3>Given Lottery tickets With a 3 digit number.</h3>
        <h3>The Numbers are generated randomly.</h3>
        <h3>If the sum of all Digit is less then equal to 10, You wil win the Game.</h3>
        </ul>
        
        
    </div>
  )
}

export default MsgBox