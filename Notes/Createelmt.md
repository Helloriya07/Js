<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .box{
            height: 50px;
            width: 50px;
            margin: 10px;
            padding: 10px;
            color: rgb(255, 0, 4);
            box-shadow: 10px;
            border: 2px solid rgb(4, 1, 23);

        }
    </style>
</head>
<body>
    
</body>
<script>
   const div= document.createElement('div'); // to create a element
   console.log(div);
   div.className="box" //setting attribute to elements
   div.id=Math.random()*10
   div.setAttribute("title","generated element");
   div.style.backgroundColor="red";
  // div.innerText="riya shukla";
  const addText=document.createTextNode("i am riya");
  div.appendChild(addText);
   //attaching on page
   document.body.appendChild(div);


</script>
</html>