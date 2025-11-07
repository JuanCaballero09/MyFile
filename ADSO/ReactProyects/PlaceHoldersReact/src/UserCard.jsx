import { useState } from 'react'

export function UserCard({firstName, lastName, image, phone, email}) {
    const [activo, setActivo] = useState()

    const buttonClass = activo ? 'userCard-button userCard-button-active' : 'userCard-button'

    const changeBackground = () => {
        setActivo(!activo)
    }

    return (
        <div className="userCard">
            <div className='userCard-user'>
                <img src={image} alt={firstName + lastName} className="userCard-avatar" />
                <div className="userCard-info">
                    <strong>{firstName} {lastName}</strong>
                    <span>{email}</span>
                </div>
            </div>
            <button className={buttonClass} onClick={changeBackground}>
                {phone}
            </button>
        </div>
    )

}