const users = [];

        function showCreateUser() {
            document.getElementById('loginPage').style.display = 'none';
            document.getElementById('createUserPage').style.display = 'block';
        }

        function showLogin() {
            document.getElementById('createUserPage').style.display = 'none';
            document.getElementById('loginPage').style.display = 'block';
        }

        function createUser() {
            const newUsername = document.getElementById('newUsername').value;
            const newPassword = document.getElementById('newPassword').value;

            // Check if username already exists
            if (users.some(user => user.username === newUsername)) {
                alert("Username already exists. Please choose another.");
                return;
            }

            // Add new user
            users.push({ username: newUsername, password: newPassword });
            alert("User created successfully! You can now log in.");
            showLogin(); // Return to login page
        }

        function login() {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Check for valid credentials
            const user = users.find(user => user.username === username && user.password === password);
            if (user) {
               alert("Login successful!");
               window.location.href = "home.html"; 
                // Redirect to another page or perform desired action
                // window.location.href = "welcome.html"; 
            } else {
                alert("Invalid username or password.");
            }
        }