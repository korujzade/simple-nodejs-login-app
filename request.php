
<!DOCTYPE html>
<html>
<body>

<?php


	$username = $_POST['username'];
	$password = $_POST['password'];

	$ch = curl_init();

	curl_setopt($ch, CURLOPT_URL,"http://127.0.0.1:3008/login");
	curl_setopt($ch, CURLOPT_POST, 1);
	curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query(array('username' => $username, 'password' => $password )));



	// receive server response ...
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

	$server_output = curl_exec ($ch);

	curl_close ($ch);

	$jsonobj = json_decode($server_output);

	$isSuccess = json_encode($jsonobj->{'success'});

	if ($isSuccess == "true") {
		$successMessage = json_encode($jsonobj->{'payload'}->{'message'});
		echo "$successMessage";
	} else {
		$errorMessage = json_encode($jsonobj->{'error'}->{'message'});
		echo "$errorMessage";
	}

	
?>

</body>
</html>