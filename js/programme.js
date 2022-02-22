$(document).ready(function(){
    $(".toast").toast();
    $("#myToast").on('hidden.bs.toast', function(){
        alert("N'oublier pas c'est une seul alerte vous n'aurai pas de prochaine rappel à se sujet!!.");
    });
});