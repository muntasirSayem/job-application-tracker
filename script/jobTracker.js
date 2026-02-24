let interviewList = [];
let rejectedList = [];
let currentStatus = 'allTabBtn';

const total = document.getElementById("total");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");

const mainContainer = document.getElementById('mainContainer');

const jobsCount = document.getElementById('jobsCount');

const allTabBtn = document.getElementById("allTabBtn");
const interviewTabBtn = document.getElementById("interviewTabBtn");
const rejectedTabBtn = document.getElementById("rejectedTabBtn");

const allCards = document.getElementById("allCards");

const interviewTab = document.getElementById("interviewTab");
const rejectedTab = document.getElementById("rejectedTab");

const interNoJobs = document.getElementById('interNoJobs');
const rejectNoJobs = document.getElementById('rejectNoJobs');

// DashboardJobsCount--------------------->
function calculateCount() {
    total.innerText = allCards.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
    jobsCount.innerText = allCards.children.length;
}

calculateCount()

if (interviewCount.innerText === 0) { interNoJobs.classList.remove('hidden') }

function toggleStyle(id) {
    currentStatus = id
    // buttonToggling-------->
    allTabBtn.classList.remove('text-white', 'bg-[#3B82F6]')
    interviewTabBtn.classList.remove('text-white', 'bg-[#3B82F6]')
    rejectedTabBtn.classList.remove('text-white', 'bg-[#3B82F6]')

    allTabBtn.classList.add('text-gray-500', 'bg-white')
    interviewTabBtn.classList.add('text-gray-500', 'bg-white')
    rejectedTabBtn.classList.add('text-gray-500', 'bg-white')

    const selectedBtn = document.getElementById(id);

    selectedBtn.classList.remove('text-gray-500', 'bg-white')
    selectedBtn.classList.add('text-white', 'bg-[#3B82F6]')

    // showOnly------------->

    if (id === 'interviewTabBtn') {
        allCards.classList.add('hidden');
        interviewTab.classList.remove('hidden');
        rejectedTab.classList.add('hidden');
        renderInterview()
        jobsCount.innerText = interviewList.length;
    }
    else if (id === 'rejectedTabBtn') {
        allCards.classList.add('hidden');
        interviewTab.classList.add('hidden');
        rejectedTab.classList.remove('hidden');
        renderRejected()
        jobsCount.innerText = rejectedList.length;

    }
    else if (id === 'allTabBtn') {
        allCards.classList.remove('hidden');
        interviewTab.classList.add('hidden');
        rejectedTab.classList.add('hidden');
        jobsCount.innerText = allCards.children.length;

    }
}


mainContainer.addEventListener('click', function (event) {

    // INTERVIEW BUTTON-------------------------------------->
    if (event.target.classList.contains('interviewBtn')) {
        const parentNode = event.target.parentNode.parentNode;

        const companyName = parentNode.querySelector('.companyName').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const salary = parentNode.querySelector('.salary').innerText;
        const description = parentNode.querySelector('.description').innerText;
        const interviewBtn = parentNode.querySelector('.interviewBtn').innerText;
        const rejectedBtn = parentNode.querySelector('.rejectedBtn').innerText;
        const deleteBtn = parentNode.querySelector('.deleteBtn').innerText;

        const notAppliedBtn = parentNode.querySelector('.notAppliedBtn');
        notAppliedBtn.classList.remove(
            'bg-[#EEF4FF]',
            'text-[#002C5C]',
            'bg-green-500',
            'border-green-500',
            'bg-red-500',
            'border-red-500');
        notAppliedBtn.innerText = 'INTERVIEW';
        notAppliedBtn.classList.remove('bg-[#EEF4FF]', 'text-[#002C5C]');
        notAppliedBtn.classList.add('bg-green-500',
            'text-white',
            'font-semibold',
            'border',
            'border-green-500');

        const cardInfo = {
            companyName,
            position,
            salary,
            description,
            notAppliedBtn: 'INTERVIEW',
            interviewBtn,
            rejectedBtn,
            deleteBtn
        }

        const companyExist = interviewList.find(item => item.companyName === cardInfo.companyName);

        if (!companyExist) {
            interviewList.push(cardInfo)
        }

        rejectedList = rejectedList.filter(item => item.companyName !== cardInfo.companyName)

        calculateCount()
        if (currentStatus === 'rejectedTabBtn') {
            renderRejected()
        }
        interNoJobs.classList.add('hidden')
    }


    // REJECTED BUTTON-------------------------------------->
    else if (event.target.classList.contains('rejectedBtn')) {

        const parentNode = event.target.parentNode.parentNode;

        const companyName = parentNode.querySelector('.companyName').innerText;
        const position = parentNode.querySelector('.position').innerText;
        const salary = parentNode.querySelector('.salary').innerText;
        const description = parentNode.querySelector('.description').innerText;
        const interviewBtn = parentNode.querySelector('.interviewBtn').innerText;
        const rejectedBtn = parentNode.querySelector('.rejectedBtn').innerText;
        const deleteBtn = parentNode.querySelector('.deleteBtn').innerText;

        const notAppliedBtn = parentNode.querySelector('.notAppliedBtn');
        notAppliedBtn.classList.remove(
            'bg-[#EEF4FF]',
            'text-[#002C5C]',
            'bg-green-500',
            'border-green-500',
            'bg-red-500',
            'border-red-500');
        notAppliedBtn.innerText = 'REJECTED';
        notAppliedBtn.classList.remove('bg-[#EEF4FF]', 'text-[#002C5C]');
        notAppliedBtn.classList.add(
            'bg-red-500',
            'text-white',
            'font-semibold',
            'border',
            'border-red-500');

        const cardInfo = {
            companyName,
            position,
            salary,
            description,
            notAppliedBtn: 'REJECTED',
            interviewBtn,
            rejectedBtn,
            deleteBtn
        }
        console.log(cardInfo)

        const companyExist = rejectedList.find(item => item.companyName === cardInfo.companyName);

        if (!companyExist) {
            rejectedList.push(cardInfo)
        }

        interviewList = interviewList.filter(item => item.companyName !== cardInfo.companyName)

        calculateCount()
        if (currentStatus === 'interviewTabBtn') {
            renderInterview()
        }
        rejectNoJobs.classList.add('hidden');

    }
    // DELETE BUTTON------------------------------>
    else if (event.target.classList.contains('deleteBtn') || event.target.classList) {
        const parentNode = event.target.parentNode.parentNode;
        const companyName = parentNode.querySelector('.companyName').innerText;

        parentNode.remove();

        interviewList = interviewList.filter(item => item.companyName !== companyName);
        rejectedList = rejectedList.filter(item => item.companyName !== companyName);

        calculateCount();

        if (currentStatus === 'interviewTabBtn') renderInterview();
        else if (currentStatus === 'rejectedTabBtn') renderRejected();
    }
})


