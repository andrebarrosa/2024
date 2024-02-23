

export default () => {
    const status = true

    return <h2 style={{color: status ? "green" : "yellow"}} >Current status: {status?"ON":"OFF"}</h2>
}