let User = (prompt("Porfavor, ingrese su Usuario  "));

if (User == "Admin")
{
    Pass = prompt("Porfavor, ingrese su Contrasena")
}
else if (User == "" || User == null)
{
   alert("Cancelado")
}
else if (User != "Admin")
{
   alert("No te conozco")
}

if(Pass == "TheMaster")
{
    alert("Bienvenido al Sistema");
}
else if (Pass == "" || Pass == null)
{
    alert("Cancelado");
}
else if(Pass != "TheMaster")
{
    alert("La Contraseña esta incorrecta ");
}
