export default class {
    constructor () {
        this.__server = "http://localhost/api/";
        this.__xhr = new XMLHttpRequest();
        this.response_data;
    }

    get_data (req="") {
        const type = "GET";
        console.log(req)

        return new Promise(res => {
            this.__xhr.open(type, this.__server+req, true)
            let _this = this
            
            this.__xhr.onload = function () {
                _this.response_data = JSON.parse(_this.__xhr.response)
                res(_this.response_data)
            };
            
            this.__xhr.send();
        })
    }

    post_data (req="", data="") {
        const type = "POST";

        return new Promise(res => {
            this.__xhr.open(type, this.__server+req, true)
            let _this = this
            this.__xhr.setRequestHeader("Content-type", "application/json");
            this.__xhr.send(data)
            
            this.__xhr.onload = function () {
                // _this.response_data = JSON.parse(_this.__xhr.response)
                res(_this.__xhr.response)
            }
            
        })
    }

    ping() {
        const type = "GET";

        return new Promise(res => {
            this.__xhr.open(type, this.__server+"ping", true)
            let _this = this
            this.__xhr.send();
            
            this.__xhr.onload = function () {
                _this.response_data = _this.__xhr.response
                res()
            };
            
        })
    }
}