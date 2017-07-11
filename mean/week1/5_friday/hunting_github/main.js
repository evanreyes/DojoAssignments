$(document).ready(function() {
	$('form').submit(function() {
		$.get("https://api.github.com/users/evanreyes", displayName);
		this.reset();
	})

	function displayName(data) {
		$('p').html(`\n My name: ${data.name}`);
	}
});
