$(document).ready(function (){
    const socket = io.connect();

    $('button').click(function (e){
        e.preventDefault();
        socket.emit('posting_form', {
			name: $('#name').val(),
			location: $('#location').val(),
			language: $('#language').val(),
			comments: $('#comments').val(),
		})
    });

    socket.on('updated_message', function (data){
        $('#form_info').addClass('message col-sm-4 col-sm-offset-4');
        $('#form_info').html(`<p>You emitted the following information to the server: ${ JSON.stringify(data.post_data) }</p>
			<p>Your lucky number emitted by the server is: ${ data.rand }</p>`);
    });
})
