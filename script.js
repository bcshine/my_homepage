// 웹페이지 JavaScript 파일: 웹페이지를 움직이게 만드는 코드예요

// 웹페이지가 완전히 로드된 후에 실행되는 함수예요
document.addEventListener('DOMContentLoaded', function() {
    // 필요한 요소들을 찾아서 변수에 저장해요
    
    // 모바일 메뉴 버튼을 찾아요 (햄버거 메뉴)
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    
    // 모바일 메뉴를 찾아요 (숨겨진 메뉴)
    const mobileMenu = document.getElementById('mobileMenu');
    
    // 모바일 메뉴 링크들을 모두 찾아요
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    
    // 모바일 로그인 버튼을 찾아요
    const mobileLoginBtn = document.querySelector('.mobile-login-btn');
    
    // 데스크톱 로그인 버튼을 찾아요
    const loginBtn = document.querySelector('.login-btn');
    
    // 햄버거 메뉴 버튼을 클릭했을 때 실행되는 함수예요
    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            // 메뉴가 열려있는지 확인해요
            const isMenuOpen = mobileMenu.classList.contains('active');
            
            if (isMenuOpen) {
                // 메뉴가 열려있으면 닫아요
                mobileMenu.classList.remove('active');
                console.log('모바일 메뉴를 닫았어요'); // 개발자가 확인할 수 있는 메시지예요
            } else {
                // 메뉴가 닫혀있으면 열어요
                mobileMenu.classList.add('active');
                console.log('모바일 메뉴를 열었어요'); // 개발자가 확인할 수 있는 메시지예요
            }
        });
    }
    
    // 모바일 메뉴의 링크를 클릭했을 때 메뉴를 자동으로 닫는 함수예요
    mobileNavLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            // 메뉴를 닫아요
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
                console.log('메뉴 링크를 클릭해서 모바일 메뉴를 닫았어요');
            }
        });
    });
    
    // 로그인 버튼을 클릭했을 때 실행되는 함수예요 (데스크톱용)
    if (loginBtn) {
        loginBtn.addEventListener('click', function() {
            alert('로그인 페이지로 이동합니다!'); // 사용자에게 알림을 보여줘요
            console.log('데스크톱 로그인 버튼을 클릭했어요');
            
            // 실제 로그인 페이지로 이동하려면 아래 줄의 주석을 해제하세요
            // window.location.href = 'login.html';
        });
    }
    
    // 모바일 로그인 버튼을 클릭했을 때 실행되는 함수예요
    if (mobileLoginBtn) {
        mobileLoginBtn.addEventListener('click', function() {
            alert('로그인 페이지로 이동합니다!'); // 사용자에게 알림을 보여줘요
            console.log('모바일 로그인 버튼을 클릭했어요');
            
            // 모바일 메뉴를 닫아요
            if (mobileMenu) {
                mobileMenu.classList.remove('active');
            }
            
            // 실제 로그인 페이지로 이동하려면 아래 줄의 주석을 해제하세요
            // window.location.href = 'login.html';
        });
    }
    
    // 화면 크기가 바뀔 때 실행되는 함수예요 (창 크기 조절할 때)
    window.addEventListener('resize', function() {
        // 화면이 커지면 모바일 메뉴를 자동으로 닫아요
        if (window.innerWidth > 480 && mobileMenu) {
            mobileMenu.classList.remove('active');
            console.log('화면이 커져서 모바일 메뉴를 닫았어요');
        }
    });
    
    // 메뉴 바깥쪽을 클릭했을 때 모바일 메뉴를 닫는 함수예요
    document.addEventListener('click', function(event) {
        // 클릭한 곳이 메뉴나 메뉴 버튼이 아닌 경우
        if (mobileMenu && mobileMenuBtn) {
            const isClickInsideMenu = mobileMenu.contains(event.target);
            const isClickOnMenuBtn = mobileMenuBtn.contains(event.target);
            
            // 메뉴가 열려있고, 메뉴나 버튼이 아닌 곳을 클릭했으면 메뉴를 닫아요
            if (mobileMenu.classList.contains('active') && !isClickInsideMenu && !isClickOnMenuBtn) {
                mobileMenu.classList.remove('active');
                console.log('메뉴 바깥쪽을 클릭해서 모바일 메뉴를 닫았어요');
            }
        }
    });
    
    // 네비게이션 링크들에 부드러운 스크롤 효과를 추가하는 함수예요
    const allNavLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
    
    allNavLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // 링크가 #으로 시작하는 경우 (페이지 내 이동)
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                event.preventDefault(); // 기본 동작을 막아요
                
                // 해당하는 요소를 찾아서 부드럽게 스크롤해요
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth', // 부드럽게 이동해요
                        block: 'start' // 요소의 시작 부분으로 이동해요
                    });
                    console.log(href + ' 섹션으로 부드럽게 이동했어요');
                }
            }
        });
    });
    
    // 스크롤할 때 헤더에 그림자 효과를 추가/제거하는 함수예요
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        // 스크롤 위치를 확인해요
        const scrollPosition = window.scrollY;
        
        if (scrollPosition > 50) {
            // 50px 이상 스크롤했으면 진한 그림자를 추가해요
            header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.15)';
        } else {
            // 그렇지 않으면 원래 그림자로 돌려놔요
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });
    
    console.log('헤더 JavaScript가 성공적으로 로드되었어요!'); // 개발자 확인용 메시지
    
    // ===== 히어로 슬라이더 기능 ===== //
    
    // 슬라이더 관련 변수들: 슬라이더를 움직이기 위한 정보들이에요
    let currentSlide = 0; // 현재 보여지는 슬라이드 번호예요 (0부터 시작)
    const slides = document.querySelectorAll('.slide'); // 모든 슬라이드를 찾아요
    const indicators = document.querySelectorAll('.indicator'); // 모든 인디케이터(점들)를 찾아요
    const totalSlides = slides.length; // 전체 슬라이드 개수를 세어요
    let slideInterval; // 자동 슬라이딩을 위한 타이머예요
    
    // 슬라이드를 바꾸는 함수: 새로운 슬라이드를 보여주는 역할을 해요
    function showSlide(slideIndex) {
        // 모든 슬라이드와 인디케이터에서 active 클래스를 제거해요
        slides.forEach(function(slide) {
            slide.classList.remove('active');
        });
        indicators.forEach(function(indicator) {
            indicator.classList.remove('active');
        });
        
        // 슬라이드 번호가 범위를 벗어나지 않게 조정해요
        if (slideIndex >= totalSlides) {
            currentSlide = 0; // 마지막 슬라이드 다음은 첫 번째 슬라이드로 가요
        } else if (slideIndex < 0) {
            currentSlide = totalSlides - 1; // 첫 번째 슬라이드 이전은 마지막 슬라이드로 가요
        } else {
            currentSlide = slideIndex;
        }
        
        // 새로운 슬라이드와 인디케이터를 활성화해요
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
        
        console.log('슬라이드 ' + (currentSlide + 1) + '번으로 변경했어요'); // 개발자 확인용 메시지
    }
    
    // 다음/이전 슬라이드로 이동하는 함수: 화살표 버튼을 눌렀을 때 실행돼요
    window.changeSlide = function(direction) {
        // 자동 슬라이딩을 잠시 멈춰요
        clearInterval(slideInterval);
        
        // 방향에 따라 슬라이드를 바꿔요
        if (direction === 1) {
            showSlide(currentSlide + 1); // 다음 슬라이드로 가요
        } else {
            showSlide(currentSlide - 1); // 이전 슬라이드로 가요
        }
        
        // 자동 슬라이딩을 다시 시작해요
        startAutoSlide();
    };
    
    // 특정 슬라이드로 바로 이동하는 함수: 인디케이터를 클릭했을 때 실행돼요
    window.goToSlide = function(slideIndex) {
        // 자동 슬라이딩을 잠시 멈춰요
        clearInterval(slideInterval);
        
        // 선택한 슬라이드로 이동해요
        showSlide(slideIndex);
        
        // 자동 슬라이딩을 다시 시작해요
        startAutoSlide();
    };
    
    // 자동 슬라이딩을 시작하는 함수: 혼자서 슬라이드가 바뀌게 만들어요
    function startAutoSlide() {
        slideInterval = setInterval(function() {
            showSlide(currentSlide + 1); // 3초마다 다음 슬라이드로 이동해요
        }, 5000); // 5000밀리초 = 5초
    }
    
    // 자동 슬라이딩을 멈추는 함수: 마우스를 올렸을 때 슬라이딩을 멈춰요
    function stopAutoSlide() {
        clearInterval(slideInterval);
    }
    
    // 슬라이더에 마우스를 올렸을 때와 뗐을 때의 동작을 정해요
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        // 마우스를 올리면 자동 슬라이딩을 멈춰요
        heroSection.addEventListener('mouseenter', function() {
            stopAutoSlide();
            console.log('마우스를 올려서 자동 슬라이딩을 멈췄어요');
        });
        
        // 마우스를 떼면 자동 슬라이딩을 다시 시작해요
        heroSection.addEventListener('mouseleave', function() {
            startAutoSlide();
            console.log('마우스를 떼서 자동 슬라이딩을 다시 시작했어요');
        });
    }
    
    // 키보드로 슬라이더를 조작할 수 있게 해요
    document.addEventListener('keydown', function(event) {
        // 왼쪽 화살표 키를 누르면 이전 슬라이드로 가요
        if (event.key === 'ArrowLeft') {
            changeSlide(-1);
            console.log('왼쪽 화살표 키로 이전 슬라이드로 이동했어요');
        }
        // 오른쪽 화살표 키를 누르면 다음 슬라이드로 가요
        else if (event.key === 'ArrowRight') {
            changeSlide(1);
            console.log('오른쪽 화살표 키로 다음 슬라이드로 이동했어요');
        }
    });
    
    // 터치 스와이프 기능: 모바일에서 손가락으로 밀어서 슬라이드를 바꿀 수 있어요
    let touchStartX = 0; // 터치 시작 위치를 기억해요
    let touchEndX = 0; // 터치 끝 위치를 기억해요
    
    if (heroSection) {
        // 터치 시작할 때: 시작 위치를 기억해요
        heroSection.addEventListener('touchstart', function(event) {
            touchStartX = event.changedTouches[0].screenX;
        });
        
        // 터치 끝날 때: 스와이프 방향을 판단해서 슬라이드를 바꿔요
        heroSection.addEventListener('touchend', function(event) {
            touchEndX = event.changedTouches[0].screenX;
            handleSwipe(); // 스와이프를 처리하는 함수를 호출해요
        });
    }
    
    // 스와이프를 처리하는 함수: 터치 방향에 따라 슬라이드를 바꿔요
    function handleSwipe() {
        const swipeThreshold = 50; // 최소 50px 이상 밀어야 스와이프로 인정해요
        const swipeDistance = touchEndX - touchStartX; // 밀어낸 거리를 계산해요
        
        if (Math.abs(swipeDistance) > swipeThreshold) {
            if (swipeDistance > 0) {
                // 오른쪽으로 밀었으면 이전 슬라이드로 가요
                changeSlide(-1);
                console.log('오른쪽 스와이프로 이전 슬라이드로 이동했어요');
            } else {
                // 왼쪽으로 밀었으면 다음 슬라이드로 가요
                changeSlide(1);
                console.log('왼쪽 스와이프로 다음 슬라이드로 이동했어요');
            }
        }
    }
    
    // 페이지가 보이지 않을 때 자동 슬라이딩을 멈추고, 다시 보일 때 시작해요
    document.addEventListener('visibilitychange', function() {
        if (document.hidden) {
            // 페이지가 숨겨지면 자동 슬라이딩을 멈춰요
            stopAutoSlide();
            console.log('페이지가 숨겨져서 자동 슬라이딩을 멈췄어요');
        } else {
            // 페이지가 다시 보이면 자동 슬라이딩을 시작해요
            startAutoSlide();
            console.log('페이지가 다시 보여서 자동 슬라이딩을 시작했어요');
        }
    });
    
    // 슬라이더가 있으면 자동 슬라이딩을 시작해요
    if (slides.length > 0) {
        startAutoSlide();
        console.log('히어로 슬라이더가 성공적으로 시작되었어요!');
    }
    
    console.log('히어로 슬라이더 JavaScript가 성공적으로 로드되었어요!'); // 개발자 확인용 메시지
    
    // ===== 제품 섹션 더보기/접기 기능 ===== //
    
    console.log('제품 섹션 JavaScript가 성공적으로 로드되었어요!'); // 개발자 확인용 메시지
});

