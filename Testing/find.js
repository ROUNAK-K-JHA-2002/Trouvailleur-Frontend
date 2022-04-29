$(document).ready(function() {
    var arr = [];


    fetch('./local.json')
        .then((data) => {
            return data.json();
        }).then((localData) => {
            console.log(localData.Assam[3].localName)
        }).catch((e) => {
            console.log(e)
        })

    $("#submit").click(function() {
        $.each($("input[name='checkbox']:checked"), function() {
            arr.push($(this).val());
        });
        console.log(arr)
    });

    console.log(arr)
});