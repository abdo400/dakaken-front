
const cards = document.getElementById("cards")
const addCredit = document.getElementById("addCredit")
const payment1 = document.getElementById("payment1")

let data = [
    {
        id: 1,
        name: "شاشة LED ذات جودة عالية في العالم",
        price: "976.33",
        serial: "SKU 12314124124",
        image: "../homepage/images/Jacket.svg",
        qnt: 1
    },
    {
        id: 2,
        name: "شاشة LED ذات جودة عالية في العالم",
        price: "976.33",
        serial: "SKU 12314124124",
        image: "../homepage/images/instagram_img_8.svg",
        qnt: 2
    },
]

document.getElementById("totalCards").innerHTML = `(عنصر ${data.length})`

const minFun = (id) => {
    let item = data.find((item) => item.id === id)

    let newQnt = item.qnt - 1

    let addToObject = Object.assign(item, { qnt: newQnt })

    let indexElement = data.findIndex((item) => item.id === id)

    if (data[indexElement].qnt === 0) {
        let array = data.filter(item => item.id !== id)
        data = array
        document.getElementById("totalCards").innerHTML = `(عنصر ${data.length})`
    } else {
        data[indexElement] = addToObject
    }

    if (data.length === 0) {
        document.getElementById("parentAddToCart").classList.add("hidden")
        document.getElementById("parentNoCart").classList.remove("hidden")
    }
    drawing()

}


const blusFun = (id) => {
    let item = data.find((item) => item.id === id)

    let newQnt = item.qnt + 1

    let addToObject = Object.assign(item, { qnt: newQnt })

    let indexElement = data.findIndex((item) => item.id === id)

    data[indexElement] = addToObject

    drawing()
}

const deleteItem = (id) => {
    let newArr = data.filter((item) => item.id !== id)
    data = newArr
    document.getElementById("totalCards").innerHTML = `(عنصر ${data.length})`
    if (data.length === 0) {
        document.getElementById("parentAddToCart").classList.add("hidden")
        document.getElementById("parentNoCart").classList.remove("hidden")
    }
    drawing()

}

// delete All

document.getElementById("deleteAll").onclick = () => {
    data = []
    drawing()
    document.getElementById("totalCards").innerHTML = `(عنصر ${data.length})`
    document.getElementById("parentAddToCart").classList.add("hidden")
    document.getElementById("parentNoCart").classList.remove("hidden")
}


const handleChangeCredit = () => {
    if (!payment1.checked) {
        document.getElementById("addCredit").style.display = "none";
    } else {
        document.getElementById("addCredit").style.display = "block";
    }
}






const drawing = () => cards.innerHTML = data.map((item) =>

    item.qnt > 0 ? (` <div id=${item.id}
    class="flex flex-col  rounded-lg  md:flex-row   mb-3 md:mb-7">
    <img
        class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src="${item.image}" alt>
    <div
        class="flex flex-col justify-between p-4 leading-normal flex-1">
        <div class="flex justify-between items-start">
            <div>
                <h2
                    class="text-sm md:text-md  mb-3 arabic-regular font-medium">
                    ${item.name}
                    </h2>
                <p
                    class="text-[#F49B57] text-lg font-bold">$${item.price}</p>
            </div>
            <p
                class="text-xs md:text-sm text-gray-400">${item.serial}</p>
        </div>
        <div class="flex justify-between items-center">
            <div class="select-none">
                <button onclick="minFun(${item.id})"
                    class="ms-2 text-xl w-5 font-bold">-</button>
                <span class="mx-5">${item.qnt}</span>
                <button
                onclick="blusFun(${item.id})"
                    class="text-[#2DB2D4] w-5 text-xl font-black">+</button>
            </div>
            <div class="flex items-center justify-between">
                <button class="p-2 rounded-xl hover:bg-[#F49B57]">
                    <svg width="32" height="32"
                        viewBox="0 0 32 32" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M16.827 27.7466C16.3737 27.9066 15.627 27.9066 15.1737 27.7466C11.307 26.4266 2.66699 20.92 2.66699 11.5866C2.66699 7.46663 5.98699 4.1333 10.0803 4.1333C12.507 4.1333 14.6537 5.30663 16.0003 7.11997C17.347 5.30663 19.507 4.1333 21.9203 4.1333C26.0137 4.1333 29.3337 7.46663 29.3337 11.5866C29.3337 20.92 20.6937 26.4266 16.827 27.7466Z"
                            fill="#D4D4D8"
                            stroke="#D4D4D8"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>

                </button>
                <button onclick="deleteItem(${item.id})" class="ms-5 bg-[#FEF2F2] p-2 rounded-xl hover:opacity-75">

                    <svg width="32" height="32"
                        viewBox="0 0 32 32" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M28 7.97331C23.56 7.53331 19.0933 7.30664 14.64 7.30664C12 7.30664 9.36 7.43997 6.72 7.70664L4 7.97331"
                            stroke="#DC2626"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path opacity="0.34"
                            d="M11.333 6.6265L11.6263 4.87984C11.8397 3.61317 11.9997 2.6665 14.253 2.6665H17.7463C19.9997 2.6665 20.173 3.6665 20.373 4.89317L20.6663 6.6265"
                            stroke="#DC2626"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path
                            d="M25.1339 12.187L24.2672 25.6137C24.1205 27.707 24.0005 29.3337 20.2805 29.3337H11.7205C8.00052 29.3337 7.88052 27.707 7.73385 25.6137L6.86719 12.187"
                            stroke="#DC2626"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path opacity="0.34"
                            d="M13.7734 22H18.2134"
                            stroke="#DC2626"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round" />
                        <path opacity="0.34"
                            d="M12.667 16.6665H19.3337"
                            stroke="#DC2626"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>

                </button>
            </div>
        </div>
    </div>
</div>
`
    ) : ""
).join("")


drawing()