// 제품 설명 더보기/접기 함수: 버튼을 누르면 전체 설명을 보거나 숨기는 역할을 해요
function toggleDescription(button) {
    // 클릭된 버튼이 속한 제품 아이템을 찾아요
    const productItem = button.closest('.product-item');
    
    // 짧은 설명과 전체 설명 영역을 찾아요
    const shortDescription = productItem.querySelector('.product-description-short');
    const fullDescription = productItem.querySelector('.product-description-full');
    
    // 현재 전체 설명이 보이는지 확인해요
    const isFullVisible = fullDescription.style.display !== 'none';
    
    if (isFullVisible) {
        // 전체 설명이 보이고 있으면 숨기고 짧은 설명을 보여줘요
        fullDescription.style.display = 'none'; // 전체 설명을 숨겨요
        shortDescription.style.display = 'block'; // 짧은 설명을 보여줘요
        button.textContent = '더보기'; // 버튼 글자를 '더보기'로 바꿔요
        console.log('제품 설명을 짧게 접었어요'); // 개발자 확인용 메시지
    } else {
        // 짧은 설명이 보이고 있으면 숨기고 전체 설명을 보여줘요
        shortDescription.style.display = 'none'; // 짧은 설명을 숨겨요
        fullDescription.style.display = 'block'; // 전체 설명을 보여줘요
        button.textContent = '접기'; // 버튼 글자를 '접기'로 바꿔요
        console.log('제품 설명을 전체로 펼쳤어요'); // 개발자 확인용 메시지
    }
    
         // 버튼에 살짝 애니메이션 효과를 줘요
     button.style.transform = 'scale(0.95)'; // 버튼을 살짝 작게 만들어요
     setTimeout(function() {
         button.style.transform = 'scale(1)'; // 0.1초 후에 원래 크기로 돌려놔요
     }, 100);
 }

// ===== 챗봇 기능 ===== //

// 챗봇을 여는 함수: ZAVIS 챗봇 페이지를 새 창에서 열어주는 역할을 해요
function openChatbot() {
    // ZAVIS 챗봇 링크: 사장님의 수퍼앱 챗봇이에요
    const chatbotUrl = 'https://chatgpt.com/g/g-684f6e6b9ed48191bb537979053a36cc-naeireumeun-zavis-sajangnimyi-supeoaeb';
    
    // 새 창에서 챗봇을 열어요
    window.open(chatbotUrl, '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
    
    console.log('ZAVIS 챗봇을 새 창에서 열었어요!'); // 개발자 확인용 메시지
    
    // 클릭 효과: 챗봇 버튼에 살짝 애니메이션을 줘요
    const chatbotButton = document.querySelector('.chatbot-button');
    if (chatbotButton) {
        chatbotButton.style.transform = 'scale(0.9)'; // 버튼을 살짝 작게 만들어요
        setTimeout(function() {
            chatbotButton.style.transform = 'scale(1)'; // 0.2초 후에 원래 크기로 돌려놔요
        }, 200);
    }
} 