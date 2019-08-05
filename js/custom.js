jQuery(document).ready(function($) {
	if($("body").hasClass("page-whatWeDo")) {
		$("#sns__js").on("init", function(slick) {
		});
		$("#sns__js").slick({
			infinite: false,
			dots: true,
			dotsClass: "sns__dots",
			prevArrow: '<button type="button" class="sns__arrow sns__arrow_prev"><span class="sns__arrowIcon"></span></button>',
			nextArrow: '<button type="button" class="sns__arrow sns__arrow_next"><span class="sns__arrowIcon"></span></button>',
			accessibility: true
		})
		snsChange();
		$("#sns__js").on("afterChange", function() {
			snsChange();
		});
		function snsChange() {
			var slides = $(".sns__dots").find("li[role='presentation']").length;
			var activeSlide = +$(".sns__dots").find("li.slick-active[role='presentation']").find("button")[0].innerText;
			$(".sns__activeSlide").text(activeSlide)
			$(".sns__slidesCount").text(slides)
		}
	}

	if($("body").hasClass("page-homepage")) {
		if($(".faq__question").length > 1) {
			$("#faq_accordion").accordion({
				icons: null,
				heightStyle: "content",
				collapsible: true
			});
		}
	}


	$("#infoLayoutTabs").tabs();

	if($("body").hasClass("page-workWithUs")) {
		$(".snf__input").on("focus", function() {
			$(this).closest(".snf__inputField").addClass("snf__inputField--filled")
		});
		$(".snf__input").on("blur", function() {
			let trimmedValue = $.trim($(this)[0].value).length;
			if(trimmedValue === 0) {
				$(this).closest(".snf__inputField").removeClass("snf__inputField--filled");
			}
		});

		$("#workWithUs__services").multipleSelect({
			multiple: true,
			displayTitle: false,
			width: "100%",
			multipleWidth: "100%",
			dropWidth: "100%",
			maxHeight: 500,
			// animate: "slide",
			onOpen: function () {
				$(".snf__selectField").addClass("snf__selectField--open");
				$(".snf__selectField1").find(".snf__selectLabel").addClass("snf__selectLabel--selectOpen");
			},
			onClose: function () {
				$(".snf__selectField").removeClass("snf__selectField--open");
				if($(".snf__selectField1").find(".ms-choice").find("span").text().length > 0) {
					return;
				} else {
					$(".snf__selectField1").find(".snf__selectLabel").removeClass("snf__selectLabel--selectOpen");
				}
			},
		})
	}
	$(".menuToggler").on("click", function() {
		$(this).toggleClass("menuToggler--open");
		$(this).closest(".header").toggleClass("header--open");
		$("body").toggleClass("scroll-lock");
	});
	$(".mainLayer").on("click", function() {
		$(this).closest(".header").find(".menuToggler").removeClass("menuToggler--open");
		$(this).closest(".header").removeClass("header--open");
		$("body").removeClass("scroll-lock");
	});
});
$(window).resize(function() {
	if($(".header").hasClass("header--open") && $(this).outerWidth(true) > 991) {
		$(".menuToggler").removeClass("menuToggler--open");
		$(".header").removeClass("header--open");
		$("body").removeClass("scroll-lock");
	}
})