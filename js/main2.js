let users = [];
$(document).ready(function(){
    $(".btn-success").click(function(){
        let login = $("#login").val();
        let password = $("#password").val();
        let result = false;
        if(login == ""){
            alert("Login qatorini to`ldiring!");
        }
        else if(password == ""){
            alert("Parol Qatorini to`ldiring!")
        }
        else{
            if(users.length !=0){
                users.forEach(function(item){
                    if(login == item.login){
                        if(password == item.password){
                            result = true;
                            alert("Siz tizimga kirdingiz!");
                        }
                        else{
                            alert("Login yoki parolni tekshirib, qaytadan urunib ko`ring!");
                        }
                    }
                });
                if(!result){
                    alert("Iltimos Ro`yxatdan o`ting!");
                }
            }
            else{
                alert("siz birinchi foydalanuvchisiz! Iltimos, ro`yxatdan o`ting!");
            }
        }
    });
    $(".btn-link").click(function(){
        let login = $("#login").val();
        let password = $("#password").val();
        let result = false;
        if(login == ""){
            alert("Login qatorini to`ldiring!");
        }
        else if(password == ""){
            alert("Parol Qatorini to`ldiring!")
        }
        else{
            if(users.length !=0){
                users.forEach(function(item){
                    if(login == item.login){
                        result = true;
                    }
                });
                if(result){
                    alert("Bunday Login mavjud");
                }
                else{
                    alert("Siz Ro`yxatdan o`tdingiz");
                    users.push({login: login,password: password});
                }
            }
            else{
                users.push({login: login,password: password});
            }
            console.log(users);
        }
    });
    $(".btn-light").on("mousedown", function(){
        let attr = $("#password").attr("type");
        $("#password").attr("type","text");
        $(".fa").toggleClass("fa-eye fa-eye-slash");
        $("#password").css("border","3px solid red");
    });
    $(".btn-light").on("mouseup", function(){
        let attr = $("#password").attr("type");
        $("#password").attr("type","password");
        $(".fa").toggleClass("fa-eye fa-eye-slash");
        $("#password").css("border","3px solid blue");
    })
});