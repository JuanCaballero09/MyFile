import './app.css'
import { TwitterFollowCard } from './twitterFollowCard'


const users = [
    {
        name: "ElMariana",
        userName: "ElMariana",
        initialIsFollowing: true,
    },
    {
        name: "Estarius",
        userName: "Estarius",
        initialIsFollowing: false,
    },
    {
        name: "Rubius",
        userName: "RubiusOMG",
        initialIsFollowing: true,
    }
]



export function App () {
    const format = (userName) => `@${userName}`

    const User4 = { name: "Miguel", userName: "miduDev", formatUserName: format}

    return (
        <section className='App'>
            {
                users.map(user =>{
                    const {name, userName, initialIsFollowing} = user;
                    
                    return (
                        <TwitterFollowCard 
                            key={userName}
                            name={name} 
                            userName={userName} 
                            formatUserName={format}
                            initialIsFollowing={initialIsFollowing}
                        />
                    )
                })
            }
            
            {/* Pasarla como objeto */}
            <TwitterFollowCard {... User4} />

        </section >
    ) 
}