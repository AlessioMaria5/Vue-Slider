const vueApp = new Vue({

    el: '#vueApp',
    created:  function(){
        setInterval(this.activeSliderNext,3000)
    },

    data: {
        index: 0,
        mouseAttivo: true,
        images: [
            {
                url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
                title: 'Svezia',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
            },
        
            {
                url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
                title: 'Perù',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
            },
        
            {
                url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
                title: 'Chile',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
            },
            {
                url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
                title: 'Argentina',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
            },
            {
                url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
                title: 'Colombia',
                description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
            },
        ],
        
    },

    methods: {

        activeSliderPrev(){

            if(this.index <1) {             
                this.index = this.images.length -1
               }
               else {
                this.index--
               }
        },

        activeSliderNext(){

           if(this.mouseAttivo = true) {

                this.index++

                if(this.index >4) {
                    this.index = 0      
                }

           }
        },
        
        clicked(indiceFor){
           
                this.index = indiceFor
            },

        MouseDentro(){
            this.mouseAttivo = false
            console.log(this.mouseAttivo)

        },

        MouseFuori(){
            this.mouseAttivo = true
            console.log(this.mouseAttivo)
        },
        }

        
    })