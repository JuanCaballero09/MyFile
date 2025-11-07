import { useState } from 'react'

export function TwitterFollowCard ({ children, userName = "undefined", name, formatUserName}){
    const [isFollowing, setIsFollowing] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img src={`https://unavatar.io/${userName}`} alt="avatar" className='tw-followCard-avatar'/>
                <div className='tw-followCard-info'>
                    <strong>{name}</strong>
                    {children}
                    <span className='tw-followCard-infoUserName'>{formatUserName(userName)}</span>
                </div>
            </header>
            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    )
}