class UserClient {
    constructor(url) {
        this.client = axios.create({
            baseURL: url
        });
    }

    login(userame, password) {
        return this.client.request({
            method: "POST",
            url: "/auth/sign-in",
            headers: {
                Accept: "text/plain",
            },
            data: {
                username: userame,
                password: password
            }
        }).catch(error => {
            throw error;
        }).then(result => {
            if (result.status === 200) {
                this.token = result.token
                return result.data;
            }
        })
    }

    getAllUsers() {
        return this.client.request({
            method: "GET",
            url: "/users/",
            headers: {
                Accept: "text/plain",
            },
        }).catch(error => {
            throw error;
        }).then(result => {
            if (result.status === 200) {
                return result.data;
            }
        })
    }

    getAllArticles(token) {
        return this.client.request({
            method: "GET",
            url: "/api/articles/",
            headers: {
                Accept: "text/plain",
                Authorization: `Bearer ${token}`
            },
        }).catch(error => {
            throw error;
        }).then(result => {
            if (result.status === 200) {
                return result.data;
            }
        })
    }

    jopa(pipisa) {
        return this.client.request({
            method: "POST",
            url: "/auth/sign-up/",
            headers: {
                Accept: "text/plain",
            },
            data: {
                name: pipisa.name,
                username: pipisa.userame,
                password: pipisa.password,
            }
        }).catch(error => {
            throw error;
        }).then(result => {
            if (result.status === 200) {
                return result.data;
            }
        })
    }
}