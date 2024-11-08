// Select the form and resume output elements
var form = document.getElementById('resume-form');
var resumeName = document.getElementById('resume-name');
var resumeEmail = document.getElementById('resume-email');
var resumeEducation = document.getElementById('resume-education');
var resumeWorkExperience = document.getElementById('resume-work-experience');
var resumeSkills = document.getElementById('resume-skills');
var resumeLink = document.getElementById('resume-link');
var downloadButton = document.getElementById('download-pdf');
// Ensure the form and elements are not null before proceeding
if (form && resumeName && resumeEmail && resumeEducation && resumeWorkExperience && resumeSkills && resumeLink && downloadButton) {
    form.addEventListener('submit', function (e) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m;
        e.preventDefault(); // Prevent the form from submitting and refreshing the page
        // Capture user input values from the form
        var username = (_b = (_a = document.getElementById('username')) === null || _a === void 0 ? void 0 : _a.value) !== null && _b !== void 0 ? _b : '';
        var name = (_d = (_c = document.getElementById('name')) === null || _c === void 0 ? void 0 : _c.value) !== null && _d !== void 0 ? _d : '';
        var email = (_f = (_e = document.getElementById('email')) === null || _e === void 0 ? void 0 : _e.value) !== null && _f !== void 0 ? _f : '';
        var education = (_h = (_g = document.getElementById('education')) === null || _g === void 0 ? void 0 : _g.value) !== null && _h !== void 0 ? _h : '';
        var workExperience = (_k = (_j = document.getElementById('work-experience')) === null || _j === void 0 ? void 0 : _j.value) !== null && _k !== void 0 ? _k : '';
        var skills = (_m = (_l = document.getElementById('skills')) === null || _l === void 0 ? void 0 : _l.value) !== null && _m !== void 0 ? _m : '';
        // Update resume sections dynamically
        resumeName.textContent = name || 'Not filled';
        resumeEmail.textContent = email || 'Not filled';
        resumeEducation.textContent = education || 'Not filled';
        resumeWorkExperience.textContent = workExperience || 'Not filled';
        // Update the skills section (splitting by commas)
        resumeSkills.innerHTML = ''; // Clear any previous skills
        if (skills) {
            var skillList = skills.split(',').map(function (skill) { return skill.trim(); });
            skillList.forEach(function (skill) {
                var li = document.createElement('li');
                li.textContent = skill;
                resumeSkills.appendChild(li);
            });
        }
        else {
            var li = document.createElement('li');
            li.textContent = 'Not filled';
            resumeSkills.appendChild(li);
        }
        // Generate unique resume URL
        var uniqueURL = "".concat(username, ".vercel.app/resume");
        resumeLink.textContent = "Share your resume: ".concat(uniqueURL);
    });
    // PDF download functionality
    downloadButton.addEventListener('click', function () {
        var jsPDF = window.jspdf.jsPDF;
        var doc = new jsPDF();
        // Add resume content to PDF
        doc.text("Name: ".concat(resumeName === null || resumeName === void 0 ? void 0 : resumeName.textContent), 10, 10);
        doc.text("Email: ".concat(resumeEmail === null || resumeEmail === void 0 ? void 0 : resumeEmail.textContent), 10, 20);
        doc.text("Education: ".concat(resumeEducation === null || resumeEducation === void 0 ? void 0 : resumeEducation.textContent), 10, 30);
        doc.text("Work Experience: ".concat(resumeWorkExperience === null || resumeWorkExperience === void 0 ? void 0 : resumeWorkExperience.textContent), 10, 40);
        var skillsList = Array.from((resumeSkills === null || resumeSkills === void 0 ? void 0 : resumeSkills.getElementsByTagName('li')) || []);
        var skillsText = 'Skills:\n';
        skillsList.forEach(function (item, index) {
            skillsText += "- ".concat(item.textContent, "\n");
        });
        doc.text(skillsText, 10, 50);
        // Save PDF
        doc.save('resume.pdf');
    });
}
