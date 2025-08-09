 // JavaScript Form Validation
    document.getElementById('contactForm').addEventListener('submit', function(e) {
        e.preventDefault();
        let name = document.getElementById('name').value.trim();
        let email = document.getElementById('email').value.trim();
        let subject = document.getElementById('date').value.trim();

        if (!name || !email || !subject) {
            alert('All fields are required.');
            return;
        }

        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        alert('Form submitted successfully!');
        this.reset();
    });

    // To-Do List Functions
    function addTask() {
        let taskInput = document.getElementById('taskInput');
        let taskValue = taskInput.value.trim();
        if (taskValue === '') {
            alert('Please enter a task.');
            return;
        }

        let li = document.createElement('li');
        li.textContent = taskValue;

        let removeBtn = document.createElement('button');
        removeBtn.textContent = 'Remove';
        removeBtn.onclick = function() {
            this.parentElement.remove();
        };

        li.appendChild(removeBtn);
        document.getElementById('taskList').appendChild(li);
        taskInput.value = '';
    }