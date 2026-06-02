 Vercel
Demo: https://test-lequangnam-109.vercel.app

Play/Pause Logic
Để tối ưu trải nghiệm người dùng và hiệu năng, ứng dụng sử dụng Intersection Observer API thay vì lắng nghe sự kiện `scroll` liên tục.

Mỗi video được gắn một IntersectionObserver với threshold: 0.7. Khi video nằm trong viewport từ 70% trở lên, video sẽ tự động phát. Khi video ra khỏi vùng hiển thị, video sẽ tự động tạm dừng. Nhờ đó tại một thời điểm chỉ có video đang được xem hoạt động.

Bên cạnh tính năng tự động phát/dừng,  có thể nhấn trực tiếp vào video để Play hoặc Pause theo nhu cầu.