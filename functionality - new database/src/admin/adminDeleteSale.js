function adminDeleteSale(req, res) {
    res.send(`
        <script>
            var confirmation = confirm("Сигурни ли сте, че искате да изтриете имота?");
            if (confirmation) {
                // Изпращане на DELETE заявка от клиента
                var xhr = new XMLHttpRequest();
                xhr.open('DELETE', '/deleteSale/${req.params.saleId}', true);
                xhr.onload = function () {
                    if (xhr.status === 200) {
                        // Презареждане на страницата (връщане към началната страница)
                        window.location.href = '/admin/sales';
                    } else {
                        window.location.href = '/admin/sales';

                    }
                };
                xhr.send();
            } else {
                alert("Действието е отказано.");
            }
        </script>
    `);
}

module.exports = { adminDeleteSale };