<script>
function switchfunction() {

var selectBeds = document.getElementById("beds").value;
switch(seltheme){
    case "H":
    document.getElementById("switchtable").className = "H_table";
    break;

    case "0":
    document.getElementById("switchtable").className = "0_table";
    break;

    case "1":
    document.getElementById("switchtable").className = "1_table";
    break;

    case "2":
    document.getElementById("switchtable").className = "2_table";
    break;

    case "3":
    document.getElementById("switchtable").className = "3_table";
    break;

    case "4":
    document.getElementById("switchtable").className = "4_table";
    break;

    default:
    document.getElementById("switchtable").className = "2_table";
    break;
}

}
</script>
