class Product {
    constructor(uid, title, description, quantity, expiration_date,
        creation_date, unit_price, review_user, weight, provider_id ) {
            this.uid = uid;
            this.title = title;
            this.description = description;
            this.quantity = quantity;
            this.expiration_date = expiration_date;
            this.creation_date = creation_date;
            this.unit_price = unit_price;
            this.review_user = review_user;
            this.weight = weight;
            this.provider_id = provider_id;
    }
}

module.exports = Product;