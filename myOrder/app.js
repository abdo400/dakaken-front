
const cards = document.getElementById("cards")
const addCredit = document.getElementById("addCredit")
const payment1 = document.getElementById("payment1")

let data = [
    {
        id: 1,
        date: "الجمعة 10 سبتمبر 2023 الساعة 20:00 مساءً",
        address: "ش 9 المعادى، القاهرة",
        serial: 4464641641,
        image: "./images/imageTest.png",
        status: "في الطريق"
    },
    {
        id: 2,
        date: "الجمعة 10 سبتمبر 2023 الساعة 20:00 مساءً",
        address: "ش 9 المعادى، القاهرة",
        serial: 4464641641,
        image: "../profile/images/shopping.png",
        status: "الغيت"
    },
    {
        id: 2,
        date: "الجمعة 10 سبتمبر 2023 الساعة 20:00 مساءً",
        address: "ش 9 المعادى، القاهرة",
        serial: 4464641641,
        image: "../profile/images/shopping.png",
        status: "تم الشحن"
    },
]



const drawing = () => cards.innerHTML = data.map((item) => (`  <div class="flex flex-col rounded-xl  md:flex-row justify-between shadow-lg  mb-3 md:mb-7 px-3 py-4">
    <div class="flex flex-col flex-1">
        <div class="flex flex-col md:flex-row ">
            <div class="overflow-hidden rounded-xl">
            <img class="w-full object-cover h-[291px] md:h-[105px] md:w-[190px]" src="${item.image}" />
            </div>
            <div class="flex flex-col ms-3 my-3 md:my-0 flex-1">
                <div class="flex justify-between items-center">
                    <p class="font-medium md:text-base lg:text-sm xl:text-lg text-gray-700 ">رقم الطلب : ${item.serial}</p>
                    <span class="border p-1 px-6 text-nowrap rounded-lg ${item.status === "في الطريق" && "text-[#2DB2D4] border-[#2DB2D4]" || item.status === "الغيت" && "text-[#DC2626] border-[#DC2626]" || item.status === "تم الشحن" && "text-[#175CD3] border-[#175CD3]"}">
                    ${item.status}
                
                    </span>
                </div>
                <p class="text-sm xl:text-base text-gray-600 mt-4">${item.date}</p>
                <span class="text-sm xl:text-base text-gray-600 mt-1">${item.address}</span>
            </div>
        </div>
   <div class="flex justify-end mt-2">
        <a class="text-orange font-bold text-sm xl:text-base" href="#">عرض التفاصيل</a>
   </div>
    
    </div>
   

    
    </div>

`
)
).join("")


drawing()