import React from 'react';
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

function Card({ data , reference}) {
  if (!data) {
    return null; 
  }

  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale: 1.2}} dragElastic={.1} dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }} className='relative flex-shrink-0 kw-60 h-72 rounded-[40px] bg-zinc-900/90 text-white px-7 py-8 overflow-hidden relative'>
        <FaRegFileAlt/>
        <p className='text-sm leading-tight mt-5 font-semibold'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center justify-between py-3 px-8 mb-3'>
                <h5>{data.filesize}</h5>
               <span className='w-6 h-6 bg-zinc-600 rounded-full flex item-center justify-center'>
                  {data.close ?  <IoClose/> : <LuDownload size=".7rem" color='#fff'/>}
               </span>
            </div>
            {data.tag.isOpen && (
                <div className={`tag w-full py-4 ${data.tag.tagcolor === "blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                    <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
                </div>
              )
            }
        </div>    
    </motion.div>
  );
}

export default Card;
