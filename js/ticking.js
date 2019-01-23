let hoursWorked = 120;

function tick()
{
	hoursworked++;
}

setInterval(function() { tick(); }, 60*601000);

document.getElementById('tick').innerHTML = hoursWorked;






