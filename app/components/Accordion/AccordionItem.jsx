'use client'

import React, {useRef} from 'react'

import { FaPlus, FaMinus } from 'react-icons/fa6';

const AccordionItem = ({faqItem, onClick, isOpen}) => {
  const itemRef = useRef(null);
  return (
    <li className='accordion-item'>
      <button
        onClick={() => onClick()}
        className='accordion-header'
        style={isOpen ? { background: '#FF3535', color: '#fff' } : {}}
      >
        {faqItem.q}
        {isOpen ? (
          <FaMinus className='plus-svg' />
        ) : (
          <FaPlus className='plus-svg' />
        )}
      </button>
      <div
        className='accordion-collapse'
        style={
          isOpen ? { height: itemRef.current.scrollHeight } : { height: '0px' }
        }
      >
        <div className='accordion-body' ref={itemRef}>
          <p>{faqItem.a}</p>
          <p>{faqItem.b}</p>
          <p>{faqItem.c}</p>
          <p>{faqItem.d}</p>
          <p>{faqItem.e}</p>
        </div>
      </div>
    </li>
  );
}

export default AccordionItem