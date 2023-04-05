import Link from 'next/link'
import React, { useState } from 'react'
const activeTopicStyle = 'underline font-bold'
const topicStyle = 'hover:underline'
import { FiMoreHorizontal } from 'react-icons/fi'

export default function LinksTorneos({ torneos, id, hide }) {
    const [visible, setVisible] = useState(false)
    return (
        <div>
            {hide && <h3 onClick={() => setVisible(!visible)} className={`text-center ${visible ? 'pt-5' : 'py-5'}`}><FiMoreHorizontal className='inline' /> mas torneos <FiMoreHorizontal className='inline' /></h3>}
            {(!hide || visible) &&
                <div className={`flex flex-wrap gap-3 justify-around m-auto mt-3 mx-20 text-xs ${visible ? 'pb-5' : ''}`}>
                    {torneos && torneos.map(t => (
                        <Link key={t.name} href={`/torneo/${t.name_url}`} className={id == t.name_url ? activeTopicStyle : topicStyle}>{t.name}</Link>
                    ))}
                </div>
            }
        </div>
    )
}

