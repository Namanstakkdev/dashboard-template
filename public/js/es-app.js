$(document).ready(function(){
    var loader = $(`#c-loader`);
    function ajaxSetup(loader){
        return $.ajaxSetup({
            // headers: {
            //     'X-CSRF-TOKEN': $("meta[name='csrf-token']").attr("content")
            // },
            // async: false,
            beforeSend: function(){
                console.log("Requete en cours, patientez...");
                loader.show();
            }, 
            complete: function(){
                console.log("Requete terminee.");
                // setTimeout(function(){
                loader.hide();
                // }, 1000);
            }, 
        });
    }
    
    
    $("body").on('click', '#registerStudentBtn', function(){
        ajaxSetup(loader);
        $(`#register-ctn`).load('student.php', function(){
            console.log("Loaded successfully");
            // setTimeout(function(){
            loader.hide();
            // }, 1000);
        });
    });

    
    

    $("#register-ctn").on('click', '#backToChoice', function(){
        ajaxSetup(loader);

        // setTimeout(function(){
            $(`#register-ctn`).load('register-choice.php', function(){
                console.log("Loaded successfully");
                // setTimeout(function(){
                //     loader.hide();
                // }, 1000);
            });
        // }, 1000);
        
        
    });

    // $(`#backToChoice`).load('register-choice.php');
});