// renderInterview------------------------------->
function renderInterview() {
    // interviewTab.innerHTML = ''

    for (let interview of interviewList) {
        console.log(interview);

        let div = document.createElement('div');
        div.className = "mb-4 relative"
        div.innerHTML = `<div class="bg-white p-6 border border-[#F1F2F4] rounded-lg">
                    <h4 class="companyName text-[#002C5C] text-[1.125rem] font-semibold mb-1">${interview.companyName}</h4>
                    <p class="position text-gray-500 text-[1rem]">${interview.position}</p>
                    <p class="salary text-gray-500 text-[0.875rem] my-5">${interview.salary}</p>
                    <button class="notAppliedBtn text-white text-[0.875rem] font-semibold bg-green-500 border border-green-500 rounded px-3 py-2 mb-2">${interview.notAppliedBtn}</button>
                    <p class="description text-[#323B49] text-[0.875rem] leading-5 mb-5">${interview.description}</p>
                    <button
                        class="interviewBtn btn text-green-500 text-[0.875rem] font-semibold border border-green-500 rounded hover:bg-green-500 hover:text-white cursor-pointer px-3 py-2 mr-2">INTERVIEW</button>
                    <button
                        class="rejectedBtn btn text-red-500 text-[0.875rem] font-semibold border border-red-500 rounded hover:bg-red-500 hover:text-white cursor-pointer px-3 py-2">REJECTED</button>
                    <div
                        class="deleteBtn btn w-8 h-8 border border-[#F1F2F4] rounded-full hover:bg-gray-200 cursor-pointer flex justify-center items-center absolute top-8.5 right-6">
                        <i class="deleteBtn fa-regular fa-trash-can text-[#64748B]"></i>
                    </div>
                </div>
            </div>`
        interviewTab.appendChild(div)
    }
}

// renderRejected----------------------->
function renderRejected() {
    rejectedTab.innerHTML = ''

    for (let rejected of rejectedList) {
        console.log(rejected);

        let div = document.createElement('div');
        div.className = "mb-4 relative"
        div.innerHTML = `<div class="bg-white p-6 border border-[#F1F2F4] rounded-lg">
                    <h4 class="companyName text-[#002C5C] text-[1.125rem] font-semibold mb-1">${rejected.companyName}</h4>
                    <p class="position text-gray-500 text-[1rem]">${rejected.position}</p>
                    <p class="salary text-gray-500 text-[0.875rem] my-5">${rejected.salary}</p>
                    <button class="notAppliedBtn text-white text-[0.875rem] font-semibold bg-red-500 border border-red-500 rounded px-3 py-2 mb-2">${rejected.notAppliedBtn}</button>
                    <p class="description text-[#323B49] text-[0.875rem] leading-5 mb-5">${rejected.description}</p>
                    <button
                        class="interviewBtn btn text-green-500 text-[0.875rem] font-semibold border border-green-500 rounded hover:bg-green-500 hover:text-white cursor-pointer px-3 py-2 mr-2">INTERVIEW</button>
                    <button
                        class="rejectedBtn btn text-red-500 text-[0.875rem] font-semibold border border-red-500 rounded hover:bg-red-500 hover:text-white cursor-pointer px-3 py-2">REJECTED</button>
                    <div
                        class="deleteBtn btn w-8 h-8 border border-[#F1F2F4] rounded-full hover:bg-gray-200 cursor-pointer flex justify-center items-center absolute top-8.5 right-6">
                        <i class="deleteBtn fa-regular fa-trash-can text-[#64748B]"></i>
                    </div>
                </div>
            </div>`
        rejectedTab.appendChild(div)
    }
}