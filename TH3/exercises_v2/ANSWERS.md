# Đáp án gợi ý — React Basics Exercises v2

File này gom các câu hỏi và thử thách trong Tier 0 đến Tier 6 thành lời giải ngắn gọn, theo đúng thứ tự bài học.

---

## Tier 0

### Câu 1: File `.jsx` khác gì file `.js`?

`.jsx` là file JavaScript có chứa JSX, tức cú pháp giống HTML để viết component React. Về bản chất nó vẫn là JavaScript, nhưng công cụ build sẽ hiểu và xử lý JSX đúng cách. File `.js` vẫn có thể chứa React code, nhưng `.jsx` giúp nhìn vào là biết ngay đây là component.

### Câu 2: Tại sao phải `export default App`?

Vì `export default` cho phép file khác import component đó theo tên bất kỳ, ví dụ `import App from './App'`. Với React, `App` thường là component gốc được render ở `main.jsx`, nên cần export nó ra để dùng được ở file khác.

### Câu 3: Thử xóa `export default` thì chuyện gì xảy ra?

File vẫn có thể chạy nội bộ, nhưng khi `main.jsx` hoặc file khác import `App` theo kiểu default import thì sẽ báo lỗi: không tìm thấy export mặc định.

### Bài 0.2 — `UserProfile`

```jsx
function UserProfile() {
    return (
        <div className="profile">
            <h1>Hồ sơ cá nhân</h1>
            <img src="photo.jpg" alt="Ảnh đại diện" />
            <table>
                <tbody>
                    <tr>
                        <td>Họ tên:</td>
                        <td>Minh</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>minh@example.com</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default UserProfile;
```

### Bài 0.2 — `ProductInfo`

```jsx
function ProductInfo() {
    return (
        <div className="product">
            <h2>iPhone 15</h2>
            <p className="price">25.000.000đ</p>
            <ul>
                <li>Màn hình: 6.1 inch</li>
                <li>Camera: 48MP</li>
                <li>Pin: 3349 mAh</li>
            </ul>
            <button>Mua ngay</button>
        </div>
    );
}

export default ProductInfo;
```

---

## Tier 1

### Câu 1: Tại sao component chỉ render 1 lần?

Vì lúc đầu React chỉ gọi component khi mount. Nếu không có state, props, hoặc dữ liệu liên quan thay đổi thì component không có lý do để render lại.

### Câu 2: Khi nào nó sẽ render lại?

Khi state thay đổi bằng `setState`, khi props từ component cha thay đổi, khi context thay đổi, hoặc khi component cha render lại và kéo theo component con render lại.

### Gợi ý kiểm tra nhanh

Nếu dùng `useState`, chỉ cần gọi hàm cập nhật state là React sẽ re-render component.

---

## Tier 2

### Bài 2.1 — Hiển thị thông tin cá nhân

```jsx
function PersonalInfo() {
    const ten = "Nguyễn Văn Minh";
    const tuoi = 20;
    const queQuan = "Hà Nội";

    return (
        <div style={{ padding: "20px" }}>
            <h1>Thông tin cá nhân</h1>
            <p>Tên: {ten}</p>
            <p>Tuổi: {tuoi}</p>
            <p>Quê quán: {queQuan}</p>
        </div>
    );
}

export default PersonalInfo;
```

### Bài 2.1 — Chào buổi sáng/chiều/tối

```jsx
function GreetingByTime() {
    const currentHour = new Date().getHours();

    const greeting =
        currentHour < 12 ? "Chào buổi sáng" :
        currentHour < 18 ? "Chào buổi chiều" :
        "Chào buổi tối";

    return <h1>{greeting}</h1>;
}

export default GreetingByTime;
```

### Bài 2.1 — Tính BMI

```jsx
function BmiResult() {
    const canNang = 60;
    const chieuCao = 1.7;
    const bmi = canNang / (chieuCao * chieuCao);

    return (
        <div>
            <p>BMI: {bmi.toFixed(2)}</p>
            <p>
                {bmi < 18.5 ? "Thiếu cân" : bmi < 25 ? "Bình thường" : "Thừa cân"}
            </p>
        </div>
    );
}

export default BmiResult;
```

### Bài 2.2 — Icon online/offline

```jsx
function OnlineStatus() {
    const isOnline = true;

    return <p>{isOnline ? "🟢 Online" : "🔴 Offline"}</p>;
}

export default OnlineStatus;
```

### Bài 2.2 — Hiện/ẩn menu dựa vào `isLoggedIn`

