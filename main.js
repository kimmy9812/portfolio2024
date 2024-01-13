const introEl = document.getElementById('intro');
const aboutEl = document.getElementById('about');
const detailPageEl = document.getElementById('detailPage');
const webPublishingEl = document.getElementById('webPublishing');
const etcEl = document.getElementById('etc');

// 상단으로 스크롤 버튼을 클릭하면,
introEl.addEventListener('click', function () {
    console.log('click');
    // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
    gsap.to(window, {
      scrollTo: { y: 0 },
      duration: 0.7, // 애니메이션 지속 시간 (0.7초)
    });
  });

  aboutEl.addEventListener('click', function () {
    console.log('click');
    // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
    gsap.to(window, {
      scrollTo: { y: 990 },
      duration: 0.7, // 애니메이션 지속 시간 (0.7초)
    });
  });

  detailPageEl.addEventListener('click', function () {
    console.log('click');
    // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
    gsap.to(window, {
      scrollTo: { y: 1904 },
      duration: 0.7, // 애니메이션 지속 시간 (0.7초)
    });
  });

  webPublishingEl.addEventListener('click', function () {
    console.log('click');
    // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
    gsap.to(window, {
      scrollTo: { y: 6664 },
      duration: 0.7, // 애니메이션 지속 시간 (0.7초)
    });
  });

  etcEl.addEventListener('click', function () {
    console.log('click');
    // 페이지 위치를 최상단으로 부드럽게(0.7초 동안) 이동.
    gsap.to(window, {
      scrollTo: { y: 10472 },
      duration: 0.7, // 애니메이션 지속 시간 (0.7초)
    });
  });


  const fadeEls = document.querySelectorAll('.intro .fade-in')
// 나타날 요소들을 하나씩 반복해서 처리!
fadeEls.forEach(function (fadeEl, index) {
  // 각 요소들을 순서대로(delay) 보여지게 함!
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .5,
    opacity: 1
  })
})


/**
 * 요소가 화면에 보여짐 여부에 따른 요소 관리
 */
// 관리할 요소들 검색!
const spyEls = document.querySelectorAll('section.scroll-spy')
// 요소들 반복 처리!
spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})


function showPopup(popupId) {
  
  const popup = document.getElementById(popupId);
 
  if (popup) {
      popup.classList.toggle('showpopup');
  }
}

function removePopup(popupId) {
    const popup= document.getElementById(popupId);
    popup.classList.remove('showpopup',);
}

