const axios = require("axios");


class apiHandler{
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
        this.headers = {"Content-Type": "application/json"}
        this.instance = axios.create({
            baseURL: this.baseUrl,
            headers: this.headers,
            timeout: 1000,
        })
    }

    async get(endpoint) {
        try {
            const response = await this.instance(endpoint, this.headers);
            if (response.status === 200) {
                return await  response.data;
            }

        }
        catch (err) {
            console.log(err)
        }

    }

}

class WebApiHandler extends apiHandler {
    constructor() {
        super("http://tortoisecommunity.co:8000");
    }

    async getProjects(){
        return await this.instance.get("/projects")
    }
}