const addManager = (manager) => {
    return `
    
    <div class = "container p-20 grid xl:grid-cols-3 gap-3">
<div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 ">
    <div class="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
        </button>
    
<div id="dropdown" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(650px, 3020.5px, 0px);">
    <ul class="py-1" aria-labelledby="dropdownButton">
        <li>
            <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
        </li>
    
        <li>
            <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
        </li>
    
        <li>
            <a href="#" class="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
        </li>
    </ul>
    </div>
</div>
    
<div class="flex flex-col items-center pb-10">
    <div class="card-header">
    <img class="mb-3 w-24 h-24 rounded-full shadow-lg bg-gray-200" src="./intern.png" alt="image">
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">${manager.name}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Manager 📆</span>
    </div>
<div class="flex mt-4 space-x-3 lg:mt-6">
    <div class="card-body">
        <div class="text-sm text-gray-500 dark:text-gray-400">
            <p class="id">${manager.id}</p>
            <p class="officeNumber">${manager.officeNumber}</p>
        </div>
    </div>
    <p class="email"><a href="mailto:${manager.email}" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Email</a></p>
    
        </div>
    </div>
</div>
    
 `;
 
};

const addEngineer = (engineer) => {

    return `
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
        </button>
    
<div id="dropdown" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(650px, 3020.5px, 0px);">
    <ul class="py-1" aria-labelledby="dropdownButton">
        <li>
            <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
        </li>
    
        <li>
            <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
        </li>
    
        <li>
            <a href="#" class="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
        </li>
    </ul>
    </div>
</div>
    
<div class="flex flex-col items-center pb-10">
    <div class= "card-header">
    <img class="mb-3 w-24 h-24 rounded-full shadow-lg bg-gray-200" src="./intern.png" alt="image">
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">${engineer.name}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Engineer 👩🏾‍💻</span>
    </div>
<div class="flex mt-4 space-x-3 lg:mt-6">
    <div class="card-body">
        <div class="text-sm text-gray-500 dark:text-gray-400">
            <p class="id">${engineer.id}</p>
        </div>
    </div>
    <p class="email"><a href="mailto:${engineer.email}" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Email</a></p>
    <p class="github"><a href="https://github.com/${engineer.githubUser}" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Github</a></p>
    
        </div>
    </div>
</div>
    `;


};


const addIntern = (intern) => {

    return `
    
    <div class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
        <button id="dropdownButton" data-dropdown-toggle="dropdown" class="hidden sm:inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5" type="button">
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
        </button>
    
<div id="dropdown" class="hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="top" style="position: absolute; inset: auto auto 0px 0px; margin: 0px; transform: translate3d(650px, 3020.5px, 0px);">
    <ul class="py-1" aria-labelledby="dropdownButton">
        <li>
            <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
        </li>
    
        <li>
            <a href="#" class="block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
        </li>
    
        <li>
            <a href="#" class="block py-2 px-4 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
        </li>
    </ul>
    </div>
</div>
    
<div class="flex flex-col items-center pb-10">
    <div class= "card-header">
    <img class="mb-3 w-24 h-24 rounded-full shadow-lg bg-gray-200" src="./intern.png" alt="image">
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">${intern.name}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">Intern ​👨‍💻​🆔​👩‍💻​</span>
    </div>
   
<div class="flex mt-4 space-x-3 lg:mt-6">
    <div class="card-body">
        <div class="text-sm text-gray-500 dark:text-gray-400">
            <p class="id">${intern.id}</p>
            <p class="school">${intern.schoolName}</p>
        </div>
    </div>
    <p class="email"><a href="mailto:${intern.email}" class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Email</a></p>
    
        </div>
    </div>
</div>
</div>
`;

};

generateSite = (data) => {

    pageArray = [];

    for (let i = 0; i<data.length; i++) {
        const teamMem = data[i];
        const role = teamMem.getRole();

        if (role === 'manager') {
            const managerProfile = addManager(teamMem);

            pageArray.push(managerProfile);
        }
        if (role === 'intern') {
            const internProfile = addIntern(teamMem);

            pageArray.push(internProfile);
        }
        if (role === 'engineer') {
            const engineerProfile = addEngineer(teamMem);

            pageArray.push(engineerProfile);
        }
    }

    const teamMemProfile = pageArray.join('');

    const generateProfile = generateProfileHtml(teamMemProfile);
    return generateProfile;
};

const generateProfileHtml = (teamMemProfile) => {
    
        return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Profile Generator</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
    
    <nav class="bg-gray-800 shadow-lg">
        <div class="container mx-auto">
          <div class="sm:flex justify-around">
           
            <a href="#" class="text-white text-3xl font-bold p-3">Team Profile</a>
      
            <!-- Menus  -->
            <ul class="text-gray-400 sm:self-center text-xl border-t sm:border-none">
              <li class="sm:inline-block">
                <a href="#" class="p-3 hover:text-white">Services</a>
              </li>
              <li class="sm:inline-block">
                <a href="#" class="p-3 hover:text-white">Products</a>
              </li>
              <li class="sm:inline-block">
                <a href="#" class="p-3 hover:text-white">Pricing</a>
              </li>
              <li class="sm:inline-block">
                <a href="#" class="p-3 hover:text-white">Contact Us</a>
              </li>
            
            </ul>
          </div>
        </div>
      </nav>
      <div class = "container p-20 grid xl:grid-cols-3 gap-3">
        
        ${addManager(teamMemProfile)}
        ${addEngineer(teamMemProfile)}
        ${addIntern(teamMemProfile)}
        
        
        
</div>
</div>
</body>
</html>
        
        `;

}

module.exports = generateSite;