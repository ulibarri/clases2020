<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
</head>
<body>
    <form action="/student" method="POST"> 
        <label for="fname">First name:</label>
        <input type="text" name="fname" id="fname"><br><br>
        <label for="lname">Last name:</label>
        <input type="text" name="lname" id="lname"><br><br>
        <label for="Mname">Middle name:</label>
        <input type="text" name="mname" id="mname"><br><br>
        <input type="submit" value="Submit">
    </form>
    <script>
        $.ajax({
            type: "POST",
            url: "/personjson",
            data: JSON.stringify({ firstname: 'Luis', lastname: 'Solis' }),
            dataType: 'json',
            contentType: 'application/json'
        });
    </script>
</body>
</html>