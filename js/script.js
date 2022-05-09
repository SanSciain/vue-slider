Vue.config.devtools = true;
const app = new Vue(
    {
        el: "#root",
        data: {
            countriesList : [
                {
                    name:"Svezia",
                    image:"img/01.jpg",
                    text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.",
                    isActive: true
                },
                {
                    name:"Svizzera",
                    image:"img/02.jpg",
                    text:"Lorem ipsum",
                    isActive: false
                },
                {
                    name:"Gran Bretagna",
                    image:"img/03.jpg",
                    text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit.",
                    isActive: false
                },
                {
                    name:"Germania",
                    image:"img/04.jpg",
                    text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
                    isActive: false
                },
                {
                    name:"Paradise",
                    image:"img/05.jpg",
                    text:"Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,",
                    isActive: false
                }
            ],
            current: 0,
            time: 0
        },
        methods: {
            activateItem: function(index){
                this.current = index;
                this.countriesList.forEach((element) => {
                    element.isActive=false;
                });
                this.countriesList[index].isActive=true;
            },

            prevItem:function(){
                if (this.current - 1 < 0){
                    this.current=4;
                } else {
                    this.current=this.current-1
                }
                this.countriesList.forEach((element) => {
                    element.isActive=false;
                });
                this.countriesList[this.current].isActive=true;
            },
            
            nextItem: function(){
                if (this.current + 1 > 4){
                    this.current=0;
                } else {
                    this.current=this.current+1
                }
                this.countriesList.forEach((element) => {
                    element.isActive=false;
                });
                this.countriesList[this.current].isActive=true;
            },

            timer: function() {
                const cow = this;
                this.time = setInterval(cow.nextItem,3000);
            },
            
            stoptimer: function(){
                clearInterval(this.time);
            }
        },
        mounted(){
            this.timer();
        }
    }
);