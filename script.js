
// Dynamic Copyright Year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

mobileBtn.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-open');
});

navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
    });
});

// Calendar Filter Tabs
function filterCalendar(category, btn) {
    document.querySelectorAll('.tab-btn').forEach(b => {
        b.classList.remove('active');
    });

    btn.classList.add('active');

    document.querySelectorAll('#calendarList .due-row').forEach(row => {
        if (category === 'all' || row.dataset.cat === category) {
            row.style.display = 'flex';
        } else {
            row.style.display = 'none';
        }
    });
}

// Service Modal Data
const serviceData = {
    tax: {
        title: 'Direct Taxation & Income Tax',
        desc: 'Structured support for accurate income computation, statutory filings, and representation under the Income Tax Act, 1961.',
        items: [
            'Income Tax Return (ITR-1 to ITR-7) preparation & filing',
            'Quarterly TDS / TCS returns (Forms 24Q, 26Q, 27Q) & Form 16/16A',
            'Advance tax estimation & capital gains computation',
            'Handling scrutiny notices, rectifications, and appellate support'
        ]
    },

    gst: {
        title: 'GST Advisory & Compliance',
        desc: 'Comprehensive GST compliance management to ensure timely filings and accurate input tax credit claims.',
        items: [
            'GST Registration, amendments, and cancellation support',
            'Monthly/Quarterly GSTR-1, GSTR-3B & CMP-08 filings',
            'GSTR-2B vs Purchase Register reconciliation',
            'Annual Return (GSTR-9) and Reconciliation Statement (GSTR-9C)'
        ]
    },

    audit: {
        title: 'Audit & Assurance',
        desc: 'Objective audit examinations carried out in accordance with Standards on Auditing and statutory mandates.',
        items: [
            'Statutory Audits under the Companies Act, 2013',
            'Tax Audits under Section 44AB of the Income Tax Act',
            'Internal Audits & Internal Financial Controls review',
            'Trust, Society, Cooperative & Stock Audits'
        ]
    },

    roc: {
        title: 'Company Law & Business Setup',
        desc: 'Assistance in choosing an appropriate business structure and maintaining annual statutory registers and MCA filings.',
        items: [
            'Incorporation of Private Limited, OPC, and LLP entities',
            'Partnership Deed drafting & MSME / Udyam Registration',
            'MCA Annual Filings (AOC-4, MGT-7, Form 8, Form 11)',
            'Director KYC (DIR-3 KYC), DIN allotment & statutory changes'
        ]
    },

    accounting: {
        title: 'Accounting & MIS Reporting',
        desc: 'Organised financial record-keeping and periodic reporting tailored to business operations.',
        items: [
            'End-to-end accounting & general ledger maintenance',
            'Finalisation of Balance Sheet and Profit & Loss Account',
            'Receivables, payables, and bank reconciliation tracking',
            'Management Information System (MIS) & cash flow reporting'
        ]
    },

    finance: {
        title: 'Project Finance & Certification',
        desc: 'Preparation of financial projections, banking documentation, and Chartered Accountant certifications.',
        items: [
            'CMA Data & Detailed Project Reports (DPR) for term/CC loans',
            'Net Worth, Turnover, and Working Capital Certificates',
            'Form 15CA / 15CB certification for foreign remittances',
            'Financial viability & ratio analysis reports'
        ]
    }
};

// Service Modal
const modal = document.getElementById('serviceModal');

function openServiceModal(key) {
    const data = serviceData[key];

    if (!data) {
        return;
    }

    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalDesc').textContent = data.desc;

    const listEl = document.getElementById('modalList');
    listEl.innerHTML = '';

    data.items.forEach(item => {
        const li = document.createElement('li');

        li.innerHTML = `
            <span style="color: var(--gold-500); font-weight:700;">✓</span>
            <span>${item}</span>
        `;

        listEl.appendChild(li);
    });

    modal.classList.add('open');
}

function closeServiceModal() {
    modal.classList.remove('open');
}

// Close modal when clicking outside it
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeServiceModal();
    }
});

// Contact Form Submission
// Uses mailto as a fallback until Formspree/backend is connected
document.getElementById('enquiryForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value.trim();

    const mailBody =
        `Name: ${name}%0D%0A` +
        `Phone: ${phone}%0D%0A` +
        `Email: ${email}%0D%0A` +
        `Service Area: ${subject}%0D%0A%0D%0A` +
        `Query:%0D%0A${encodeURIComponent(message)}`;

    window.location.href =
        `mailto:casatish79@gmail.com?subject=${encodeURIComponent('Website Enquiry: ' + subject)}&body=${mailBody}`;

    document.getElementById('formStatus').style.display = 'block';
});
