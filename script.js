    function generateResume() {
      document.getElementById("r-name").innerText = document.getElementById("name").value;
      document.getElementById("r-email").innerText = document.getElementById("email").value;
      document.getElementById("r-phone").innerText = document.getElementById("phone").value;
      document.getElementById("r-about").innerText = document.getElementById("about").value;

      function fillList(inputId, listId) {
        let items = document.getElementById(inputId).value.split(",");
        let list = document.getElementById(listId);
        list.innerHTML = "";
        items.forEach(i => {
          if(i.trim() !== ""){
            let li = document.createElement("li");
            li.innerText = i.trim();
            list.appendChild(li);
          }
        });
      }

      fillList("skills", "r-skills");
      fillList("education", "r-education");
      fillList("projects", "r-projects");
      fillList("experience", "r-experience");
    }

    function downloadPDF() {
      var resume = document.getElementById("resume");
      var opt = {
        margin: 0.5,
        filename: 'My_Resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
      };
      html2pdf().set(opt).from(resume).save();
    }

    // ✅ Fixed Dynamic Background with direct image links
    const backgrounds = [
      "https://images.unsplash.com/photo-1508780709619-79562169bc64?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1600&q=80"
    ];

    let index = 0;
    function changeBackground() {
      document.body.style.backgroundImage = `url(${backgrounds[index]})`;
      index = (index + 1) % backgrounds.length;
    }

    setInterval(changeBackground, 5000); // Change every 5 sec
    changeBackground(); // Initial call
