function userRemoveItemFav(req, res) {
    res.send(`
        <script>
            var confirmation = confirm("Сигурни ли сте, че искате да премахнете имота от любими?");
            if (confirmation) {
                // Изпращане на DELETE заявка от клиента
                var xhr = new XMLHttpRequest();
                xhr.open('DELETE', '/removeFromFavourites/${req.params.itemId}', true);
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        window.location.href = '/favourites';
                    } else {
                        window.location.href = '/favourites';

                    }
                };
                xhr.send();
            } else {
                alert("Действието е отказано.");
            }
        </script>
    `);
}

module.exports = { userRemoveItemFav };