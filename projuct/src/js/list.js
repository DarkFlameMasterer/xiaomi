$('.footer').load('./public.min.html .public_footer');

class Slider{
    constructor(){
        this.big_box = $('.slider');
        this.big_img = $('.big_img img');
        this.num = this.big_img.length;
        this.index = 0;
        this.timer = null;
        this.side_top = $('.side_top');
        this.slider();
        this.time();
        this.addEvent();
    }
    addEvent(){
        let _this = this;
        $(window).on('scroll',function(){
            let scroll_top = Math.floor(document.documentElement.scrollTop) || document.body.scrollTop;
            if(scroll_top >= 500){
                _this.side_top.css('display','block');
            }else{
                _this.side_top.css('display','none');
            }
        })
        this.side_top.on('click',function(){
            document.documentElement.scrollTop = document.body.scrollTop = 0;
        })
    }
    time(){
        let _this = this;
        this.timer = setInterval(() => {
            this.index ++ ;
            if(this.index >= this.num){
                this.index = 0;
            }
            this.slider();
        }, 3000);
        this.big_box.on({
            'mouseenter':()=>{
                clearInterval(this.timer);
            },
            'mouseleave' : ()=>{
                clearInterval(this.timer);
                this.time();
            }
        })
    }
    slider(){
        this.big_img.each(function(i,value){
            $(value).animate({opacity:0},100);
        })
        this.big_img.eq(this.index).animate({opacity:1},100);
    }
}
new Slider();
