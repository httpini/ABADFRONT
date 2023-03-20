import Link from 'next/link'
import React from 'react'
const activeTopicStyle = 'underline font-bold'
const topicStyle = ''

export default function LinksTorneos({ torneos, id }) {
    // console.log(torneos);
    return (
        <div className='flex w-[50%] justify-around m-auto mt-3'>
            {/* {torneos && torneos.map(t => (
                <Link key={t} href={`/torneo/${t}`} className={id == t ? activeTopicStyle : topicStyle}>{t}</Link>
            ))} */}
        </div>
    )
}

