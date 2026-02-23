let interviewList = [];
let rejectedList = [];

const total = document.getElementById("total");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");

const allBtn = document.getElementById("allBtn");
const interviewBtn = document.getElementById("interviewBtn");
const rejectedBtn = document.getElementById("rejectedBtn");

const allCards = document.getElementById("allCards");
const interviewTab = document.getElementById("interviewTab");
const rejectedTab = document.getElementById("rejectedTab");


function toggleStyle(btnId, cardId) {
    // buttonToggling-------->
    allBtn.classList.remove('text-white', 'bg-[#3B82F6]')
    interviewBtn.classList.remove('text-white', 'bg-[#3B82F6]')
    rejectedBtn.classList.remove('text-white', 'bg-[#3B82F6]')

    allBtn.classList.add('text-gray-500', 'bg-white')
    interviewBtn.classList.add('text-gray-500', 'bg-white')
    rejectedBtn.classList.add('text-gray-500', 'bg-white')

    const selectedBtn = document.getElementById(btnId);

    selectedBtn.classList.remove('text-gray-500', 'bg-white')
    selectedBtn.classList.add('text-white', 'bg-[#3B82F6]')

    // showOnly------------->
    allCards.classList.add('hidden')
    interviewTab.classList.add('hidden')
    rejectedTab.classList.add('hidden')

    const selectedCards = document.getElementById(cardId);

    selectedCards.classList.remove('hidden')
}