function searchValue() {
  let srchString = ''
  var searchField = $('#search').val().trim();
  let srchVal = data.filter(val => val.name.includes(searchField))
  srchVal.forEach((item) => {
    srchString += `<a class="list-item" href="${item.url}">${item.name}</a>`
  })
  $('#resultDiv').empty().append(srchString)
}
let data = [
    {
    "name": "Senior Officer Trade Back Office",
    "url": "https://www.vietnamworks.com/senior-officer-trade-back-office-1061445-jv/?source=searchResults&searchType=1&placement=1&sortBy=date"
   },
   {
    "name": "Junior Officer Trade Back Office",
    "url": "https://www.vietnamworks.com/junior-officer-trade-back-office-1061443-jv/?source=searchResults&searchType=1&placement=2&sortBy=date"
   },
   {
    "name": "5 Machine Learning",
    "url": "https://www.vietnamworks.com/5-machine-learning-1061442-jv/?source=searchResults&searchType=1&placement=3&sortBy=date"
   },
   {
    "name": "3 Ruby Developers",
    "url": "https://www.vietnamworks.com/3-ruby-developers-1061441-jv/?source=searchResults&searchType=1&placement=4&sortBy=date"
   },
   {
    "name": "Sales Staff (Losgistic - Salary Attractive)",
    "url": "https://www.vietnamworks.com/sales-staff-losgistic-salary-attractive-1061440-jv/?source=searchResults&searchType=1&placement=5&sortBy=date"
   },
   {
    "name": "5 Front-End Developers",
    "url": "https://www.vietnamworks.com/5-front-end-developers-2-1061439-jv/?source=searchResults&searchType=1&placement=6&sortBy=date"
   },
   {
    "name": "Export & Import Documentation Officer",
    "url": "https://www.vietnamworks.com/export-import-documentation-officer-4-1061438-jv/?source=searchResults&searchType=1&placement=7&sortBy=date"
   },
   {
    "name": "10 PHP Developers",
    "url": "https://www.vietnamworks.com/10-php-developers-5-1061437-jv/?source=searchResults&searchType=1&placement=8&sortBy=date"
   },
   {
    "name": "Nhan Vien Bo Phan Express!",
    "url": "https://www.vietnamworks.com/nhan-vien-bo-phan-express-1061436-jv/?source=searchResults&searchType=1&placement=9&sortBy=date"
   },
   {
    "name": "Manager, Service Quality",
    "url": "https://www.vietnamworks.com/manager-service-quality-1061434-jv/?source=searchResults&searchType=1&placement=10&sortBy=date"
   },
   {
    "name": "Sale Travel Agent",
    "url": "https://www.vietnamworks.com/sale-travel-agent-1061430-jv/?source=searchResults&searchType=1&placement=11&sortBy=date"
   },
   {
    "name": "Giam Sat Thi Cong",
    "url": "https://www.vietnamworks.com/giam-sat-thi-cong-90-1061123-jv/?source=searchResults&searchType=1&placement=12&sortBy=date"
   },
   {
    "name": "Ky Su Kinh Te Xay Dung",
    "url": "https://www.vietnamworks.com/ky-su-kinh-te-xay-dung-231-1061424-jv/?source=searchResults&searchType=1&placement=13&sortBy=date"
   },
   {
    "name": "Nhan Vien Kinh Doanh Lam Viec Tai Cac Tinh: Long An, Tien Giang, Quang Tri – Quang Binh",
    "url": "https://www.vietnamworks.com/nhan-vien-kinh-doanh-lam-viec-tai-cac-tinh-long-an-tien-giang-quang-tri-quang-binh-1061423-jv/?source=searchResults&searchType=1&placement=14&sortBy=date"
   },
   {
    "name": "Ke Toan Tong Hop",
    "url": "https://www.vietnamworks.com/ke-toan-tong-hop-2738-1061220-jv/?source=searchResults&searchType=1&placement=15&sortBy=date"
   },
   {
    "name": "Kien Truc Su",
    "url": "https://www.vietnamworks.com/kien-truc-su-888-1061221-jv/?source=searchResults&searchType=1&placement=16&sortBy=date"
   },
   {
    "name": "Quan Ly Trung Tam Van Hanh (Senior Operations Manager)",
    "url": "https://www.vietnamworks.com/quan-ly-trung-tam-van-hanh-senior-operations-manager-1-1052916-jv/?source=searchResults&searchType=1&placement=17&sortBy=date"
   },
   {
    "name": "Nhan Vien Kinh Doanh",
    "url": "https://www.vietnamworks.com/nhan-vien-kinh-doanh-8614-1061420-jv/?source=searchResults&searchType=1&placement=18&sortBy=date"
   },
   {
    "name": "Sales Representative",
    "url": "https://www.vietnamworks.com/sales-representative-151-1061407-jv/?source=searchResults&searchType=1&placement=19&sortBy=date"
   },
   {
    "name": "Nhan Vien Kinh Doanh",
    "url": "https://www.vietnamworks.com/nhan-vien-kinh-doanh-8601-1061137-jv/?source=searchResults&searchType=1&placement=20&sortBy=date"
   },
   {
    "name": "Corporate Program Manager/ Project Manager (Open for All Industries)",
    "url": "https://www.vietnamworks.com/corporate-program-manager-project-manager-open-for-all-industries-1055015-jv/?source=searchResults&searchType=1&placement=21&sortBy=date"
   },
   {
    "name": "Nhan Vien Quan Tri Fanpage",
    "url": "https://www.vietnamworks.com/nhan-vien-quan-tri-fanpage-1061161-jv/?source=searchResults&searchType=1&placement=22&sortBy=date"
   },
   {
    "name": "CAD Operator",
    "url": "https://www.vietnamworks.com/cad-operator-30-1061121-jv/?source=searchResults&searchType=1&placement=23&sortBy=date"
   },
   {
    "name": "Nhan Vien Kinh Doanh (Sales Executive) - So Luong: 05 Nguoi",
    "url": "https://www.vietnamworks.com/nhan-vien-kinh-doanh-sales-executive-so-luong-05-nguoi-1-1061393-jv/?source=searchResults&searchType=1&placement=24&sortBy=date"
   },
   {
    "name": "Nhan Vien Kinh Doanh",
    "url": "https://www.vietnamworks.com/nhan-vien-kinh-doanh-8606-1061187-jv/?source=searchResults&searchType=1&placement=25&sortBy=date"
   },
   {
    "name": "Nhan Vien Kinh Doanh",
    "url": "https://www.vietnamworks.com/nhan-vien-kinh-doanh-8609-1061390-jv/?source=searchResults&searchType=1&placement=26&sortBy=date"
   },
   {
    "name": "Nhan Vien Dich Vu Khach Hang (Customer Services)",
    "url": "https://www.vietnamworks.com/nhan-vien-dich-vu-khach-hang-customer-services-1-1061389-jv/?source=searchResults&searchType=1&placement=27&sortBy=date"
   },
   {
    "name": "Tuyen Dung Designer – Video Editor (#abi Games Studio Thuoc #onesoft )",
    "url": "https://www.vietnamworks.com/tuyen-dung-designer-video-editor-abi-games-studio-thuoc-onesoft-1061383-jv/?source=searchResults&searchType=1&placement=28&sortBy=date"
   },
   {
    "name": "Quality Assurance Executive",
    "url": "https://www.vietnamworks.com/quality-assurance-executive-8-1061385-jv/?source=searchResults&searchType=1&placement=29&sortBy=date"
   },
   {
    "name": "Chuyen Vien Tu Van Du Hoc",
    "url": "https://www.vietnamworks.com/chuyen-vien-tu-van-du-hoc-56-1061387-jv/?source=searchResults&searchType=1&placement=30&sortBy=date"
   },
   {
    "name": "Nhan Vien Kinh Doanh Sales",
    "url": "https://www.vietnamworks.com/nhan-vien-kinh-doanh-sales-57-1061386-jv/?source=searchResults&searchType=1&placement=31&sortBy=date"
   },
   {
    "name": "Truong Chi Nhanh",
    "url": "https://www.vietnamworks.com/truong-chi-nhanh-9-1061380-jv/?source=searchResults&searchType=1&placement=32&sortBy=date"
   },
   {
    "name": "Deputy Tax & Accounting Officer",
    "url": "https://www.vietnamworks.com/deputy-tax-accounting-officer-1-1061384-jv/?source=searchResults&searchType=1&placement=33&sortBy=date"
   },
   {
    "name": "05 2D Game Artist ( Designer/ UI - UX )~1000$",
    "url": "https://www.vietnamworks.com/05-2d-game-artist-designer-ui-ux-1000-1061381-jv/?source=searchResults&searchType=1&placement=34&sortBy=date"
   },
   {
    "name": "Technical Services Engineer",
    "url": "https://www.vietnamworks.com/technical-services-engineer-2-1-1061184-jv/?source=searchResults&searchType=1&placement=35&sortBy=date"
   },
   {
    "name": "Chuyen Vien Quan Ly Trien Khai Dich Vu Dao Tao Va Truyen Thong (Service Manager)",
    "url": "https://www.vietnamworks.com/chuyen-vien-quan-ly-trien-khai-dich-vu-dao-tao-va-truyen-thong-service-manager-1053939-jv/?source=searchResults&searchType=1&placement=36&sortBy=date"
   },
   {
    "name": "Nhan Vien Dich Vu Khach Hang Q.3, Q.go Vap",
    "url": "https://www.vietnamworks.com/nhan-vien-dich-vu-khach-hang-q-3-q-go-vap-1061377-jv/?source=searchResults&searchType=1&placement=37&sortBy=date"
   },
   {
    "name": "Chuyen Vien Kinh Doanh Nganh Noi That - Muc Luong 10 – 15 Trieu + Hoa Hong",
    "url": "https://www.vietnamworks.com/chuyen-vien-kinh-doanh-nganh-noi-that-muc-luong-10-15-trieu-hoa-hong-1061378-jv/?source=searchResults&searchType=1&placement=38&sortBy=date"
   },
   {
    "name": "Nhan Vien IT (Chap Nhan Sinh Vien Moi Ra Truong)",
    "url": "https://www.vietnamworks.com/nhan-vien-it-chap-nhan-sinh-vien-moi-ra-truong-1057303-jv/?source=searchResults&searchType=1&placement=39&sortBy=date"
   },
   {
    "name": "Nhan Vien Cham Soc Khach Hang - Game Online (Tong Thu Nhap Tu 7 Trieu Tro Len)",
    "url": "https://www.vietnamworks.com/nhan-vien-cham-soc-khach-hang-game-online-tong-thu-nhap-tu-7-trieu-tro-len-1-1061376-jv/?source=searchResults&searchType=1&placement=40&sortBy=date"
   },
   {
    "name": "Chuyen Vien Kinh Doanh",
    "url": "https://www.vietnamworks.com/chuyen-vien-kinh-doanh-568-1061367-jv/?source=searchResults&searchType=1&placement=41&sortBy=date"
   },
   {
    "name": "Corporate Affairs Manager",
    "url": "https://www.vietnamworks.com/corporate-affairs-manager-6-1054123-jv/?source=searchResults&searchType=1&placement=42&sortBy=date"
   },
   {
    "name": "Talent Management Specialist",
    "url": "https://www.vietnamworks.com/talent-management-specialist-2-1059652-jv/?source=searchResults&searchType=1&placement=43&sortBy=date"
   },
   {
    "name": "Giam Doc Vung - Muc Thu Nhap Tren 20 Trieu",
    "url": "https://www.vietnamworks.com/giam-doc-vung-muc-thu-nhap-tren-20-trieu-1-1061365-jv/?source=searchResults&searchType=1&placement=44&sortBy=date"
   },
   {
    "name": "Giam Sat Ban Hang",
    "url": "https://www.vietnamworks.com/giam-sat-ban-hang-289-1055002-jv/?source=searchResults&searchType=1&placement=45&sortBy=date"
   },
   {
    "name": "Administrative Assistant Salary Range (Up to $550, Negotiable)",
    "url": "https://www.vietnamworks.com/administrative-assistant-salary-range-up-to-550-negotiable-1061363-jv/?source=searchResults&searchType=1&placement=46&sortBy=date"
   },
   {
    "name": "Logistic and Purchasing (Staff)",
    "url": "https://www.vietnamworks.com/logistic-and-purchasing-staff-1054998-jv/?source=searchResults&searchType=1&placement=47&sortBy=date"
   },
   {
    "name": "Digital Marketing Specialist",
    "url": "https://www.vietnamworks.com/digital-marketing-specialist-71-1054999-jv/?source=searchResults&searchType=1&placement=48&sortBy=date"
   },
   {
    "name": "Sales Supervisor/ Sales Representative (Up to $850, Negotiable)",
    "url": "https://www.vietnamworks.com/sales-supervisor-sales-representative-up-to-850-negotiable-1061358-jv/?source=searchResults&searchType=1&placement=49&sortBy=date"
   },
   {
    "name": "Mechanical & Electrical Engineer",
    "url": "https://www.vietnamworks.com/mechanical-electrical-engineer-24-1-1-1054963-jv/?source=searchResults&searchType=1&placement=50&sortBy=date"
   }
]