```jsx
function AuthMenu() {
    const isLoggedIn = true;

    return (
        <div>
            {isLoggedIn ? (
                <nav>
                    <a href="/profile">Hồ sơ</a>
                    <a href="/settings">Cài đặt</a>
                </nav>
            ) : (
                <p>Vui lòng đăng nhập</p>
            )}
        </div>
    );
}

export default AuthMenu;
```

### Bài 2.2 — Hiển thị “Hết hàng” khi `stock = 0`

```jsx
function StockBadge() {
    const stock = 0;

    return <p>{stock === 0 ? "Hết hàng" : `Còn ${stock} sản phẩm`}</p>;
}

export default StockBadge;
```

### Bài 2.3 — Render 5 sản phẩm, tô đỏ giá trên 1 triệu, tính tổng

```jsx
function ProductList() {
    const products = [
        { id: 1, name: "Bàn phím", price: 450000 },
        { id: 2, name: "Màn hình", price: 3200000 },
        { id: 3, name: "Chuột", price: 250000 },
        { id: 4, name: "Laptop", price: 18000000 },
        { id: 5, name: "Tai nghe", price: 850000 }
    ];

    const total = products.reduce((sum, product) => sum + product.price, 0);

    return (
        <div>
            <h2>Danh sách sản phẩm</h2>
            <ul>
                {products.map(product => (
                    <li
                        key={product.id}
                        style={{ color: product.price > 1000000 ? "red" : "black" }}
                    >
                        {product.name} - {product.price.toLocaleString("vi-VN")}đ
                    </li>
                ))}
            </ul>
            <p>Tổng giá: {total.toLocaleString("vi-VN")}đ</p>
        </div>
    );
}

export default ProductList;
```

---

## Tier 3

### Bài tập 1 — `ProductCard.jsx`

```jsx
function ProductCard({ name, price, image }) {
    return (
        <div style={{
            border: "1px solid #ddd",
            borderRadius: "8px",
            padding: "15px",
            margin: "10px",
            width: "220px"
        }}>
            <img src={image} alt={name} style={{ width: "100%", borderRadius: "4px" }} />
            <h3>{name}</h3>
            <p style={{ color: "#e74c3c", fontWeight: "bold" }}>{price}đ</p>
            <button style={{
                background: "#3498db",
                color: "white",
                border: "none",
                padding: "8px 16px",
                borderRadius: "4px"
            }}>
                Thêm vào giỏ
            </button>
        </div>
    );
}

export default ProductCard;
```

### Bài tập 1 — `App.jsx`

```jsx
import ProductCard from "./components/ProductCard";

function App() {
    const products = [
        { id: 1, name: "iPhone 15", price: "25.000.000", image: "https://via.placeholder.com/200" },
        { id: 2, name: "Samsung S24", price: "22.000.000", image: "https://via.placeholder.com/200" },
        { id: 3, name: "Xiaomi 14", price: "15.000.000", image: "https://via.placeholder.com/200" }
    ];

    return (
        <div>
            <h1 style={{ textAlign: "center" }}>Cửa hàng điện thoại</h1>
            <div style={{ display: "flex", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        name={product.name}
                        price={product.price}
                        image={product.image}
                    />
                ))}
            </div>
        </div>
    );
}

export default App;
```

### Bài tập 2 — `Header.jsx`

```jsx
function Header() {
    return (
        <header style={{ padding: "16px", borderBottom: "1px solid #ddd" }}>
            <h1>Trang web của tôi</h1>
            <nav style={{ display: "flex", gap: "12px" }}>
                <a href="/">Trang chủ</a>
                <a href="/about">Giới thiệu</a>
                <a href="/contact">Liên hệ</a>
            </nav>
        </header>
    );
}

export default Header;
```

### Bài tập 2 — `Footer.jsx`

```jsx
function Footer() {
    return (
        <footer style={{ padding: "16px", borderTop: "1px solid #ddd", marginTop: "24px" }}>
            <p>© 2026 Tên công ty</p>
        </footer>
    );
}

export default Footer;
```

### Bài tập 2 — `App.jsx`

```jsx
import Header from "./components/Header";
import Footer from "./components/Footer";
import ProductCard from "./components/ProductCard";

function App() {
    const products = [
        { id: 1, name: "Laptop", price: "18.000.000", image: "https://via.placeholder.com/200" },
        { id: 2, name: "Tablet", price: "9.000.000", image: "https://via.placeholder.com/200" }
    ];

    return (
        <div>
            <Header />
            <main style={{ padding: "24px" }}>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                    {products.map(product => (
                        <ProductCard key={product.id} {...product} />
                    ))}
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default App;
```

### Bài tập 3 — `UserCard`

