const GamesService = class { 
    constructor(apiKey, apiHost) {
        this.apiKey = apiKey;
        this.apiHost = apiHost;
        this.baseUrl = "https://" + this.apiHost;
    }
    
    async getAllGames() {
        const url = this.baseUrl + '/api/games';
        
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': this.apiKey,
                'X-RapidAPI-Host': this.apiHost
            }
        };

        const response = await fetch(url, options);
        const games = await response.json();
        return games;
    }
}