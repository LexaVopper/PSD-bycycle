$(document).ready(function () {
  const slidesToShow = 1;

  const container = $('.container');
  const body = $('.slider__body');
  const item = $('.slider__item');
  let visibleItem = 0;

  let activeItem = 0;
  //Кнопки
  const btns = $('.btn');

  let itemWidth = container.width() / slidesToShow;

  const setStyle = () => {
    item.each(function (index, item) {
      $(item).css({
        minWidth: itemWidth,
        visibility: `hidden`,
      });
    });
  };

  showVisibleItem = () => {
    $(item[visibleItem]).css({
      visibility: `visible`,
    });
  };

  setStyle();

  showVisibleItem();

  $(window).resize(function () {
    itemWidth = container.width() / slidesToShow;

    item.each(function (index, item) {
      $(item).css({
        minWidth: itemWidth,
      });
    });
    translateX(itemWidth * activeItem);
  });

  remoweActiveItem = () => {
    $(btns[activeItem]).removeClass('active');
  };

  removeVisibleItem = () => {
    $(item[visibleItem]).css({
      visibility: `hidden`,
    });
  };

  btns.each(function (index, btn) {
    btn.onclick = () => {
      remoweActiveItem();
      removeVisibleItem();
      translateX(itemWidth * index);
      activeItem = index;
      visibleItem = index;
      showVisibleItem();
      $(btns[activeItem]).addClass('active');
    };
  });

  const translateX = (position) => {
    body.css({
      transform: `translateX(-${position}px)`,
    });
  };
});
