class ProductManager {
    construcctor() {
        this.elementoProducts = [];
    }

    validateId(arr) {
        if (arr.length) {
            let codeMayor = arr.reduce((p, c) => {
                return c.code > p.code ? c.code : p.code;
            }, {
                code: 0
            })
            return codeMayor + 1;
        }
        return 1;
    }


    validateExist(arr, code) {
        return arr.filter(obj => obj.code === code);
    }


    addProduct(obj) {
        let {
            tittle,
            description,
            price,
            thumbnail,
            stock
        } = obj;
        this.elementoProducts.push({
            code: this.validateId(),
            tittle,
            description,
            price,
            thumbnail,
            stock,
        });
    }



    getProducts() {
        return this.elementoProducts;
    }

    getProductById() {
        if (validateExist(this.elementoProducts).length) {
            this.elementoProducts = this.elementoProducts.map(evento =>)
        } else {
            console.log("Not found")
        }
    }
};