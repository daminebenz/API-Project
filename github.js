class Github {
    constructor(){
        this.client_id = '337c95a2d62a4bedbb8b';
        this.client_secret = 'f460c6fcd7fc76a669a6c1db58365d80de47ed20';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();

        return {
            profile
        }
    }
}