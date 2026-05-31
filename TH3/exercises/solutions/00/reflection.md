# Reflection

1. Ở phần A, mỗi lần thêm/xóa/toggle todo, bạn phải tự cập nhật mảng `todos` rồi gọi `renderTodos()`. Tức là ít nhất phải đi qua 2 bước: sửa dữ liệu và render lại.

2. Ở phần B, khi `setTodos(...)` chạy, React cập nhật state rồi tự re-render component để UI đổi theo dữ liệu mới.

3. Với 50 project, React an toàn và dễ bảo trì hơn vì bạn chỉ cần quản lý dữ liệu trong state, còn giao diện được render từ `.map()` và `.filter()`.

4. Với Portfolio, `useState` giữ danh sách project, `.map()` dùng để render `ProjectCard`, và `.filter()` dùng để lọc theo category hoặc trạng thái.
