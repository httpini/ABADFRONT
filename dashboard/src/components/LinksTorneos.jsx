import Link from 'next/link'
import React from 'react'
const activeTopicStyle = 'underline font-bold'
const topicStyle = ''

export default function LinksTorneos({ torneos, id }) {
    return (
        <div className='flex flex-wrap gap-3 justify-around m-auto mt-3 text-xs'>
            {torneos && torneos.map(t => (
                <Link key={t.name} href={`/torneo/${t.name_url}`} className={id == t.name_url ? activeTopicStyle : topicStyle}>{t.name}</Link>
            ))}
        </div>
    )
}

