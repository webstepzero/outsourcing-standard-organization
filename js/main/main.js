const happyText =
  "아이들의 꿈을 이뤄 줄 세상<br />CMYK행복재단이 만들어갑니다.";
const youthText = "청년일자리 걱정없는 사회,<br /> CMYK재단이 만들어 갑니다.";

const filterPath = (color, target) => {
  if (color === "white") {
    return `/assets/image/ic_thumb${target}_w.svg`;
  } else {
    return `/assets/image/ic_thumb${target}.svg`;
  }
};

const backgroundSwiper = new Swiper(".background-slide", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: (idx, className) => {
      if (idx === 0) {
        return `<button class="${className} happy-industry industry" type="button">
                  <span class="industry-text">행복나눔사업</span>
                  <img src="${filterPath("white", 1)}" alt="industry" />
                </button>`;
      } else {
        return `<button class="${className} youth-industry industry" type="button">
                  <span class="industry-text">청년지원사업</span>
                  <img src="${filterPath("green", 2)}" alt="industry" />
                </button>`;
      }
    },
  },
  on: {
    slideChange: () => {
      const happy = document.querySelector("button.happy-industry");
      const youth = document.querySelector("button.youth-industry");
      const slogan = document.querySelector(".big-slogan");
      const industryMore = document.querySelector(".happy-industry_on a");
      const happyClass = happy.className;

      slogan.classList.remove("active");
      if (happyClass.includes("active")) {
        happy.querySelector("img").src = filterPath("white", 1);
        youth.querySelector("img").src = filterPath("green", 2);
        slogan.classList.add("active");
        industryMore.classList.add("active");

        setTimeout(() => {
          slogan.innerHTML = happyText;
          industryMore.innerHTML = "행복나눔사업";
        }, 250);
        setTimeout(() => {
          slogan.classList.remove("active");
          industryMore.classList.remove("active");
        }, 500);
      } else {
        happy.querySelector("img").src = filterPath("green", 1);
        youth.querySelector("img").src = filterPath("white", 2);
        slogan.classList.add("active");
        industryMore.classList.add("active");

        setTimeout(() => {
          slogan.innerHTML = youthText;
          industryMore.innerHTML = "청년지원사업";
        }, 250);
        setTimeout(() => {
          slogan.classList.remove("active");
          industryMore.classList.remove("active");
        }, 500);
      }
    },
  },
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});
