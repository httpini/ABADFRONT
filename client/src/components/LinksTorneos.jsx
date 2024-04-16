import Link from 'next/link'
import React, { useState } from 'react'
const activeTopicStyle = 'rounded-xl p-1.5 text-base text-claro1 font-bold bg-oscuro1 drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50'
const topicStyle = 'rounded-xl p-1.5 text-base hover:underline bg-oscuro3 text-amarillo drop-shadow-[0_2.2px_1.2px_rgba(0,0,0,0.8)] shadow-blue-600/50'
import { FiMoreHorizontal } from 'react-icons/fi'

export default function LinksTorneos({ torneos, id, hide }) {
    const [visible, setVisible] = useState(false)
    return (
        <div>
            {hide && <h3 onClick={() => setVisible(!visible)} className={`text-center ${visible ? 'pt-5' : 'py-5'}`}><FiMoreHorizontal className='inline text-oscuro1' /> mas torneos <FiMoreHorizontal className='inline' /></h3>}
            {(!hide || visible) &&
                <div className={`flex text-center flex-wrap gap-3 justify-around m-auto mt-3 mx-5 text-xs ${visible ? 'pb-5' : ''}`}>
                    {torneos && torneos.map(t => (
                        <Link key={t.name} href={`/torneo/${t.name_url}`} className={id == t.name_url ? activeTopicStyle : topicStyle}>{t.name}</Link>
                    ))}
                </div>
            }
        </div>
    )
}

