'use client';
import React, { useState } from 'react';

import './Accordion.css';
import AccordionItem from './AccordionItem';

const Accordion = ({ faqList }) => {
  const [openId, setOpenId] = useState(null)


  return (
    <ul className={`accordion`}>
      {faqList.map((faqItem, id) => {
        return (
          <AccordionItem
            onClick={() => (id === openId ? setOpenId(null) : setOpenId(id))}
            faqItem={faqItem}
            isOpen={id === openId}
            key={id}
          />
        );
      })}
    </ul>
  );
};

export default Accordion;
