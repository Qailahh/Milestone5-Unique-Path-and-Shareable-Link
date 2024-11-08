// Select the form and resume output elements
const form = document.getElementById('resume-form') as HTMLFormElement | null;
const resumeName = document.getElementById('resume-name') as HTMLElement | null;
const resumeEmail = document.getElementById('resume-email') as HTMLElement | null;
const resumeLink = document.getElementById('resume-link') as HTMLElement | null;
const downloadButton = document.getElementById('download-pdf') as HTMLButtonElement | null;

// Fix for jsPDF loading
const jsPDF = (window as any).jsPDF; // Access jsPDF directly

// Ensure the form and elements are not null before proceeding
if (form && resumeName && resumeEmail && resumeLink && downloadButton) {
    form.addEventListener('submit', function (e: Event) {
        e.preventDefault(); // Prevent the form from submitting and refreshing the page

        // Capture user input values from the form
        const username = (document.getElementById('username') as HTMLInputElement | null)?.value ?? '';
        const name = (document.getElementById('name') as HTMLInputElement | null)?.value ?? '';
        const email = (document.getElementById('email') as HTMLInputElement | null)?.value ?? '';

        // Update resume sections dynamically
        resumeName.textContent = name || 'Not filled';
        resumeEmail.textContent = email || 'Not filled';

        // Generate unique resume URL
        const uniqueURL = `${username}.vercel.app/resume`; 
        resumeLink.textContent = `Share your resume: ${uniqueURL}`;
    });

    // PDF download functionality
    downloadButton.addEventListener('click', function () {
        const doc = new jsPDF();

        // Add resume content to PDF
        doc.text(`Name: ${resumeName?.textContent}`, 10, 10);
        doc.text(`Email: ${resumeEmail?.textContent}`, 10, 20);

        // Save PDF
        doc.save('resume.pdf');
    });
}