```jsx
function UserCard({ name, email, avatar }) {
    return (
        <div style={{ border: "1px solid #ddd", padding: "16px", borderRadius: "8px" }}>
            <img src={avatar} alt={name} style={{ width: "80px", height: "80px", borderRadius: "50%" }} />
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    );
}

export default UserCard;
```

### Bài tập 3 — `PriceTag`

```jsx
function PriceTag({ originalPrice, salePrice }) {
    return (
        <div>
            <p style={{ textDecoration: "line-through", color: "#888" }}>{originalPrice}đ</p>
            <p style={{ color: "#e74c3c", fontWeight: "bold" }}>{salePrice}đ</p>
        </div>
    );
}

export default PriceTag;
```

---

## Tier 4

### Bài 4.1 — Nút “Tăng 5”, phân loại số dương/âm, đổi màu

```jsx
import { useState } from "react";

function NumberStateChallenge() {
    const [count, setCount] = useState(0);

    const color = count > 0 ? "green" : count < 0 ? "red" : "black";
    const status = count > 0 ? "Số dương" : count < 0 ? "Số âm" : "Bằng 0";

    return (
        <div style={{ textAlign: "center", padding: "20px", color }}>
            <h2>Bộ đếm: {count}</h2>
            <p>{status}</p>
            <button onClick={() => setCount(count + 1)}>Tăng (+1)</button>
            <button onClick={() => setCount(count - 1)}>Giảm (-1)</button>
            <button onClick={() => setCount(count + 5)}>Tăng 5</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default NumberStateChallenge;
```

### Bài 4.2 — Đếm ký tự, kiểm tra email, hiện/ẩn mật khẩu

```jsx
import { useState } from "react";

function StringStateChallenge() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div style={{ padding: "20px" }}>
            <div>
                <label>Tên: </label>
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <p>{name.length}/100 ký tự</p>
            </div>

            <div>
                <label>Email: </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
                <p style={{ color: email.includes("@") ? "green" : "red" }}>
                    {email.includes("@") ? "Email hợp lệ" : "Email chưa hợp lệ"}
                </p>
            </div>

            <div>
                <label>Mật khẩu: </label>
                <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? "Ẩn" : "Hiện"}
                </button>
            </div>
        </div>
    );
}

export default StringStateChallenge;
```

### Bài 4.3 — Hiện/ẩn mật khẩu, accordion, bật/tắt bóng đèn

```jsx
import { useState } from "react";

function BooleanStateChallenge() {
    const [showPassword, setShowPassword] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isOn, setIsOn] = useState(false);

    return (
        <div style={{ padding: "20px" }}>
            <input type={showPassword ? "text" : "password"} placeholder="Mật khẩu" />
            <button onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
            </button>

            <hr />

            <div>
                <h3 onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer" }}>
                    Câu hỏi thường gặp
                </h3>
                {isOpen && <p>Nội dung accordion ở đây.</p>}
            </div>

            <hr />

            <button onClick={() => setIsOn(!isOn)}>
                {isOn ? "💡 Bật" : "🔌 Tắt"}
            </button>
        </div>
    );
}

export default BooleanStateChallenge;
```

### Bài 4.4 — Thêm email, validate tuổi, chào tên

```jsx
import { useState } from "react";

function MultipleStatesChallenge() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit() {
        const ageNumber = Number(age);

        if (name.trim() === "" || email.trim() === "" || age === "") return;
        if (ageNumber <= 0 || ageNumber >= 100) return;

        setSubmitted(true);
    }

    return (
        <div style={{ padding: "20px" }}>
            {!submitted ? (
                <div>
                    <input placeholder="Tên" value={name} onChange={(e) => setName(e.target.value)} />
                    <input placeholder="Tuổi" type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                    <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <button onClick={handleSubmit}>Đăng ký</button>
                </div>
            ) : (
                <h3>Xin chào {name}!</h3>
            )}
        </div>
    );
}

export default MultipleStatesChallenge;
```

---

## Tier 5

### Bài 5.1 — Đổi màu ngẫu nhiên, đếm riêng từng nút, like toggle

```jsx
import { useState } from "react";

function ClickChallenge() {
    const [boxColor, setBoxColor] = useState("#f0f0f0");
    const [countA, setCountA] = useState(0);
    const [countB, setCountB] = useState(0);
    const [liked, setLiked] = useState(false);

    function randomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i += 1) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    return (
        <div style={{ padding: "20px" }}>
            <div style={{ background: boxColor, padding: "20px", marginBottom: "12px" }}>
                Box màu ngẫu nhiên
            </div>
            <button onClick={() => setBoxColor(randomColor())}>Đổi màu ngẫu nhiên</button>

            <hr />

            <button onClick={() => setCountA(countA + 1)}>Nút A: {countA}</button>
            <button onClick={() => setCountB(countB + 1)}>Nút B: {countB}</button>

            <hr />

            <button onClick={() => setLiked(!liked)}>{liked ? "❤️ Đã thích" : "🤍 Thích"}</button>
        </div>
    );
}

export default ClickChallenge;
```

