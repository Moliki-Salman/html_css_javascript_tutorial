// This is a tutorial on on fetchAPI and promises. 
function getUser(req, res) {
    const api = "https://api.github.com/users/aalol"
    fetch(api).then((res) => res.json()).then((userProfile) => {
        console.log(userProfile)
    }) 
} getUser();

// 