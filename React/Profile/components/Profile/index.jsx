import styles from "./styles.module.css"

export default function Profile({image, nome, stack, telefone, email, github, linkedIn, twitter}) {
    return(
        
            <div className={styles.container}>
                <img className={styles.avatar} src={image}/>
                <h2 className={styles.name}>{nome}</h2>
                <div>{stack}</div>
                <div>{telefone}</div>
                <div>{email}</div>
                    <div className={styles.links}>
                        <a href={github}>Github</a>
                        <a href={linkedIn}>LinkedIN</a>
                        <a href={twitter}>Twitter</a>
                    </div>
            </div>
        
    )
}