### Bài 5.2 — Email validation, preview, đếm số từ

```jsx
import { useState } from "react";

function InputChallenge() {
    const [email, setEmail] = useState("");
    const [text, setText] = useState("");

    const wordCount = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

    return (
        <div style={{ padding: "20px" }}>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nhập email"
            />
            <p style={{ color: email.includes("@") ? "green" : "red" }}>
                {email.includes("@") ? "Email hợp lệ" : "Email chưa hợp lệ"}
            </p>

            <input
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Nhập nội dung..."
            />
            <p>Preview: {text || "(chưa nhập)"}</p>
            <p>Số từ: {wordCount}</p>
        </div>
    );
}

export default InputChallenge;
```

### Bài 5.3 — Game đoán phím, di chuyển ô vuông, Ctrl+D đổi nền

```jsx
import { useEffect, useState } from "react";

function KeyboardChallenge() {
    const [targetKey] = useState("Enter");
    const [message, setMessage] = useState("Nhấn Enter để thắng");
    const [position, setPosition] = useState({ x: 100, y: 100 });
    const [dark, setDark] = useState(false);

    useEffect(() => {
        function handleWindowKeyDown(event) {
            if (event.ctrlKey && event.key.toLowerCase() === "d") {
                event.preventDefault();
                setDark(prev => !prev);
            }

            if (event.key === targetKey) {
                setMessage("Bạn thắng rồi!");
            }

            if (event.key === "ArrowUp") setPosition(prev => ({ ...prev, y: prev.y - 10 }));
            if (event.key === "ArrowDown") setPosition(prev => ({ ...prev, y: prev.y + 10 }));
            if (event.key === "ArrowLeft") setPosition(prev => ({ ...prev, x: prev.x - 10 }));
            if (event.key === "ArrowRight") setPosition(prev => ({ ...prev, x: prev.x + 10 }));
        }

        window.addEventListener("keydown", handleWindowKeyDown);
        return () => window.removeEventListener("keydown", handleWindowKeyDown);
    }, [targetKey]);

    return (
        <div style={{
            padding: "20px",
            minHeight: "300px",
            background: dark ? "#222" : "#fff",
            color: dark ? "#fff" : "#000"
        }}>
            <p>{message}</p>
            <div style={{ position: "relative", width: "300px", height: "200px", border: "1px solid #999" }}>
                <div style={{
                    position: "absolute",
                    left: position.x,
                    top: position.y,
                    width: "30px",
                    height: "30px",
                    background: "tomato"
                }} />
            </div>
        </div>
    );
}

export default KeyboardChallenge;
```

### Bài 5.4 — Email validation, xác nhận mật khẩu, lỗi realtime

```jsx
import { useState } from "react";

function FormChallenge() {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    });

    const emailError = formData.email !== "" && !formData.email.includes("@");
    const passwordError = formData.confirmPassword !== "" && formData.password !== formData.confirmPassword;

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (emailError || passwordError) return;
        alert("Gửi form thành công");
    }

    return (
        <form onSubmit={handleSubmit} style={{ padding: "20px" }}>
            <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
            />
            {emailError && <p style={{ color: "red" }}>Email phải có @</p>}

            <input
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Mật khẩu"
            />

            <input
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Xác nhận mật khẩu"
            />
            {passwordError && <p style={{ color: "red" }}>Mật khẩu không khớp</p>}

            <button type="submit">Gửi</button>
        </form>
    );
}

export default FormChallenge;
```

---

## Tier 6

### Bài 6.1 — STT, tô màu xanh, tuổi trung bình

```jsx
import { useState } from "react";

function ListBasicsChallenge() {
    const [students] = useState([
        { id: 1, name: "Minh", age: 20 },
        { id: 2, name: "An", age: 21 },
        { id: 3, name: "Linh", age: 19 }
    ]);

    const averageAge = students.reduce((sum, student) => sum + student.age, 0) / students.length;

    return (
        <div style={{ padding: "20px" }}>
            {students.map((student, index) => (
                <div
                    key={student.id}
                    style={{ color: student.age >= 20 ? "green" : "black" }}
                >
                    {index + 1}. {student.name} - {student.age} tuổi
                </div>
            ))}
            <p>Tuổi trung bình: {averageAge.toFixed(1)}</p>
        </div>
    );
}

export default ListBasicsChallenge;
```

