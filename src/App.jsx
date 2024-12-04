import React from 'react'

import LotteryGame from './LotteryGame'
import MsgBox from './MsgBox'
import Forms from './forms'
import MultiFormHandle from './MultiFormHandle'
import CommentsForm from './CommentsForm'
import Joker from './Joker'


function App() {
  return (
    <div className='text-center mt-60'>
      {/* <MsgBox/> */}

    {/* <LotteryGame n={3} winningSum={10} /> */}

    {/* <Forms/> */}
    {/* <MultiFormHandle/> */}
    {/* <CommentsForm/> */}
    <Joker/>
   
    </div>
  )
}

export default App