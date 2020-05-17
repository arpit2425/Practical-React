import React from 'react'
import { IconContext } from 'react-icons'
import { FaBuffer } from 'react-icons/fa'
import { AiFillGolden } from 'react-icons/ai'
import { MdFingerprint } from 'react-icons/md'
function IconDemo () {
  return (
    <IconContext.Provider value={{ color: 'blue', size: '5rem' }}>
      <FaBuffer />
      <AiFillGolden />
      <MdFingerprint />
    </IconContext.Provider>
  )
}

export default IconDemo
