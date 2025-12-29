const jobs = [
  { title: "Frontend Developer", company: "TechNova", location: "Remote" },
  { title: "Backend Engineer", company: "DataWorks", location: "New York" },
  { title: "UI/UX Designer", company: "DesignPro", location: "San Francisco" }
];

document.addEventListener("DOMContentLoaded", () => {
  const jobList = document.getElementById("jobList");
  if (jobList) {
    displayJobs(jobs);
    document.getElementById("jobSearch").addEventListener("input", filterJobs);
    document.getElementById("postJobBtn").addEventListener("click", () => {
      alert("Job posting feature coming soon!");
    });
  }

  const editBtn = document.getElementById("editBtn");
  const connectBtn = document.getElementById("connectBtn");
  const profileForm = document.getElementById("profileForm");

  if (editBtn) {
    editBtn.addEventListener("click", () => {
      profileForm.classList.toggle("hidden");
    });
  }

  if (connectBtn) {
    connectBtn.addEventListener("click", () => {
      connectBtn.textContent = "✅ Connected";
      connectBtn.disabled = true;
    });
  }

  if (profileForm) {
    profileForm.addEventListener("submit", e => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const title = document.getElementById("title").value;
      document.getElementById("displayName").textContent = name || "Your Name";
      document.getElementById("displayTitle").textContent = title || "Your Title";
      alert("Profile updated!");
      profileForm.classList.add("hidden");
    });
  }
});

function displayJobs(list) {
  const jobList = document.getElementById("jobList");
  jobList.innerHTML = "";
  list.forEach(job => {
    const div = document.createElement("div");
    div.className = "job";
    div.innerHTML = `
      <h3>${job.title}</h3>
      <p>${job.company} — ${job.location}</p>
      <button class="applyBtn primary-btn">Apply</button>
    `;
    jobList.appendChild(div);
  });

  document.querySelectorAll(".applyBtn").forEach(btn => {
    btn.addEventListener("click", () => {
      btn.textContent = "✅ Applied";
      btn.disabled = true;
    });
  });
}

function filterJobs(e) {
  const keyword = e.target.value.toLowerCase();
  const filtered = jobs.filter(j => j.title.toLowerCase().includes(keyword));
  displayJobs(filtered);
}
