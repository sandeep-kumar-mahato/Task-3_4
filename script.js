function validateLogin() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorElement = document.querySelector(".error");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordPattern = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@]{8,}$/;

  if (!emailPattern.test(username) || !passwordPattern.test(password)) {
    errorElement.style.display = "block";
    errorElement.textContent = "Invalid username or password format.";
    return false;
  }

  if (password !== "SmartServTest@123") {
    errorElement.style.display = "block";
    errorElement.textContent = "Invalid username or password.";
    return false;
  }

  window.location.href = "dashboard.html";
  return true;
}

const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: [
      "Everett",
      "Seattle",
      "Lynnwood",
      "Bothell",
      "Mukilteo",
      "Edmonds",
    ],
    datasets: [
      {
        label: "Revenue for November 2019",
        data: [120000, 100000, 49000, 47500, 46000, 34000],
        backgroundColor: "#41bf99",
        borderColor: "#41bf99",
        borderWidth: 1,
      },
    ],
  },
  options: {
    indexAxis: "y",
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const ctx2 = document.getElementById("myChart2").getContext("2d");
const myChart2 = new Chart(ctx2, {
  type: "bar",
  data: {
    labels: [
      "Service Plumbing",
      "Bid Work HVAC",
      "Service HVAC",
      "Bid Work Plumbing",
      "HWT Replacement",
      "Maintenance",
      "Material Sale",
    ],
    datasets: [
      {
        label: "Revenue for November 2019",
        data: [200000, 140000, 79500, 79000, 42000, 41000, 10000],
        backgroundColor: "#41bf99",
        borderColor: "#41bf99",
        borderWidth: 1,
        fill: false,
      },
    ],
  },
  options: {
    indexAxis: "y",
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
