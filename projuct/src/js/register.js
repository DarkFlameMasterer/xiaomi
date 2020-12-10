class Reg{
    constructor(){
        this.phone = $('.phone input');
        this.reg_btn = $('.reg_btn');
        this.zero = $('.zero');
        this.wrong = $('.wrong');
        this.addEvent()
    }
    addEvent(){
        let _this = this;
        let cookie_str = $.cookie('registers')? $.cookie('registers') : '';
        let cookie_obj = this.convertStrToObj(cookie_str);
        this.phone.on('blur',function(){
            let re = /^\d{11}$/;
            if($(this).val().length > 0){
                _this.zero.css('display','none');
               if(re.test($(this).val())){
                _this.wrong.css('display','none');
               }else{
                   _this.wrong.css('display','block');
               }
            }else{
                _this.zero.css('display','block');
            }
        })
        this.reg_btn.on('click',function(){
            let re = /^\d{11}$/;
            let name = _this.phone.val();
            if(_this.phone.val().length > 0){
                _this.zero.css('display','none');
               if(re.test(_this.phone.val())){
                _this.wrong.css('display','none');
                if(name in  cookie_obj){
                    alert('用户名已存在');
                    return;
                }else{
                    cookie_obj[name] = '123';
                    $.cookie('registers',JSON.stringify(cookie_obj),{expires : 5,path : '/'});
                    alert('注册成功');
                    location.href = 'login.min.html';
                }
                
               }else{
                   _this.wrong.css('display','block');
               }
            }else{
                _this.zero.css('display','block');
            }
        })
    }
    convertStrToObj(str){
        if(!str){
            return {};
        }
        return JSON.parse(str);
    }
}
new Reg();