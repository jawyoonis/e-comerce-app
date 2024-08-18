<template>
    <div class=" product-container"
        v-for="product in cartItems" :key="product.id">
        <img :src="product.imageUrl" class="product-image"/>
        <div class="details-wrap">
            <h3>{{ product.name }}</h3>
            <p>{{ product.price }}</p>
        </div>
        <button @click="$emit('removeFromCart', product.id)" class="remove-button"> Remove From Cart</button>
    </div>
</template>

<script>
export default {
    name: "ShoppingCartList",

    props: ["cartItems"],

    emits: ["removeFromCart"],
}
</script>