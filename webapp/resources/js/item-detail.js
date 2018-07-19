(function () {
	'use strict';

	/** to generate item detail page with the specified data */
	var generateItemDetailPage = function(data){
		$('.item-detail').attr('data-id', data.id);
		$('.item-detail-name-header-text').html(data.name);
		$('.item-detail-name-text').html(data.name);
		$('.item-detail-image').attr('src', data.image);
		if (data.isSoldOut) {
			$('.item-detail-sold').removeClass('display-none');
		}
		$('.item-detail-like-count').html(data.like_count <= 0 ? '' : data.like_count);
		$('.item-detail-comment-count').html(!data.comment_count || data.comment_count <= 0 ? '' : data.comment_count);
		$('.item-detail-description-info-text').html(data.description);
		$('.item-detail-price-text').html(formatMoney(data.price));
		$('.item-detail-shipping-fee-text').html(data.shippingFee);
	}

	/**  to load item detail data from the api  */
	var loadItemDetail = function(){
		if (isIE()) {
			var id = location.search.split('id=')[1];
		} else {
			var url = new URL(window.location.href);
			var id = url.searchParams.get('id');
		}
		$.get(baseApiUrl+'/items/'+id, function (response) {
			generateItemDetailPage(response);
		}, 'json')
		.fail(function() {
			console.log('failed to retrieve data from api, dummy data will be used');
			var data = {
				"id":"1","name":"men1","description":"size free 1","like_count":91,"comment_count":59,
				"price":51,"isSoldOut":false,"shippingFee":"送料込み","image":"http://dummyimage.com/400x400/000/fff?text=men1"
			};
			generateItemDetailPage(data);
		});
	}

	/** click event handler for back button */
	$('.icon-back').on('click', function(event) {
		window.location.href = '/';
	})

	$(function(){
		loadItemDetail();
	});
})();
