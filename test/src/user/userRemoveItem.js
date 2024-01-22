function userRemoveItem(req, res) {
    res.send(`
        <script>
            var confirmation = confirm("Сигурни ли сте, че искате да премахнете имота от количката?");
            if (confirmation) {
                // Изпращане на DELETE заявка от клиента
                var xhr = new XMLHttpRequest();
                xhr.open('DELETE', '/removeFromCart/${req.params.itemId}', true);
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        // Презареждане на страницата (връщане към началната страница)
                        window.location.href = '/bag';
                    } else {
                        window.location.href = '/bag';

                    }
                };
                xhr.send();
            } else {
                alert("Действието е отказано.");
            }
        </script>
    `);
}

module.exports = { userRemoveItem };