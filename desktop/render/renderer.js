document.getElementById('loadEmployees').addEventListener('click', () => {
    fetch('http://localhost:3000/api/v1/employees')  // Запрос к API для получения данных
        .then(response => response.json())
        .then(data => {
            const employeeList = document.getElementById('employeeList');
            employeeList.innerHTML = '';  // Очистить список перед добавлением новых данных

            data.forEach(employee => {
                const employeeDiv = document.createElement('div');
                employeeDiv.innerText = `${employee.name} - ${employee.position}`;
                employeeList.appendChild(employeeDiv);
            });
        })
        .catch(error => console.error('Error loading employees:', error));
});
