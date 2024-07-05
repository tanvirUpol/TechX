
    function showChatGptTab(tabId) {

        document.querySelectorAll('.top.tab-content').forEach(function (content) {
            content.classList.remove('active');
        });

        document.querySelectorAll('#chat-gpt').forEach(function (content) {
            content.classList.add('active');
        });

        // Hide all tab contents
        document.querySelectorAll('#chat-gpt .tab-content').forEach(function (content) {
            content.classList.remove('active');
        });

        // Remove active class from all tab buttons
        document.querySelectorAll('#chat-gpt .tabs button').forEach(function (tab) {
            tab.classList.remove('active');
        });

        // Add active class to the selected tab button
        event.currentTarget.classList.add('active');
        // Show the selected tab content
        document.getElementById(tabId).classList.add('active');

        if (tabId === "start-new-chat") {

            var chatDiv = document.getElementById('select-chat-id');
            document.getElementById('custom-underline').classList.add('active');
            if (chatDiv.style.display === 'flex') {
                chatDiv.style.display = 'none';
            } else {
                chatDiv.style.display = 'flex';
            }
        }

    }




    function showObjRemover(tabId) {

        document.querySelectorAll('.top.tab-content').forEach(function (content) {
            content.classList.remove('active');
        });

        document.querySelectorAll('#obj-remover').forEach(function (content) {
            content.classList.add('active');
        });

        // Hide all tab contents
        if (tabId !== "obj-remover") {
            document.querySelectorAll('#obj-remover .tab-content').forEach(function (content) {
                content.classList.remove('active');
            });
        }
        if (tabId === "obj-remover") {
            document.getElementsByClassName("or-how-it-works").classList.add('active');
        }

        // Remove active class from all tab buttons
        document.querySelectorAll('#obj-remover .tabs button').forEach(function (tab) {
            tab.classList.remove('active');
        });



        // Show the selected tab content
        document.getElementById(tabId).classList.add('active');


        // Add active class to the selected tab button
        event.currentTarget.classList.add('active');
    }





    function showAccount(tabId) {


        document.querySelectorAll('.top.tab-content').forEach(function (content) {
            content.classList.remove('active');
        });


        // Hide all tab contents
        document.querySelectorAll('#account.tab-content').forEach(function (content) {
            content.classList.remove('active');
        });


        // Show the selected tab content
        document.getElementById(tabId).classList.add('active');

    }


    // modal start
    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("openModalBtn");
    var btn2 = document.getElementById("openModalBtn2");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // Get the close button inside the modal
    var closeModalBtn = document.getElementsByClassName("close-modal")[0];

    // When the user clicks the button, open the modal 
    btn.onclick = function () {
        modal.style.display = "block";
    }
    btn2.onclick = function () {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks on close button inside the modal, close the modal
    closeModalBtn.onclick = function () {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // modal end

    // sidebar
    document.addEventListener('DOMContentLoaded', function () {
        const hamburgerMenu = document.getElementById('hamburgerMenu');
        const sidebar = document.getElementById('sidebar');
        const closeButton = document.getElementById('closeButton');
        let isSidebarOpen = false;

        function toggleSidebar() {
            if (isSidebarOpen) {
                sidebar.classList.remove('slide-in-left');
                sidebar.classList.add('slide-out-left');
            } else {
                sidebar.classList.remove('slide-out-left');
                sidebar.classList.add('slide-in-left');
            }
            isSidebarOpen = !isSidebarOpen;
        }

        hamburgerMenu.addEventListener('click', toggleSidebar);
        closeButton.addEventListener('click', toggleSidebar);
    });

    // sidebar end



    // drop down
    document.addEventListener('DOMContentLoaded', (event) => {
        const dropdownToggle = document.getElementById('dropdownToggle');
        const dropdownMenu = document.getElementById('dropdownMenu');

        dropdownToggle.addEventListener('click', () => {
            dropdownMenu.style.display = dropdownMenu.style.display === 'block' ? 'none' : 'block';
        });

        window.addEventListener('click', (event) => {
            if (!event.target.closest('.dropdown')) {
                dropdownMenu.style.display = 'none';
            }
        });
    });


