    function clock()
    {
        var date=new Date()
        var hour=date.getHours()
        var min=date.getMinutes()
        var second=date.getSeconds()
        var dd=date.getDate()
        var mon=date.getMonth()
        var year=date.getFullYear()
        var day=date.getDay()
        var AM="AM"
        
        if (hour>=12)
        {
            AM="PM"
            if (hour>=13)
            {
               hour-=12;

            }
        }
        var time=hour+":"+min+":"+second+" "+AM
        switch (day)
        {
            case 0:
                day="Sunday"
            break;
            case 1:
                day="Monday"
            break;
            case 2:
                day="Tuesday"
            break;
            case 3:
                day="Wednesday"
            break;
            case 4:
                day="Thursday"
            break;
            case 5:
                day="friday"
            break;
            case 6:
                day="saturday"
            break;

        }
        document.getElementById("Time").innerHTML=time
        document.getElementById("day").innerHTML=day
        var refreshclock=setTimeout(function(){clock()},1000)
    }
    // for home 
    const handleClick=()=>{
        document.getElementById("a1").href="./portfolio1.html"
    }
    //for aboutMe 
    const handleClick1=()=>{
        document.getElementById("a2").href="./portfolio2.html"
    }
    const handleClick2=()=>{
        document.getElementById("a3").href="./portfolio3.html"
    }
    const handleClick3=()=>{
        document.getElementById("a4").href="./portfolio4.html"
    }