import axios from "axios";

export class ProductService {
    getProducts(params) {
        return axios.get("mock/products.json", { params: params }).then((res) => res.data);
    }
}
