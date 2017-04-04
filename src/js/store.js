export default class Store {
    static init() {
        fetch('api/data.json')
            .then(response => {
                return response.json();
            }).then(data => {
                Object.keys(data).forEach((key) => {
                    let value = JSON.stringify(data[key]);
                    localStorage.setItem(key, value);
                });
            });
    }

    /**
     * @param resource
     * @return array|[]
     */
    static get(resource) {
        let data = localStorage.getItem(resource);
        return JSON.parse(data);
    }

    /**
     * @param resource
     * @param id
     * @returns object|null
     */
    static getById(resource, id) {
        let data = this.get(resource);
        return data.filter(item => item.id == id)[0];
    }

    /**
     * @param resource
     * @param key
     * @param value
     * @return array|[]
     */
    static getWhere(resource, key, value) {
        let data = this.get(resource);
        return data.filter(item => item[key] == value);
    }
}
