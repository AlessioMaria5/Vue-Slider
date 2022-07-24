const vueApp = new Vue({

    el: '#vueApp',
    created:  function(){
       let ciao = setInterval(this.activeSliderNext,3000)
       console.log(ciao)
    },

    data: {
        index: 0,
        mouseAttivo: true,
        intervalBe: false,
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
            this.index<1?this.index = this.images.length-1:this.index--;
        },

        activeSliderNext(){
            this.mouseAttivo==true?this.index++:'';
            this.index>4?this.index=0:''
        },
        
        clicked(indiceFor){           
            this.index = indiceFor;
            },

        MouseDentro(){
            this.mouseAttivo = false;
            clearInterval(3)
        },

        MouseFuori(){
            this.mouseAttivo = true;

            // METODO TROVATO SU -> https://stackoverflow.com/questions/8635502/how-do-i-clear-all-intervals
            const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);
            for (let i = 1; i < interval_id; i++) {
                window.clearInterval(i);
              }
              // METODO PER CANCELLARE TUTTI I setInterval assegnando una variabile a window.setInterval, 
              //richiamandola poi in uno ciclo che va avanti fino a che non è minore di tutti gli id possibili creati
              
                setInterval(this.activeSliderNext,3000)
           
            
            
        },
        },   

        KeybEvent(){

            alert('ciao');
        }
    })