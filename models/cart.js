class Cart {
    constructor(uid, creation_date, expiration_date, user_uid, products_id ) {
            this.uid = uid;
            this.creation_date = creation_date;
            this.expiration_date = expiration_date;
            this.user_uid = user_uid;
            this.products_id = products_id;
    }
}

module.exports = Cart;