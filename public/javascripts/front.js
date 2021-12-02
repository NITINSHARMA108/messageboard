function checkInput(){
    const username = document.getElementById('username').value;
    const message = document.getElementById('message').value;
    console.log(username,message);
    if(username==='' || message==='')
    {
        // e.preventDefault();
        alert('please fill both the fields');
        return false;
    }
    return true;
}