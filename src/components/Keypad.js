// Code Keypad Component Here

function Keypad (){
    function handlePassword(event){
        console.log('Entering password...')
    }
    return (
        <div>
            <input onChange={handlePassword}type="password"></input>
        </div>
    )
}

export default Keypad;