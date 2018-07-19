(function () {
	'use strict';

	/** to build category list by using jquery template */
	var buildCategoryList = function(data) {
		$.get('templates/category-template.html', function(template){
			$.tmpl(template, data).appendTo('.category-list');
		});
	}

	/** to load category data from the api and build the list*/
	var loadCategoryList = function(){
		$.get(baseApiUrl+'/categories', function (response) {
			buildCategoryList(response.data);
		}, 'json')
		.fail(function() {
			console.log('failed to retrieve data from api, dummy data will be used');
			var data = [
				{"id":"1","name":"すべて"},{"id":"2","name":"レディース"},
				{"id":"3","name":"ベビー・キッズ"},{"id":"4","name":"エンタメ"},
				{"id":"5","name":"メンズ"}
			];
			buildCategoryList(data);
		});
	}

	/** to build item list by using jquery template */
	var buildItemList = function (data) {
		$.get('templates/item-template.html', function(template){
			$.tmpl(template, data).appendTo('.item-list');
		});
	}

	/** to load item data from the api and build the list */
	var loadItemList = function(){
		$.get(baseApiUrl+'/items', function (response) {
			buildItemList(response.data);
		}, 'json')
		.fail(function() {
			console.log('failed to retrieve data from api, dummy data will be used');
			var data = [
				{
					"id":"1","name":"men1","description":"size free 1","like_count":91,"comment_count":59,
					"price":51,"isSoldOut":false,"shippingFee":"送料込み","image":"http://dummyimage.com/400x400/000/fff?text=men1"
				},
				{
					"id":"2","name":"men2","description":"size free 1","like_count":0,"comment_count":0,
					"price":10000,"isSoldOut":true,"shippingFee":"送料込み","image":"http://dummyimage.com/400x400/000/fff?text=men2"
				},
				{
					"id":"3","name":"men3","description":"size free 1","like_count":17,"comment_count":58,
					"price":1500,"isSoldOut":false,"shippingFee":"送料込み","image":"http://dummyimage.com/400x400/000/fff?text=men3"
				},
				{
					"id":"4","name":"men4","description":"size free 1","like_count":0,"comment_count":0,
					"price":38,"isSoldOut":false,"shippingFee":"送料込み","image":"http://dummyimage.com/400x400/000/fff?text=men4"
				}
			];
			buildItemList(data);
		});
	}

	/** delegate event from item-list to item */
	$('.item-list').on('click', '.item', function(event) {
		var currentTarget = event.currentTarget;
		window.location.href = 'item-detail.html?id='+currentTarget.dataset.id;
	})

	$(function(){
		loadCategoryList();
		loadItemList();
	});
})();


