                                                                           // Trang chủ
                



                        // ICON tìm kiếm
function toggleSearch(){
    const headerinput = document.getElementById("header-input-box");
        if(headerinput.style.display === 'none' || headerinput.style.display === ''){
                headerinput.style.display = 'block';
                headerinput.style.transition = 'width 0.3s ease, opacity 0.3s ease';
                headerinput.focus();
         }
         else {
                headerinput.style.display = 'none';
                headerinput.style.transition = 'width 0.3s ease, opacity 0.3s ease';

         }
  }                  // ICON tìm kiếm





                        // dropdown navbar
      function showSidebar(){
         const sidebar = document.querySelector('.sidebar')
         sidebar.style.left = '0px';             
         }

      function hideSidebar(){
          const sidebar = document.querySelector('.sidebar')
          sidebar.style.left = '-100%';
                           
         }             // dropdown navbar




                        // Thay đổi hình nền              
const randomImage = [
    'url("image/randomImg-1.jpg")',
    'url("image/randomImg-2.jpg")',
    'url("image/randomImg-3.jpg")'
];

const backgroundContainer = document.getElementById("img-container");
                
// Chỉ thực hiện thay đổi hình nền nếu đang ở trang chủ
if (backgroundContainer) {
    const randomImage = [
        'url("image/randomImg-1.jpg")',
        'url("image/randomImg-2.jpg")',
        'url("image/randomImg-3.jpg")'
    ];

    let currentIndex = 0;

    function changeBackground() {
        backgroundContainer.style.backgroundImage = randomImage[currentIndex];
        currentIndex = (currentIndex + 1) % randomImage.length;
    }

    // Đặt hình nền ban đầu và bắt đầu thay đổi hình nền cho trang chủ
    changeBackground();
    setInterval(changeBackground, 8000);
}

// Dòng chữ trượt khi người dùng kéo đến
document.addEventListener("DOMContentLoaded", function () {
    const animatedText = document.getElementById("animatedText");

    // Chỉ chạy phần này nếu có phần tử animatedText
    if (animatedText) {
        function handleScroll() {
            const rect = animatedText.getBoundingClientRect();
            const isVisible = rect.top <= window.innerHeight && rect.bottom >= 0;

            if (isVisible) {
                animatedText.classList.add("animate"); // Thêm lớp để kích hoạt animation
                window.removeEventListener("scroll", handleScroll); // Ngừng kiểm tra khi đã kích hoạt
            }
        }
        window.addEventListener("scroll", handleScroll); // Lắng nghe sự kiện scroll
    }
});

                                                                      // Trang chủ    


/* javaScript của trang sản Phẩm */ 
                
                // Danh sách ID của các carousel
                const carouselIDs = ['carouselTomNuong', 'carouselMucNuong', 'carouselCaLocNuong', 'carouselHauNuong', 'carouselGheHap', 'carouselTomHap', 'carouselMucHap', 'carouselSoHap', 'carouselLauHaiSan', 'carouselLauCua', 'carouselCanhChuaCa', 'carouselLauThapCam'];
                
                // Tạo các nút điều khiển và đồng bộ các slide
                carouselIDs.forEach(carouselID => {
                    const carousel = document.getElementById(carouselID);
                    console.log($('#carouselTomNuong').carousel); // Should not be undefined
                
                    if (carousel) {
                        // Tạo nút "Previous"
                        const prevButton = document.createElement('a');
                        prevButton.classList.add('carousel-control-prev');
                        prevButton.href = `#${carouselID}`;
                        prevButton.setAttribute('role', 'button');
                        prevButton.setAttribute('data-slide', 'prev');
                        prevButton.innerHTML = `
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        `;
                        carousel.appendChild(prevButton);
                
                        // Tạo nút "Next"
                        const nextButton = document.createElement('a');
                        nextButton.classList.add('carousel-control-next');
                        nextButton.href = `#${carouselID}`;
                        nextButton.setAttribute('role', 'button');
                        nextButton.setAttribute('data-slide', 'next');
                        nextButton.innerHTML = `
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        `;
                        carousel.appendChild(nextButton);
                    }
                });
                
                // Hàm chuyển slide đồng bộ cho tất cả các carousels
                function syncCarousels() {
                    carouselIDs.forEach(id => {
                        const carouselElement = $(`#${id}`);
                        carouselElement.carousel('next');
                    });
                }
                
                // Thiết lập thời gian chuyển slide tự động (ví dụ 5 giây)
                const slideInterval = 5000; 
                
                // Bắt đầu đồng bộ chuyển slide
                setInterval(syncCarousels, slideInterval);
                // Mở modal và hiển thị ảnh
                function showImageModal(imgSrc) {
                    var modal = document.getElementById("imageModal");
                    var modalImg = document.getElementById("modalImage");
                
                    modal.style.display = "block";
                    modalImg.src = imgSrc;
                }
                
                // Đóng modal khi click ra ngoài ảnh hoặc vào nút X
                function closeModal() {
                    var modal = document.getElementById("imageModal");
                    modal.style.display = "none";
                }
                
                // Thêm sự kiện cho modal để đóng khi click bên ngoài ảnh
                document.getElementById("imageModal").addEventListener("click", function(event) {
                    if (event.target === this) {
                        closeModal();
                    }
                });
                
                // Thêm sự kiện cho từng ảnh trong carousel
                document.querySelectorAll('.carousel-inner img').forEach(function(img) {
                    img.addEventListener('click', function() {
                        showImageModal(this.src);
                    });
                });
                
/* Hết js của trang sản phẩm */