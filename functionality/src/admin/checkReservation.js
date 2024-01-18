function checkReservation(req, res) {
    res.send(`
        <script>
            var confirmation = confirm("Сигурни ли сте, че резервацията е изпълнена?");
            if (confirmation) {
                // Изпращане на DELETE заявка от клиента
                var xhr = new XMLHttpRequest();
                xhr.open('DELETE', '/check/reservation/${req.params.userId}', true);
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        // Презареждане на страницата (връщане към началната страница)
                        window.location.href = '/admin';
                    } else {
                        window.location.href = '/admin';

                    }
                };
                xhr.send();
            } else {
                alert("Действието е отказано.");
            }
        </script>
    `);
}

module.exports = { checkReservation };