### Bài 6.2 — Không cho thêm trống, báo thành công, focus lại input

```jsx
import { useRef, useState } from "react";

function CreateItemChallenge() {
    const [items, setItems] = useState([{ id: 1, name: "HTML" }, { id: 2, name: "CSS" }]);
    const [newName, setNewName] = useState("");
    const [message, setMessage] = useState("");
    const inputRef = useRef(null);

    function handleAdd() {
        if (newName.trim() === "") return;

        setItems([...items, { id: Date.now(), name: newName }]);
        setNewName("");
        setMessage("Đã thêm thành công!");
        inputRef.current?.focus();
    }

    return (
        <div style={{ padding: "20px" }}>
            <input
                ref={inputRef}
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleAdd()}
                placeholder="Nhập tên môn học..."
            />
            <button onClick={handleAdd}>Thêm</button>
            <p>{message}</p>
            {items.map(item => <div key={item.id}>{item.name}</div>)}
        </div>
    );
}

export default CreateItemChallenge;
```

### Bài 6.3 — Hiển thị tên đã xóa, hoàn tác, confirm trước khi xóa

```jsx
import { useRef, useState } from "react";

function DeleteItemChallenge() {
    const [items, setItems] = useState([
        { id: 1, name: "Minh" },
        { id: 2, name: "An" },
        { id: 3, name: "Linh" }
    ]);
    const [deletedItem, setDeletedItem] = useState(null);
    const undoTimerRef = useRef(null);

    function handleDelete(item) {
        if (!window.confirm(`Xóa ${item.name}?`)) return;

        setItems(prev => prev.filter(current => current.id !== item.id));
        setDeletedItem(item);

        clearTimeout(undoTimerRef.current);
        undoTimerRef.current = setTimeout(() => setDeletedItem(null), 5000);
    }

    function handleUndo() {
        if (!deletedItem) return;

        setItems(prev => [...prev, deletedItem]);
        setDeletedItem(null);
        clearTimeout(undoTimerRef.current);
    }

    return (
        <div style={{ padding: "20px" }}>
            {deletedItem && (
                <div>
                    <p>Đã xóa {deletedItem.name}</p>
                    <button onClick={handleUndo}>Hoàn tác</button>
                </div>
            )}

            {items.map(item => (
                <div key={item.id}>
                    {item.name}
                    <button onClick={() => handleDelete(item)}>Xóa</button>
                </div>
            ))}
        </div>
    );
}

export default DeleteItemChallenge;
```

### Bài 6.4 — Highlight input đang sửa, không cho lưu trống, báo đã lưu

```jsx
import { useState } from "react";

function UpdateItemChallenge() {
    const [items, setItems] = useState([
        { id: 1, name: "Minh", age: 20 },
        { id: 2, name: "An", age: 21 }
    ]);
    const [editingId, setEditingId] = useState(null);
    const [editName, setEditName] = useState("");
    const [editAge, setEditAge] = useState("");
    const [savedMessage, setSavedMessage] = useState("");

    function startEdit(item) {
        setEditingId(item.id);
        setEditName(item.name);
        setEditAge(String(item.age));
        setSavedMessage("");
    }

    function saveEdit() {
        if (editName.trim() === "") return;

        setItems(prev => prev.map(item => (
            item.id === editingId
                ? { ...item, name: editName, age: Number(editAge) }
                : item
        )));

        setEditingId(null);
        setSavedMessage("Đã lưu!");
    }

    return (
        <div style={{ padding: "20px" }}>
            <p>{savedMessage}</p>
            {items.map(item => (
                <div key={item.id} style={{ marginBottom: "8px" }}>
                    {editingId === item.id ? (
                        <div>
                            <input
                                value={editName}
                                onChange={(e) => setEditName(e.target.value)}
                                style={{ border: "2px solid #3498db" }}
                            />
                            <input
                                type="number"
                                value={editAge}
                                onChange={(e) => setEditAge(e.target.value)}
                                style={{ border: "2px solid #3498db" }}
                            />
                            <button onClick={saveEdit}>Lưu</button>
                        </div>
                    ) : (
                        <div>
                            {item.name} - {item.age} tuổi
                            <button onClick={() => startEdit(item)}>Sửa</button>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}

export default UpdateItemChallenge;
```

---

Nếu bạn muốn, tôi có thể tách file này thành từng file lời giải riêng theo từng Tier để bạn học và đối chiếu dễ hơn.