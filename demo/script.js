$(document).ready(function() {
    $('input').vcheck();
    
    $('input').change(function() {
        console.log('%c input was change', 'color: green;');
    });
    $('input').click(function() {
        console.log('%c input was click', 'color: blue;');
    });
});
