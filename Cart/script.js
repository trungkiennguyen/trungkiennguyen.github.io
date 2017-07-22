    var data = {
        products: [
            {
                image: "https://via.placeholder.com/200x150",
                name: "PRODUCT ITEM NUMBER 1",
                description: "Description for product item number 1",
                price: 5.99,
                quantity: 1
            },
            {
                image: "https://via.placeholder.com/200x150",
                name: "PRODUCT ITEM NUMBER 2",
                description: "Description for product item number 2",
                price: 9.99,
                quantity: 1
            }
        ],
        tax: 5,
        promotions: [
            {
                code: '29xgbuHa4O',
                discount: '50%'
            },
            {
                code: 'mUxSnhywT1',
                discount: '40%'
            },
            {
                code: 'nDdViZL4l3',
                discount: '30%'
            }
        ]
    };
    $(function () {
        var html = '';
        var subtotal = 0;
        var qty = 0;
        var click = 0;
        for (i = 0; i < data.products.length; i++) {
            html += '<li class="row"><div class="col left"><div class="thumbnail"><a href="#"><img src="' + data.products[i].image + '" alt="San pham" /></a></div><div class="detail"><div class="name"><a href="#">' + data.products[i].name + '</a></div><div class="description">' + data.products[i].description + '</div><div class="price">$ <span>' + data.products[i].price + '</span></div></div></div><div class="col right"><div class="quantity"><input type="number" class="quantityx" step="1" value="' + data.products[i].quantity + '" /></div><div class="remove"><svg version="1.1" class="close" xmlns="//www.w3.org/2000/svg" xmlns:xlink="//www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" xml:space="preserve"><polygon points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812"></polygon></svg></div></div></li>';
            subtotal += (data.products[i].quantity * data.products[i].price);
            qty += data.products[i].quantity;
        };
        var total = subtotal + (data.tax*subtotal) / 100;
        $('.count').html(qty + ' items in the bag');
        $('.products').append(html);
        $('.close').click(function () {
            var subtotal = 0;
            click++;
            $(this).closest('li').remove();

            var sum = 0;
            $(".quantityx").each(function () {
                sum += +$(this).val();
            });
            $('.count').html(sum + ' items in the bag');

            $(".row").each(function () {
                var subtotal2 = 0;
                subtotal2 += +($(this).find('input').val() * parseFloat($(this).find('span').html()));
                console.log(subtotal2.toFixed(2));
                var total2 = subtotal2 + (data.tax*subtotal2) / 100;
                $('#subtotal').html(subtotal2.toFixed(2) + '$');
                $('#tax').html(data.tax + '%');
                $('#total').html(total2.toFixed(2) + '$');
            });

            if (click == data.products.length) {
                $('.checkout').remove();
                $('.promotion').remove();
                $('.summary').remove();
                $('h2').html('There are no products in your shopping cart!')
            }
            console.log(click);
        })
        $('#subtotal').html(subtotal + '$');
        $('#tax').html(data.tax + '%');
        $('#total').html(total + '$');

        $(".quantityx").on("change", function () {
            var sum = 0;
            $(".quantityx").each(function () {
                sum += +$(this).val();
            });

            $('.count').html(sum + ' items in the bag');
            var subtotal3 = 0;
            $(".row").each(function () {

                subtotal3 += +($(this).find('input').val() * parseFloat($(this).find('span').html()));
                console.log(subtotal3.toFixed(2));
            });
            var total3 = subtotal3 + (data.tax*subtotal3) / 100;
            $('#subtotal').html(subtotal3.toFixed(2) + '$');
            $('#tax').html(data.tax + '%');
            $('#total').html(total3.toFixed(2) + '$');
        });

    });