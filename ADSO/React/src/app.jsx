import './app.css'
import { TwitterFollowCard } from './twitterFollowCard' 
export function App () {
    const format = (userName) => `@${userName}`

    const User4 = { name: "Miguel", userName: "miduDev", formatUserName: format}

    return (
        <section className='App'>

            <TwitterFollowCard
            formatUserName={format} 
            name={"ElMariana"} 
            userName={"ElMariana"}/>

            <TwitterFollowCard 
            formatUserName={format} 
            name={"Estarius"}/>

            <TwitterFollowCard 
            formatUserName={format}
            name={"Rubius"} 
            userName={"RubiusOMG"}/>

            {/* Pasarla como objeto */}
            <TwitterFollowCard {... User4} />

        </section >
    ) 
}