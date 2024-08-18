<template>
    <div v-if="product">
        <div class="image-wrap">
            <img :src="product.Url"/>
        </div>
        <div class="product-details">
            <h1>{{ product.name }}</h1>
            <h3 class="price">{{ product.price }}</h3>
            <button @click="addToCart" class="add-to-cart"> add to cart</button>
        </div>
    </div>
    <div v-else>
        <PageNotFound/>
    </div>
   
    </template>


<script>
// import {products } from "../temp-data";
import axios from "axios";
import PageNotFound from "./PageNotFound.vue";
export default {
    name: "ProductDetailsPage",
    data() {
        return {
            product: {},
        }
    },
    async created() {
        const response= await axios.get(`/api/products/${this.$route.params.productId}`);
        const product=  response.data;
        this.product= product;
    },
    components: {
        PageNotFound
    },
    methods: {
        addToCart() {
            const product = {
                id: this.product.id,
                name: this.product.name,
                price: this.product.price
            }
            axios.get('/api/users/12345/cart')
                .then(response => {
                    const cartItems = response.data;
                    if (!cartItems.find(item => item.id === product.id)) {
                        axios.post('/api/users/12345/cart', product)
                            .then(response => {
                                alert(response + " added to cart");
                                this.$router.push('/cart');
                            })
                            .catch(error => {
                                console.log(error);
                            });
                    } else {
                        alert('Item already in cart');
                        this.$router.push('/products');
                    }
                })
                .catch(error => {
                    console.log(error);
                });
        }
    }
}
</script>