



var data = {
    data(){
        return{
            sliderStatus: true,

            labelArr: [ 'font-weight-bold', 'mr-1'],
            maximum: 2022,
            cart: [],

            products : [ 
            {
                id: "532",
                name: 'Slicker Jacket',
                description: "Wind and rain are no match for our organic bamboo slicker jacket for men and women. ",
                image: ('./image/532.jpg') ,
                price: 125,

            },
            {
                id: "530",
                name: 'Bamboo thermal ski coat ',
                description: "You'll be the most enviromentally conscious skier on the slopes - and the most stylish - wearing our fitted bamboo thermal ski coat, made from organic bamboo with recycled plastic down filling.",
                image: ('./image/530.jpg') ,
                price: 40,

            },
            {
                id: "516",
                name: 'Unisex Thermal Vest ',
                description: "Our themal cest, made from organic bamboo with recycled plastic down filling, is a favorite customers jacket.",
                image: ('./image/516.jpg') ,
                price: 95,

            },
            {
                id: "612",
                name: 'Cotton Polyster Jacket ',
                description: "Popular cotton polyster jacket is one of the most asked product from customer, with the style and the long lasting years it last. It makes the jacket valuable",
                image: ('./image/612.jpg') ,
                price: 100,

            },
            {
                id: "514",
                name: 'Puffed light jacket ',
                description: "Light puffed jacket isolate the warmth of the temperature inside the jacket, which keeps individuals warm for years.",
                image: ('./image/514.webp') ,
                price: 105,

            },
            {
                id: "200",
                name: 'Rainy puffed jacket ',
                description: "This rainy puffed jacket allows individuals to run, excercise in the rain or in the cold. It allows individuals to use the jacket in both condition.",
                image: ('./image/200.avif') ,
                price: 95,

            },
            {
                id: "126",
                name: 'Light sunny jacket ',
                description: "The light sunny jacket can allow individuals to excercise through any weather.",
                image: ('./image/126.webp') ,
                price: 90,

            },


        ] 

        
         
        }
    },
    computed:{
        sliderState: function(){
            return this.sliderStatus ? 'd-flex' : 'd-none'
        }
    },
    methods: {
        addItem: function(product){
            this.cart.push(product);

        }

    }
  
};

Vue.createApp(data).mount("#data")


const mode = useColorMode({
    attribute: 'theme',
    modes: {
      // custom colors
      dim: 'dim',
      cafe: 'cafe',
    },
  })

  Vue.createApp(mode).mount('#mode')




