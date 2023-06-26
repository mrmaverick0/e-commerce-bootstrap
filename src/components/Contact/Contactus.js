

const Contactus =()=>{
    let name,email,number;
    const nameHandler=(e)=>{
        e.preventDefault()
        name=e.target.value;
    }
    const emailHandler=(e)=>{
        e.preventDefault()
        email=e.target.value;
    }
    const numberHandler=(e)=>{
        e.preventDefault()
        number=e.target.value;
    }
    async function submitHandler  (e) {
        e.preventDefault();
        let obj={
            name:name,
            email:email,
            phoneNumber:number,
        }
        console.log(obj)
        const response = await fetch('https://react-http-ad8cd-default-rtdb.asia-southeast1.firebasedatabase.app/users.json',{
        method:'POST',
        body: JSON.stringify(obj),
        headers:{
            'Content-type': 'application/json'
        }
    })
    const data= await response.json();
    console.log(data)
    }
    return <form className="form" onSubmit={submitHandler}>
        <label>Name</label>
        <input type="text"  onChange={nameHandler}></input>
        <label>Email</label>
        <input type="email" onChange={emailHandler} ></input>
        <label>Phone Number</label>
        <input type="number"  onChange={numberHandler}></input>
        <button className='primary' type='submit'>Submit</button>
    </form>
}

export default Contactus