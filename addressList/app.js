
const cardList = document.getElementById("cardList")

let addressEdit = document.getElementById("addressEdit")
let countryEdit = document.getElementById("countryEdit")
let cityEdit = document.getElementById("cityEdit")
let zipEdit = document.getElementById("zipEdit")


let data = [
    {
        id: 1,
        address: "maddi",
        country: "egypt",
        post: "12314124124",
        city: "cairo"
    },
    {
        id: 2,
        address: "maddi2",
        country: "egypt",
        post: "12314124124",
        city: "cairo"
    },

]


const deleteItem = (id) => {
    let newArr = data.filter((item) => item.id !== id)
    data = newArr
    drawing()

}

const handleEdit = (id) => {
    let item = data.find((item) => item.id === id)
    addressEdit.value = item.address
    countryEdit.value = item.country
    cityEdit.value = item.city
    zipEdit.value = item.post
}


const drawing = () => cardList.innerHTML = data.map((item) =>
(`<div id=${item.id}
    class="bg-[#F4F4F4] flex justify-between items-center rounded-xl p-3 px-4 mb-4">
    <p class="text-gray-500 capitalize">${item.address}, ${item.country}</p>
    <div>
        <button onclick="deleteItem(${item.id})" class="me-2">
            <svg width="24" height="24" viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M20.25 4.5H16.5V3.75C16.5 3.15326 16.2629 2.58097 15.841 2.15901C15.419 1.73705 14.8467 1.5 14.25 1.5H9.75C9.15326 1.5 8.58097 1.73705 8.15901 2.15901C7.73705 2.58097 7.5 3.15326 7.5 3.75V4.5H3.75C3.55109 4.5 3.36032 4.57902 3.21967 4.71967C3.07902 4.86032 3 5.05109 3 5.25C3 5.44891 3.07902 5.63968 3.21967 5.78033C3.36032 5.92098 3.55109 6 3.75 6H4.5V19.5C4.5 19.8978 4.65804 20.2794 4.93934 20.5607C5.22064 20.842 5.60218 21 6 21H18C18.3978 21 18.7794 20.842 19.0607 20.5607C19.342 20.2794 19.5 19.8978 19.5 19.5V6H20.25C20.4489 6 20.6397 5.92098 20.7803 5.78033C20.921 5.63968 21 5.44891 21 5.25C21 5.05109 20.921 4.86032 20.7803 4.71967C20.6397 4.57902 20.4489 4.5 20.25 4.5ZM9 3.75C9 3.55109 9.07902 3.36032 9.21967 3.21967C9.36032 3.07902 9.55109 3 9.75 3H14.25C14.4489 3 14.6397 3.07902 14.7803 3.21967C14.921 3.36032 15 3.55109 15 3.75V4.5H9V3.75ZM18 19.5H6V6H18V19.5ZM10.5 9.75V15.75C10.5 15.9489 10.421 16.1397 10.2803 16.2803C10.1397 16.421 9.94891 16.5 9.75 16.5C9.55109 16.5 9.36032 16.421 9.21967 16.2803C9.07902 16.1397 9 15.9489 9 15.75V9.75C9 9.55109 9.07902 9.36032 9.21967 9.21967C9.36032 9.07902 9.55109 9 9.75 9C9.94891 9 10.1397 9.07902 10.2803 9.21967C10.421 9.36032 10.5 9.55109 10.5 9.75ZM15 9.75V15.75C15 15.9489 14.921 16.1397 14.7803 16.2803C14.6397 16.421 14.4489 16.5 14.25 16.5C14.0511 16.5 13.8603 16.421 13.7197 16.2803C13.579 16.1397 13.5 15.9489 13.5 15.75V9.75C13.5 9.55109 13.579 9.36032 13.7197 9.21967C13.8603 9.07902 14.0511 9 14.25 9C14.4489 9 14.6397 9.07902 14.7803 9.21967C14.921 9.36032 15 9.55109 15 9.75Z"
                    fill="#F83032" />
            </svg>
        </button>
        <button
        onclick="handleEdit(${item.id})"
            data-modal-target="EditModal"
            data-modal-toggle="EditModal">
            <svg width="24" height="24" viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M19.6258 7.94945L16.0506 4.37501C15.9317 4.25612 15.7906 4.16181 15.6352 4.09746C15.4799 4.03312 15.3135 4 15.1453 4C14.9772 4 14.8107 4.03312 14.6554 4.09746C14.5001 4.16181 14.359 4.25612 14.2401 4.37501L4.37521 14.2399C4.25583 14.3584 4.16119 14.4993 4.09677 14.6547C4.03236 14.81 3.99947 14.9766 4.00001 15.1447V18.72C4.00001 19.0595 4.13486 19.385 4.37491 19.6251C4.61496 19.8651 4.94054 20 5.28002 20H18.7202C18.8899 20 19.0527 19.9326 19.1727 19.8125C19.2928 19.6925 19.3602 19.5297 19.3602 19.36C19.3602 19.1903 19.2928 19.0275 19.1727 18.9074C19.0527 18.7874 18.8899 18.72 18.7202 18.72H10.6657L19.6258 9.75988C19.7447 9.64101 19.839 9.49989 19.9033 9.34457C19.9677 9.18926 20.0008 9.02278 20.0008 8.85466C20.0008 8.68655 19.9677 8.52007 19.9033 8.36476C19.839 8.20944 19.7447 8.06832 19.6258 7.94945ZM12.3201 8.10466L13.6553 9.43987L6.88004 16.2152L5.54483 14.8799L12.3201 8.10466ZM5.28002 18.72V16.4248L7.57525 18.72H5.28002ZM9.12007 18.4552L7.78565 17.12L14.5601 10.3447L15.8953 11.6799L9.12007 18.4552ZM16.8002 10.7751L13.2257 7.19985L15.1457 5.27982L18.7202 8.85507L16.8002 10.7751Z"
                    fill="#8E8E8E" />
            </svg>

        </button>
    </div>

</div>
`)
).join("")


drawing()