export default function Error({error,message}){
    return <div style={{"backgroundColor" : "red"}}>
        <h1>{error}</h1>
        <p>{message}</p>
    </div>
}
