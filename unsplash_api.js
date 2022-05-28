class UnsplashApi {
    constructor() {
        this.baseURL = 'https://api.unsplash.com';
        this.clientID = 'Client-ID zlu_6MXHN1iqKk7Fa1L4Ypw585lYNisb6LJeo8pde-8';
        this.axiosNesne = axios.create({
            baseURL: this.baseURL,
            headers: {
                Authorization: this.clientID
            },
            params: {
                query:'animal',
                count :1
            }
        });
    }

    async randomResimGetir() {
        try {
            const resimResponse = await this.axiosNesne.get('/photos/random');
            console.log(resimResponse.data[0].urls.regular);
            return resimResponse.data[0].urls.regular;
        } catch (err) {
            console.log(err.response);
            return 'https://miro.medium.com/max/1400/1*MIrLuyiCDpdNbnFYxYlKtA.png';
        }
    }
}
