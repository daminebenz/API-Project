// init Github
const github = new Github;

// search input
const searchUser = document.getElementById('searchUser');

// search input event Listener
searchUser.addEventListener('keyup', (e) => {
    // get input text
    const userText = e.target = e.target.value;

    if(userText !== ''){
        // Make http call
        github.getUser(userText).then(data => {
            if(data.profile.message === 'Not Found') {
                // show alert

            } else {
                // show profile

            }
        })
    } else {
        // clear profile
        
    }
})