<html lang="th">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>ระบบฐานข้อมูลแหล่งเรียนรู้ท้องถิ่น</title>

    <!-- TailwindCSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>

    <!-- ฟอนต์ Sarabun -->
    <link
      href="https://fonts.googleapis.com/css2?family=Sarabun:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />

    <!-- กำหนดธีมสี/ฟอนต์ ให้เหมือนโปรเจ็กต์เดิม -->
    <script>
      tailwind.config = {
        theme: {
          extend: {
            fontFamily: {
              sans: ["Sarabun", "sans-serif"],
            },
            colors: {
              "thai-primary": "#00695c", // Teal 800
              "thai-secondary": "#ffca28", // Amber 400
              "thai-accent": "#e0f2f1", // Teal 50
              "ministry-orange": "#f57c00",
            },
          },
        },
      };
    </script>

    <style>
      body {
        font-family: "Sarabun", sans-serif;
        background-color: #f3f4f6;
      }
    </style>
  </head>

  <body class="min-h-screen flex flex-col bg-gray-50">
    <!-- Header -->
    <header class="bg-thai-primary shadow-lg text-white sticky top-0 z-50">
      <div
        class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between"
      >
        <div class="flex items-center space-x-4">
          <div
            class="bg-white/10 p-2.5 rounded-lg backdrop-blur-sm border border-white/20"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-thai-secondary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 14l9-5-9-5-9 5 9 5z" />
              <path
                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
              />
            </svg>
          </div>
          <div>
            <h1 class="text-xl md:text-2xl font-bold leading-tight">
              ระบบฐานข้อมูลแหล่งเรียนรู้ท้องถิ่น
            </h1>
            <p class="text-sm text-teal-100 font-medium opacity-90">
              เชื่อมโยงมาตรฐาน/ตัวชี้วัด หลักสูตรแกนกลางการศึกษาขั้นพื้นฐาน
            </p>
          </div>
        </div>
      </div>
    </header>

    <!-- Main -->
    <main
      class="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full"
    >
      <!-- ฟอร์มค้นหา -->
      <section
        class="bg-white rounded-xl shadow-md border border-gray-200 p-6 mb-8"
      >
        <h2 class="text-lg font-semibold text-gray-800 mb-4">
          ค้นหาแหล่งเรียนรู้ท้องถิ่น
        </h2>

        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-4 items-end"
        >
          <!-- จังหวัด -->
          <div>
            <label
              for="province"
              class="block text-sm font-medium text-gray-700 mb-1"
              >จังหวัด</label
            >
            <select
              id="province"
              class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-thai-primary focus:border-thai-primary text-sm"
            >
              <option value="">-- เลือกจังหวัด --</option>
            </select>
          </div>

          <!-- อำเภอ/เขต -->
          <div>
            <label
              for="district"
              class="block text-sm font-medium text-gray-700 mb-1"
              >อำเภอ/เขต (ไม่บังคับ)</label
            >
            <input
              id="district"
              type="text"
              placeholder="เช่น บางเขน, เมืองเชียงใหม่"
              class="mt-1 block w-full rounded-lg border-gray-300 shadow-sm focus:ring-thai-primary focus:border-thai-primary text-sm"
            />
          </div>

          <!-- ปุ่มค้นหา -->
          <div class="flex md:justify-end">
            <button
              id="searchBtn"
              class="inline-flex items-center justify-center w-full md:w-auto px-6 py-2.5 rounded-lg bg-thai-primary text-white text-sm font-medium shadow hover:bg-emerald-700 transition"
            >
              <svg
                class="h-4 w-4 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 16l4-4-4-4m5 8h3a2 2 0 002-2V6a2 2 0 00-2-2h-3"
                />
              </svg>
              ค้นหา
            </button>
          </div>
        </div>
      </section>

      <!-- พื้นที่แสดงผล -->
      <section id="resultsContainer">
        <!-- จะถูกเติมด้วย JavaScript ด้านล่าง -->
      </section>

      <!-- สถานะเริ่มต้น (ก่อนค้นหา) -->
      <section
        id="initialState"
        class="text-center py-20 px-4"
      >
        <h2
          class="text-3xl md:text-4xl font-bold text-gray-800 mb-6 tracking-tight"
        >
          ค้นหาแหล่งเรียนรู้
          <span class="text-thai-primary">ใกล้ตัวคุณ</span>
        </h2>
        <p
          class="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          ระบบตัวอย่างนี้ช่วยให้ครูและนักเรียนสามารถสำรวจแหล่งเรียนรู้ในชุมชน
          และเชื่อมโยงกับสาระการเรียนรู้/มาตรฐานของหลักสูตรแกนกลางฯ
          เพื่อออกแบบการเรียนรู้ที่สอดคล้องกับบริบทพื้นที่
        </p>
      </section>
    </main>

    <!-- Footer -->
    <footer
      class="bg-gray-800 text-gray-400 py-8 mt-auto border-t border-gray-700"
    >
      <div class="max-w-7xl mx-auto px-4 text-center">
        <p class="text-sm font-light">
          ©
          <span id="yearSpan"></span>
          ระบบฐานข้อมูลแหล่งเรียนรู้ท้องถิ่นเพื่อการศึกษาไทย
        </p>
        <p class="text-xs text-gray-500 mt-2">
          ตัวอย่างเว็บสำหรับใช้งานบน GitHub Pages (Static HTML + TailwindCSS)
        </p>
      </div>
    </footer>

    <!-- JavaScript ส่วนการทำงาน -->
    <script>
      // -------------------------------
      // 1) ข้อมูลจังหวัด (นำมาจาก constants.ts เดิม)
      // -------------------------------
      const THAI_PROVINCES = [
        "กรุงเทพมหานคร",
        "กระบี่",
        "กาญจนบุรี",
        "กาฬสินธุ์",
        "กำแพงเพชร",
        "ขอนแก่น",
        "จันทบุรี",
        "ฉะเชิงเทรา",
        "ชลบุรี",
        "ชัยนาท",
        "ชัยภูมิ",
        "ชุมพร",
        "เชียงราย",
        "เชียงใหม่",
        "ตรัง",
        "ตราด",
        "ตาก",
        "นครนายก",
        "นครปฐม",
        "นครพนม",
        "นครราชสีมา",
        "นครศรีธรรมราช",
        "นครสวรรค์",
        "นนทบุรี",
        "นราธิวาส",
        "น่าน",
        "บึงกาฬ",
        "บุรีรัมย์",
        "ปทุมธานี",
        "ประจวบคีรีขันธ์",
        "ปราจีนบุรี",
        "ปัตตานี",
        "พระนครศรีอยุธยา",
        "พะเยา",
        "พังงา",
        "พัทลุง",
        "พิจิตร",
        "พิษณุโลก",
        "เพชรบุรี",
        "เพชรบูรณ์",
        "แพร่",
        "ภูเก็ต",
        "มหาสารคาม",
        "มุกดาหาร",
        "แม่ฮ่องสอน",
        "ยโสธร",
        "ยะลา",
        "ร้อยเอ็ด",
        "ระนอง",
        "ระยอง",
        "ราชบุรี",
        "ลพบุรี",
        "ลำปาง",
        "ลำพูน",
        "เลย",
        "ศรีสะเกษ",
        "สกลนคร",
        "สงขลา",
        "สตูล",
        "สมุทรปราการ",
        "สมุทรสงคราม",
        "สมุทรสาคร",
        "สระแก้ว",
        "สระบุรี",
        "สิงห์บุรี",
        "สุโขทัย",
        "สุพรรณบุรี",
        "สุราษฎร์ธานี",
        "สุรินทร์",
        "หนองคาย",
        "หนองบัวลำภู",
        "อ่างทอง",
        "อำนาจเจริญ",
        "อุดรธานี",
        "อุตรดิตถ์",
        "อุทัยธานี",
        "อุบลราชธานี",
      ];

      // เติม options จังหวัดใน select
      const provinceSelect = document.getElementById("province");
      THAI_PROVINCES.forEach((p) => {
        const opt = document.createElement("option");
        opt.value = p;
        opt.textContent = p;
        provinceSelect.appendChild(opt);
      });

      // -------------------------------
      // 2) ข้อมูลแหล่งเรียนรู้ตัวอย่าง (สามารถแก้/เติมเองได้)
      // -------------------------------
      const SAMPLE_RESOURCES = [
        {
          id: "1",
          name: "พิพิธภัณฑ์วิทยาศาสตร์ท้องถิ่น",
          province: "กรุงเทพมหานคร",
          district: "จตุจักร",
          description:
            "แหล่งเรียนรู้ด้านวิทยาศาสตร์และเทคโนโลยี จัดนิทรรศการหมุนเวียนตลอดปี",
          subjects: [
            "วิทยาศาสตร์และเทคโนโลยี",
            "คณิตศาสตร์",
          ],
          standards: [
            "ว 1.1 การสืบเสาะหาความรู้ทางวิทยาศาสตร์",
          ],
          tags: ["พิพิธภัณฑ์", "STEM", "ทัศนศึกษา"],
        },
        {
          id: "2",
          name: "ศูนย์การเรียนรู้เกษตรพอเพียงชุมชน",
          province: "สุพรรณบุรี",
          district: "เมืองสุพรรณบุรี",
          description:
            "แหล่งเรียนรู้เกษตรอินทรีย์ เศรษฐกิจพอเพียง และภูมิปัญญาท้องถิ่น",
          subjects: [
            "การงานอาชีพ",
            "สังคมศึกษา ศาสนา และวัฒนธรรม",
          ],
          standards: [
            "ส 3.1 เศรษฐกิจพอเพียง",
            "ง 1.1 การปลูกพืชและการเกษตร",
          ],
          tags: ["เกษตร", "เศรษฐกิจพอเพียง", "ภูมิปัญญาท้องถิ่น"],
        },
        {
          id: "3",
          name: "หอศิลปวัฒนธรรมประจำจังหวัด",
          province: "เชียงใหม่",
          district: "เมืองเชียงใหม่",
          description:
            "จัดแสดงศิลปะ วัฒนธรรม และประวัติศาสตร์ล้านนา เหมาะกับการเรียนรู้แบบบูรณาการ",
          subjects: ["ศิลปะ", "สังคมศึกษา ศาสนา และวัฒนธรรม"],
          standards: [
            "ศ 1.1 ทัศนศิลป์",
            "ส 4.1 ประวัติศาสตร์ท้องถิ่น",
          ],
          tags: ["ศิลปะ", "วัฒนธรรม", "ท้องถิ่น"],
        },
      ];

      // -------------------------------
      // 3) ฟังก์ชัน render การ์ดผลลัพธ์
      // -------------------------------
      const resultsContainer =
        document.getElementById("resultsContainer");
      const initialState = document.getElementById("initialState");

      function renderResults(items) {
        // ล้างของเดิม
        resultsContainer.innerHTML = "";

        // ถ้ายังไม่เคยค้นหาให้โชว์ initialState
        if (!items) {
          initialState.classList.remove("hidden");
          return;
        }

        // ซ่อน initialState เมื่อกดค้นหา
        initialState.classList.add("hidden");

        if (items.length === 0) {
          // ไม่พบข้อมูล
          const emptyBox = document.createElement("div");
          emptyBox.className =
            "text-center py-20 bg-white rounded-xl shadow-sm border border-dashed border-gray-300";
          emptyBox.innerHTML = `
            <div
              class="bg-gray-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                />
              </svg>
            </div>
            <p class="text-gray-600 text-lg font-medium">
              ไม่พบข้อมูลแหล่งเรียนรู้
            </p>
            <p class="text-gray-400 text-sm mt-1">
              ลองเปลี่ยนคำค้นหาอำเภอ หรือค้นหาเฉพาะระดับจังหวัด
            </p>
          `;
          resultsContainer.appendChild(emptyBox);
          return;
        }

        // ส่วนหัวบอกจำนวนผลลัพธ์
        const header = document.createElement("div");
        header.className =
          "flex items-center justify-between mb-6";
        header.innerHTML = `
          <h3
            class="text-lg font-semibold text-gray-700 border-l-4 border-thai-secondary pl-3"
          >
            ผลการค้นหา:
            <span class="text-thai-primary">${items.length}</span>
            รายการ
          </h3>
          <span
            class="text-xs text-gray-500 bg-white border border-gray-200 px-3 py-1 rounded-full shadow-sm"
          >
            Local Learning Resources
          </span>
        `;
        resultsContainer.appendChild(header);

        // Grid ของการ์ด
        const grid = document.createElement("div");
        grid.className =
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6";

        items.forEach((res) => {
          const card = document.createElement("article");
          card.className =
            "bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden flex flex-col";

          card.innerHTML = `
            <div class="bg-thai-accent px-4 py-3 border-b border-gray-200">
              <h4 class="font-semibold text-gray-800 text-base line-clamp-2">
                ${res.name}
              </h4>
              <p class="text-xs text-gray-600 mt-1">
                จังหวัด ${res.province} • อำเภอ/เขต ${res.district}
              </p>
            </div>
            <div class="p-4 flex flex-col gap-3 flex-grow">
              <p class="text-sm text-gray-700 leading-relaxed">
                ${res.description}
              </p>

              <div class="text-xs">
                <p class="font-semibold text-gray-700 mb-1">
                  สาระการเรียนรู้ที่เกี่ยวข้อง:
                </p>
                <p class="text-gray-600">
                  ${res.subjects.join(" • ")}
                </p>
              </div>

              <div class="text-xs">
                <p class="font-semibold text-gray-700 mb-1">
                  มาตรฐาน/ตัวชี้วัด (ตัวอย่าง):
                </p>
                <ul class="list-disc list-inside text-gray-600 space-y-0.5">
                  ${res.standards
                    .map((s) => `<li>${s}</li>`)
                    .join("")}
                </ul>
              </div>

              <div class="mt-1 flex flex-wrap gap-1.5">
                ${res.tags
                  .map(
                    (t) =>
                      `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full bg-thai-accent text-[11px] font-medium text-thai-primary border border-emerald-100">${t}</span>`
                  )
                  .join("")}
              </div>
            </div>
          `;

          grid.appendChild(card);
        });

        resultsContainer.appendChild(grid);
      }

      // -------------------------------
      // 4) Logic เมื่อกดปุ่มค้นหา
      // -------------------------------
      document
        .getElementById("searchBtn")
        .addEventListener("click", () => {
          const province =
            document.getElementById("province").value.trim();
          const district = document
            .getElementById("district")
            .value.trim();

          if (!province) {
            alert("กรุณาเลือกจังหวัดก่อนทำการค้นหา");
            return;
          }

          const filtered = SAMPLE_RESOURCES.filter((item) => {
            const matchProvince = item.province === province;
            const matchDistrict = district
              ? item.district
                  .toLowerCase()
                  .includes(district.toLowerCase())
              : true;
            return matchProvince && matchDistrict;
          });

          renderResults(filtered);
        });

      // ปีใน footer
      document.getElementById("yearSpan").textContent =
        new Date().getFullYear();

      // แสดงสถานะเริ่มต้น
      renderResults(null);
    </script>
  </body>
</html>
