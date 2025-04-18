import React from 'react'

export default function Container({ children, className }) {
    return (
        <div className={`lg:w-[1260px] mx-auto w-full ${className}`}>{children}</div>
    )
}
