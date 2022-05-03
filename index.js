// this one spawns all the blocks of cool stuff content idk pls help me Im trapped ahhhhh

//getting the text files into seperate blocks into content array
let content = []

function reqListener() {
    content = this.responseText.split(";");
}

var oReq = new XMLHttpRequest();
oReq.addEventListener("load", reqListener);
oReq.open("GET", "content.txt");
oReq.send();

//the actual process
$(document).ready(function () {

    GenerateContent();
});
function GenerateContent() {
    content.forEach(function (block) {
        var data = block.split("|");
        if (data[0][0] != "!") {
            for (var i = 0; i < data.length; i++) {
                data[i].trim();
                data[i] = data[i].replace(/(\r\n|\n|\r)/gm, "");
                data.splice(i, 1, data[i]);

                CreateOffData;

            }
        }
        if (block[0] != "\r\n" & block[0][0] != "!") {
            CreateOffData(data);
        }
        
    });
}
function CreateOffData(data) {
    // complex html bs
    var obj = "" +
        "<div class=\"block\">" +
        "                <div width=\"5%\">" +
        "                    <h2>NAME</h2>" +
        "                    <br />" +
        "                    <p style=\" max-width: 300px; overflow-wrap: break-word\">DESC</p>" +
        "                    <br />" +
        "                    <ul style=\"position:absolute; font-size: 12px\">" +
        "                        <li>" +
        "                            TYPE" +
        "                        </li>" +
        "                        <li>" +
        "                            SUBT" +
        "                        </li>" +
        "                    </ul>" +
        "                    <br />" +
        "                    " +
        "                    <div style=\"text-align:right; padding-right:50px;\">" +
        "                        DATE" +
        "                    </div>" +
        "                    " +
        "                </div>" +
        "                " +
        "" +
        "                <div>" +
        "                    IMAGE" +
        "                </div>" +
        "            </div>" +
        "";

    //!NAME - DESCRIPTION - LINK - TYPE - SUBTYPE - DATE - ORDER;

    obj = obj.replace("NAME", data[0]);
    obj = obj.replace("DESC", data[1]);
    obj = obj.replace("LINK", data[2]);
    obj = obj.replace("TYPE", data[3]);
    obj = obj.replace("SUBT", data[4]);
    obj = obj.replace("DATE", data[5]);
    obj = obj.replace("ORDR", data[6]);


    $("#indexGrid").append(obj);




}