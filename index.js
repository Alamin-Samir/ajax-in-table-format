$(document).ready(function () {

    $("#loadBtn").click(function () {

        $.ajax({
            url: "https://raw.githubusercontent.com/hitch17/sample-data/master/presidents.json",
            type: "GET",
            dataType: "json",

            success: function (data) {
                let tb = $("#dataTable tbody");
                tb.empty();

                $.each(data, function (i, item) {
                    tb.append(`
                        <tr>
                            <td>${item.president}</td>
                            <td>${item.party}</td>
                            <td>${item.took_office}</td>
                            <td>${item.left_office || "Still in Office"}</td>
                        </tr>
                    `);
                });
            },

            error: function () {
                alert("Error loading data");
            }
        });

    });

});
