# เว็บไซต์สถาบัน 69 House Tutor (Official Website)

เว็บไซต์ประชาสัมพันธ์สถาบันสอนพิเศษ **69 House Tutor** ที่มีดีไซน์ทันสมัย (Modern Creative Technology) ใช้งานง่าย รองรับทั้ง Desktop, Tablet และ Mobile พร้อมทั้งระบบแนะนำหลักสูตร 4 ด้าน แกลเลอรีผลงานนักเรียน และช่องทางติดต่อสมัครเรียนผ่าน Facebook Page ทางการ

---

## 🚀 วิธีการเปิดใช้งานและทดสอบ (2 ทางเลือก)

### ทางเลือกที่ 1: เปิดใช้งานและทดสอบได้ทันที (Zero Setup)
ไม่ต้องติดตั้งซอฟต์แวร์หรือ Node.js เพิ่มเติม สามารถดับเบิลคลิกไฟล์:
- 📄 **`standalone.html`**

เปิดผ่านเบราว์เซอร์ใดก็ได้ (Google Chrome, Microsoft Edge, Firefox, Safari) เพื่อดูหน้าเว็บจริงที่มีฟังก์ชันครบถ้วนทุกประการ:
- ✅ **Hero Section** โฉมใหม่ สื่อถึงทักษะแห่งอนาคต พร้อมกล่องจำลอง Interactive Future Skills
- ✅ **การ์ดหลักสูตร 4 หมวดหมู่** มีภาพประกอบ SVG 3D และเนื้อหาเฉพาะด้านที่แตกต่างกัน
- ✅ **Hover Effect & Micro-interactions** นุ่มนวล ไม่รบกวนสายตา พร้อมรองรับ `prefers-reduced-motion`
- ✅ **Responsive Design** แสดงผลสมบูรณ์ทั้งบนมือถือ แท็บเล็ต (iPad/Android) และเดสก์ท็อป
- ✅ **ระบบ FAQ แบบ Accordion** และเครื่องมือช่วยร่างข้อความ Quick Inquiry
- ✅ **ลิงก์และปุ่มติดต่อ Facebook** เชื่อมต่อไปยัง [https://www.facebook.com/69HouseTutor](https://www.facebook.com/69HouseTutor) ได้จริงทุกจุด

---

### ทางเลือกที่ 2: รันด้วย React + Vite + TypeScript (เมื่อมี Node.js)
หากเครื่องคอมพิวเตอร์มีการติดตั้ง [Node.js](https://nodejs.org/) (LTS Version):

1. เปิด Terminal หรือ PowerShell ในโฟลเดอร์นี้:
   ```bash
   cd c:\Users\PC00148\Desktop\69house
   ```
2. ติดตั้ง Dependencies:
   ```bash
   npm install
   ```
3. รัน Development Server:
   ```bash
   npm run dev
   ```
4. เปิดเบราว์เซอร์ไปที่ `http://localhost:3000`

5. สำหรับ Build เป็นไฟล์ Production พร้อมขึ้นโฮสติ้ง:
   ```bash
   npm run build
   ```
   ไฟล์ผลลัพธ์จะอยู่ในโฟลเดอร์ `dist/`

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```text
69house/
├── standalone.html            # หน้าเว็บพร้อมรันได้ทันทีโดยไม่ต้องใช้ Node.js
├── index.html                 # HTML Entry สำหรับ Vite
├── package.json               # รายการ Dependencies (React, Lucide, Tailwind, Vite)
├── vite.config.ts             # การตั้งค่า Vite (Port 3000, React Plugin)
├── tsconfig.json              # การตั้งค่า TypeScript (Bundler mode, Strict type-checking)
├── tailwind.config.js         # ธีมสีน้ำเงิน-ม่วง-ฟ้า, ฟอนต์ Prompt/Kanit, แอนิเมชัน
├── postcss.config.js          # การตั้งค่า PostCSS สำหรับ Tailwind CSS
├── README.md                  # เอกสารสรุปโปรเจกต์และวิธีใช้งาน
└── src/
    ├── main.tsx               # จุดเริ่มต้นของ React Root
    ├── App.tsx                # ประกอบ Components ทั้งหมดของ Landing Page
    ├── index.css              # สไตล์ Tailwind, Custom Glassmorphism และ Accessibility
    ├── types/
    │   └── index.ts           # Types Definition รองรับภาพประกอบและรายละเอียดเฉพาะคอร์ส
    ├── data/                  # 💡 โฟลเดอร์สำหรับแก้ไขข้อมูลได้อย่างสะดวก
    │   ├── coursesData.ts     # ข้อมูลหลักสูตร 4 หมวดหมู่ และลิงก์ Facebook
    │   ├── faqData.ts         # คำถามที่พบบ่อย (Accordion FAQ)
    │   ├── showcaseData.ts    # ตัวอย่างผลงานนักเรียน
    │   ├── featuresData.ts    # จุดเด่นการเรียนรู้ (4 เสาหลัก)
    │   ├── stepsData.ts       # 4 ขั้นตอนการสมัครเรียน
    │   └── contactData.ts     # ข้อมูลการติดต่อและ Placeholders
    └── components/            # ส่วนประกอบ UI ที่แยกเป็นโมดูล
        ├── Navbar.tsx         # ส่วนหัวและเมนูนำทาง (Sticky & รองรับทั้ง Tablet/Mobile)
        ├── HeroSection.tsx    # ส่วนเปิดหัวพร้อม Interactive Future Skills Simulator
        ├── CourseIllustrations.tsx # ภาพประกอบ SVG 3D โฉมใหม่สำหรับ 4 คอร์ส
        ├── CoursesSection.tsx # การ์ดหลักสูตร 4 หมวดหมู่ พร้อมภาพและเนื้อหาเฉพาะด้าน
        ├── FeaturesSection.tsx# จุดเด่นการเรียนรู้ Hands-on
        ├── ShowcaseSection.tsx# แกลเลอรีผลงานและหน้าต่างดูรายละเอียด
        ├── StepsSection.tsx   # ขั้นตอนการสมัครเรียน 1-4
        ├── FaqSection.tsx     # FAQ แบบเปิด-ปิดคำตอบได้
        ├── ContactSection.tsx # ช่องทางติดต่อ Facebook Page และเครื่องมือช่วยร่างข้อความ
        ├── Footer.tsx         # ลิงก์ท้ายหน้าและข้อมูลลิขสิทธิ์
        └── FloatingMessenger.tsx # ปุ่มลอยแชท Facebook มุมขวาล่าง
```

---

## 🎨 การปรับแต่งและการแก้ไขข้อมูลในอนาคต

- **แก้ไขข้อมูลหลักสูตร:** แก้ไขที่ [`src/data/coursesData.ts`](file:///c:/Users/PC00148/Desktop/69house/src/data/coursesData.ts)
- **แก้ไขหรือเพิ่มคำถาม FAQ:** แก้ไขที่ [`src/data/faqData.ts`](file:///c:/Users/PC00148/Desktop/69house/src/data/faqData.ts)
- **เปลี่ยนภาพผลงานนักเรียน:** แก้ไขที่ [`src/data/showcaseData.ts`](file:///c:/Users/PC00148/Desktop/69house/src/data/showcaseData.ts)
- **เปลี่ยนลิงก์ Facebook Page:** แก้ไขค่า `FACEBOOK_PAGE_URL` ใน `src/data/coursesData.ts` (ค่าเริ่มต้น: `https://www.facebook.com/69HouseTutor`)
