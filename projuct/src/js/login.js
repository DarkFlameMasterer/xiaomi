class Card{
    constructor(){
        this.re_pw = $('.lg_change span');
        this.login_page = $('.login');
        this.cur_index = 0;
        this.addEvent(); 
    }
    addEvent(){
        let _this = this;
        this.re_pw.each(function(i,value){
            $(value).on({
                'click':function(){
                    _this.cur_index = i;
                    _this.change();
                }
            })
        })
    }
    change(){
        this.re_pw.each(function(i,value){
            $(value).css({
                'color' : '#333',
            });
        })
        this.re_pw.eq(this.cur_index).css({
            'color' : '#ff6700',
        })
        
        this.login_page.each(function(i,value){
            $(value).css('display','none');
        })
        this.login_page.eq(this.cur_index).css('display','flex');
    }
}
new Card();
class Login{
    constructor(){
        this.name = $('#user');
        this.psw = $('#psw');
        this.log = $('#log');
        this.ff = $('.ff6700');
        this.addEvent();
    }
    addEvent(){
        let _this = this;
        let cookie_str = $.cookie('registers')? $.cookie('registers') : '';
        let cookie_obj = this.convertStrToObj(cookie_str);
        this.log.on('click',function(){
            if(_this.name.val().length === 0){
                _this.ff.text('请输入账号');
                _this.name.css('border','1px solid #ff6700');
            }else{
                if(_this.psw.val().length === 0){
                    _this.ff.text('请输入密码');
                    _this.name.css('border','1px solid #e0e0e0');
                    _this.psw.css('border','1px solid #ff6700');
                }else{
                    if(_this.name.val() in cookie_obj){
                        if(_this.psw.val() === cookie_obj[_this.name.val()]){
                            alert('登录成功');
                            location.href = '../index.html';
                        }else{
                            _this.ff.text('请输入正确的用户名密码');
                            _this.name.css('border','1px solid #ff6700');
                            _this.psw.css('border','1px solid #e0e0e0');
                        }
                    }else{
                        _this.ff.text('请输入正确的用户名密码');
                        _this.name.css('border','1px solid #ff6700');
                        _this.psw.css('border','1px solid #e0e0e0');
                    }
                }
            }
        })
        this.name.on('blur',function(){
            if($(this).val().length !== 0){
                _this.ff.text('');
                _this.name.css('border','1px solid #e0e0e0');
                _this.psw.css('border','1px solid #e0e0e0');
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
new Login();