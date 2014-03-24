$(document).ready(function () {
    $(document).on('click', '.play', function(event) {
    	$(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            document.getElementById('music').play();
            $('#person4').sprite({fps: 5, no_of_frames: 2});  
            $('#person7').sprite({fps: 5, no_of_frames: 2});
            $('#person12').sprite({fps: 5, no_of_frames: 2}); 
            $('#person14').sprite({fps: 5, no_of_frames: 2}); 
            $('#person17').sprite({fps: 5, no_of_frames: 2}); 
            $('#person28').sprite({fps: 5, no_of_frames: 3});
            $('#person24').sprite({fps: 5, no_of_frames: 2}); 
            $('#person22').sprite({fps: 5, no_of_frames: 2}); 
        }else{
            document.getElementById('music').pause();
            $('#person4').destroy();
            $('#person7').destroy();
            $('#person12').destroy();
            $('#person14').destroy();
            $('#person17').destroy();
            $('#person28').destroy();
            $('#person24').destroy();
            $('#person22').destroy();
        }
    }); 
console.log('Hello fellow javascripter!');
console.log('Looking for work? Send an email to nerd@fortnox.se');
console.log('Or run job()');

function job(){
    window.location = 'http://www.fortnox.se/om-fortnox/jobba-pa-fortnox/'
}

});