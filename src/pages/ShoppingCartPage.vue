<template>
    <h1>Shapping cart</h1>
    <div v-if="cartItems.length > 0">
    <ShoppingCartList @removeFromCart="removeFromCart" :cartItems="cartItems"/>
    <button class="checkout-button"> Proceed To Checkout</button>
    </div>
   <div v-if="cartItems.length===0" class="move-down">
    You Currently  Have No Items In Your Cart!
   </div>
</template>
    
<script>
import ShoppingCartList from '@/components/ShoppingCartList.vue';
import axios from 'axios';
export default {
        name: "ShappingCartPage",
        components: {
            ShoppingCartList,
        }, 
        data(){
            return {
                cartItems: [],
            }
        },
        async created() {
            const response= await axios.get('/api/users/12345/cart');
            const cartItems= response.data;
            this.cartItems= cartItems;
        }
        ,
        methods: {
            async removeFromCart(productId) {
                try {
                    await axios.delete(`/api/users/12345/cart/${productId}`); 
                    this.cartItems= this.cartItems.filter(item => item.id !== productId);

                } catch(error){
                    console.log(error);
                }
              
            }
        }
    }
    </script>